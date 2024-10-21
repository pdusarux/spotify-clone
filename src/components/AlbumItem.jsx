import PropTypes from "prop-types"

const AlbumItem = ({ album }) => {


    return (
        <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
            <img className="rounded" src={album.image} alt={album.name} />
            <p className="font-bold mt-2 mb-1">{album.name}</p>
            <p className="text-sm text-slate-200">{album.desc}</p>
        </div>
    )
}

AlbumItem.propTypes = {
    album: PropTypes.object.isRequired
}


export default AlbumItem