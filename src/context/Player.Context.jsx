import { createContext, useMemo, useRef, useState } from "react"
import { songsData } from "../assets/assets"

export const PlayerContext = createContext()

const PlayerProvider = (props) => {
    const audioRef = useRef(null)
    const seekBg = useRef(null)
    const seekBar = useRef(null)

    const [track, setTrack] = useState(songsData[0])
    const [playStatus, setPlayStatus] = useState(false)
    const [time, setTime] = useState({
        currentTime: {
            seconds: 0,
            minutes: 0
        },
        totalTime: {
            seconds: 0,
            minutes: 0
        }
    })

    const play = () => {
        audioRef.current.play()
        setPlayStatus(true)
    }

    const pause = () => {
        audioRef.current.pause()
        setPlayStatus(false)
    }


    const contextValue = useMemo(() => {
        return {
            audioRef,
            seekBg,
            seekBar,
            track,
            setTrack,
            playStatus,
            setPlayStatus,
            time,
            setTime,
            play,
            pause
        }
    }, [audioRef, seekBg, seekBar, track, playStatus, time])

    // const contextValue = {
    //     audioRef,
    // seekBg,
    // seekBar,
    // track,
    // setTrack,
    // playStatus,
    // setPlayStatus,
    // time,
    // setTime
    // }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerProvider