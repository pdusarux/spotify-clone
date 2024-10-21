import { assets, songsData } from "../assets/assets"

const Player = () => {
    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
            <div className="lg:flex items-center gap-4 hidden">
                <img className="w-12" src={songsData[0].image} alt="mini-player" />
                <div>
                    <p className="text-sm">{songsData[0].name}</p>
                    <p className="text-xs">{songsData[0].desc.slice(0, 12)}...</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 m-auto">
                <div className="flex gap-4">
                    <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="shuffle" />
                    <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="previous" />
                    <img className="w-4 cursor-pointer" src={assets.play_icon} alt="pause" />
                    <img className="w-4 cursor-pointer" src={assets.next_icon} alt="next" />
                    <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="loop" />
                </div>
                <div className="flex items-center gap-5">
                    <p>1:06</p>
                    <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr className='w-0 h-1 border-none bg-[#1ed760] rounded-full' />
                    </div>
                    <p>3:26</p>
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-2 opacity-75">
                <img className="w-4 cursor-pointer" src={assets.plays_icon} alt="plays" />
                <img className="w-4 cursor-pointer" src={assets.mic_icon} alt="mic" />
                <img className="w-4 cursor-pointer" src={assets.queue_icon} alt="queue" />
                <img className="w-4 cursor-pointer" src={assets.speaker_icon} alt="speaker" />
                <img className="w-4 cursor-pointer" src={assets.volume_icon} alt="volume" />
                <div className="w-20 bg-slate-50 h-1 rounded"></div>
                <img className="w-4 cursor-pointer" src={assets.mini_player_icon} alt="mini-player" />
                <img className="w-4 cursor-pointer" src={assets.zoom_icon} alt="zoom" />
            </div>
        </div>
    )
}

export default Player