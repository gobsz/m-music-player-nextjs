import MediaBar from "./_components/MediaBar";
import SearchBar from "./_components/SearchBar";
import { defSong } from "./_lib/types";


export default function LoadingSideBar () {
    const song = defSong

    return (
        <>
            <main
            className="NOSCROLL flex flex-col flex-1 h-full bg-cyan-500/15 backdrop-blur-xl p-4 gap-2 overflow-y-scroll"
            >
                <div className="flex items-center gap-3 my-2">
                    <h1 className="text-xl text-slate-300 w-fit">// Your Songs</h1>
                    <SearchBar />
                </div>
            </main>
            <div
            id="SIDEBAR"
            className="NOSCROLL flex flex-col w-80 h-full bg-cyan-500/15 backdrop-blur-xl items-center p-2 overflow-y-scroll"
            >
                <div className="w-full px-2 my-2">
                    <h1 className="text-xl text-slate-300">// Now Playing...</h1>
                </div>
                <div className="flex flex-col w-full items-center bg-cyan-100/15 backdrop-blur-xl shadow-md rounded-md px-3">
                        <img
                        src={ song.img_url }
                        alt="song cover"
                        className="w-72 h-72 shadow-xl rounded-md my-4 object-cover"
                        />
                        <h2 className="text-xl text-slate-300 text-center">{song.song_name}</h2>
                        <h4 className="text-xl text-slate-500 text-center">{song.artist_name}</h4>
                    <div className="flex w-full justify-center gap-2 px-2 my-4">
                        <p className="text-xs text-zinc-400">0:00</p>
                        <input
                        type="range"
                        className="flex-1"
                        />
                        <p className="text-xs text-zinc-400">0:00</p>
                    </div>
                    <MediaBar song={song}/>
                </div>
            </div>
        </>
    )
}