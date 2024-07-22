'use client';

import Link from "next/link";
import { Song } from "../../_lib/types";
import { useParams, useRouter } from "next/navigation";
import { ActionEditSong } from "../../_lib/utils";


export default function EditForm( props: { song: Song } ) {
    const song = props.song
    const router = useRouter()

    const params = useParams()
    const id = Number( params.songid )

    function action ( formData: FormData ) {
        ActionEditSong( formData, id )
        router.push(`/${id}/`)
    }
  
    return (
        <form className="flex flex-col w-full bg-zinc-800/50 backdrop-blur-xl shadow-md rounded-md gap-3 p-4 my-2" action={ action }>
            <div className="flex text-slate-300 items-center gap-3">
                <label htmlFor="SongName" className="w-24">Song Name:</label>
                <input
                name="SongName"
                type="text"
                placeholder={song.song_name}
                className="NOSELECT flex-1 bg-transparent border-2 border-teal-400/25 rounded-md px-2 py-1"
                />
            </div>
            <div className="flex text-slate-300 items-center gap-3">
                <label htmlFor="ArtistName" className="w-24">Artist Name:</label>
                <input
                name="ArtistName"
                type="text"
                placeholder={song.artist_name}
                className="NOSELECT flex-1 bg-transparent border-2 border-teal-400/25 rounded-md px-2 py-1"
                />
            </div>
            <div className="flex text-slate-300 items-center gap-3">
                <label htmlFor="ImgUrl" className="w-24">Cover Url:</label>
                <input
                name="ImgUrl"
                type="text"
                placeholder={song.img_url}
                className="NOSELECT flex-1 bg-transparent border-2 border-teal-400/25 rounded-md px-2 py-1"
                />
            </div>
            <div className="flex w-full h-16 items-center justify-center gap-2 p-2">
                <Link href={`/${id}`} className="flex flex-1 justify-center items-center text-lg h-full text-slate-300 rounded-md bg-zinc-300/25 border-2 border-zinc-400/25 hover:bg-zinc-200/50 hover:border-zinc-300/50">Cancel</Link>
                <button type="submit" className="flex-1 text-center text-lg h-full text-slate-300 rounded-md bg-teal-300/25 border-2 border-teal-400/25 hover:bg-teal-200/50 hover:border-teal-300/50">Edit Song</button>
            </div>
        </form>
    );
}