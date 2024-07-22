'use client';

import { useRouter } from "next/navigation";
import { ActionDeleteSong } from "../../_lib/utils";
import { Song } from "@/app/_lib/types";


export default function DeleteForm ( props: { song: Song } ) {
    const router = useRouter()
    const song_name = props.song.song_name
    const artist_name = props.song.artist_name
    const id = props.song.id

    function action () {
        ActionDeleteSong( song_name, artist_name, id )
        router.push(`/${id}/`)
    }
  
    return (
        <form className="flex flex-col w-full bg-zinc-800/50 backdrop-blur-xl shadow-md rounded-md gap-3 p-4 my-2" action={ action }>
            <div className="flex w-full h-16 items-center justify-center gap-2 p-2">
                <h1 className="w-72 text-slate-300 text-lg">Delete a song if the url doesn't match what you want it to be</h1>
                <button type="submit" className="flex-1 text-center text-lg h-full text-slate-300 rounded-md bg-red-400/25 border-2 border-red-500/25 hover:bg-red-300/50 hover:border-red-400/50">Delete Song</button>
            </div>
        </form>
    );
}