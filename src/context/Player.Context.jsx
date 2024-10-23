import { createContext, useEffect, useMemo, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerProvider = ({ children }) => {
  const audioRef = useRef(null);
  const seekBgRef = useRef(null);
  const seekBarRef = useRef(null);

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: { seconds: 0, minutes: 0 },
    totalTime: { seconds: 0, minutes: 0 },
  });

  const convertDurationToSeconds = (durationString) => {
    const [minutes, seconds] = durationString.split(":").map(Number);
    return minutes * 60 + seconds;
  };

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithID = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  };

  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    } else {
      await setTrack(songsData[songsData.length - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    } else {
      await setTrack(songsData[0]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const seekSong = (e) => {
    if (!audioRef.current) return;

    const seekBg = seekBgRef.current;
    const trackDurationInSeconds = convertDurationToSeconds(track.duration);
    const seekPosition =
      (e.nativeEvent.offsetX / seekBg.offsetWidth) * trackDurationInSeconds;

    if (isNaN(seekPosition)) return;

    audioRef.current.currentTime = seekPosition;

    const progress = (seekPosition / trackDurationInSeconds) * 100;
    seekBarRef.current.style.width = `${Math.min(progress, 100)}%`;

    setTime((prevTime) => ({
      ...prevTime,
      currentTime: {
        seconds: Math.floor(seekPosition % 60),
        minutes: Math.floor(seekPosition / 60),
      },
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current.duration) {
        const progress =
          (audioRef.current.currentTime /
            convertDurationToSeconds(track.duration)) *
          100;
        seekBarRef.current.style.width = `${Math.min(progress, 100)}%`;
        const currentTime = audioRef.current.currentTime;
        const totalTime = track.duration.split(":").map(Number);
        setTime({
          currentTime: {
            seconds: Math.floor(currentTime % 60),
            minutes: Math.floor(currentTime / 60),
          },
          totalTime: {
            seconds: totalTime[1],
            minutes: totalTime[0],
          },
        });

        if (progress >= 100) {
          pause();
          audioRef.current.currentTime = 0;
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [audioRef, track]);

  useEffect(() => {
    audioRef.current.currentTime = 0;
    setPlayStatus(false);
  }, [track]);

  const contextValue = {
    audioRef,
    seekBg: seekBgRef,
    seekBar: seekBarRef,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithID,
    previous,
    next,
    seekSong,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
