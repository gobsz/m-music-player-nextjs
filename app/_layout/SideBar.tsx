import MediaBar from "../_components/MediaBar";
import MapSongs from "../_components/MapSongs";
import { fetchArtistSongs, fetchLinearSong, fetchShuffleSong, fetchSong } from "../_lib/dbdata";
import { Song, defSong } from "../_lib/types";


export default async function SideBar ( props: { songid: string } ) {
    const id = Number( props.songid )
    const fetchedSong = await fetchSong( id )
    let song: Song

    if ( id !== 0 ) {
        song = fetchedSong || defSong
    } else {
        song = defSong
    }
    const artistSongs = await fetchArtistSongs( song.id || 1, song.artist_name || "Unknown Artist" )

    const linear = await fetchLinearSong( song.id )
    const shuffle = await fetchShuffleSong( song.id )

    return (
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
                className="w-72 h-72 shadow-xl rounded-md my-3 object-cover"
                />
                <h2 className="text-xl text-slate-300 text-center">{song.song_name}</h2>
                <h4 className="text-xl text-slate-500 text-center">{song.artist_name}</h4>
                <MediaBar song={song} linear={linear} shuffle={shuffle} />
            </div>
            <div className="w-full px-2 my-2">
                <h1 className="text-xl text-slate-300">// More from {song.artist_name || "Unknown Artist"}</h1>
            </div>
            <div className="flex flex-col w-full flex-1 h-full gap-2">
                <MapSongs songs={artistSongs} active={false}/>
            </div>
        </div>
    )
}