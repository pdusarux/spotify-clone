import PropTypes from "prop-types"

const SongItem = ({ song }) => {
    return (
        <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
            <img className="rounded" src={song.image} alt={song.name} />
            <p className="font-bold mt-2 mb-1">{song.name}</p>
            <p className="text-sm text-slate-200">{song.desc}</p>
        </div>
    )
}

SongItem.propTypes = {
    song: PropTypes.object.isRequired
}

export default SongItem