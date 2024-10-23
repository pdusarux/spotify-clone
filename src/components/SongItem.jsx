import PropTypes from "prop-types";
import { useContext } from "react";
import { PlayerContext } from "../context/Player.Context";

const SongItem = ({ song }) => {
  const { playWithID } = useContext(PlayerContext);

  return (
    <div
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
      onClick={() => playWithID(song.id)}
    >
      <img className="rounded" src={song.image} alt={song.name} />
      <p className="font-bold mt-2 mb-1">{song.name}</p>
      <p className="text-sm text-slate-200">{song.desc}</p>
    </div>
  );
};

SongItem.propTypes = {
  song: PropTypes.object.isRequired,
};

export default SongItem;
