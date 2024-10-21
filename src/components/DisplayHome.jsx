import { albumsData, songsData } from "../assets/assets"
import AlbumItem from "./AlbumItem"
import Navbar from "./Navbar"
import SongItem from "./SongItem"

const DisplayHome = () => {
    return (
        <div>
            <Navbar />
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
                <div className="flex overflow-auto ">
                    {albumsData.map((album) => (
                        <AlbumItem key={album.id} album={album} />
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Today&apos;s biggest hits</h1>
                <div className="flex overflow-auto ">
                    {songsData.map((song) => (
                        <SongItem key={song.id} song={song} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DisplayHome