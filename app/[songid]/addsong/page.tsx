'use client';

import { ActionCreateSong } from "@/app/_lib/utils";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";


export default function AddSong() {
  const router = useRouter()

  const params = useParams()
  const id = Number( params.songid )
  
  function action ( formData: FormData ) {
    ActionCreateSong(formData)
    router.push(`/${id}/`)
  }
  
  return (
    <main
    className="flex flex-col flex-1 h-full bg-cyan-500/15 backdrop-blur-xl p-4"
    >
      <h1 className="text-xl text-slate-300">// Add a Song</h1>
      <form className="flex flex-col w-full bg-zinc-800/50 backdrop-blur-xl shadow-md rounded-md gap-3 p-4 my-2" action={action}>
        <div className="flex text-slate-300 items-center gap-3">
          <label htmlFor="SongName" className="w-24">Song Name:</label>
          <input
          required
          name="SongName"
          type="text"
          placeholder="Sandstorm"
          className="NOSELECT flex-1 bg-transparent border-2 border-teal-400/25 rounded-md px-2 py-1"
          />
        </div>
        <div className="flex text-slate-300 items-center gap-3">
        <label htmlFor="ArtistName" className="w-24">Artist Name:</label>
          <input
          name="ArtistName"
          type="text"
          placeholder="Darude"
          className="NOSELECT flex-1 bg-transparent border-2 border-teal-400/25 rounded-md px-2 py-1"
          />
        </div>
        <div className="flex text-slate-300 items-center gap-3">
        <label htmlFor="SongUrl" className="w-24">SongUrl:</label>
          <input
          required
          name="SongUrl"
          type="text"
          placeholder="http://youtube.com"
          className="NOSELECT flex-1 bg-transparent border-2 border-teal-400/25 rounded-md px-2 py-1"
          />
        </div>
        <div className="flex text-slate-300 items-center gap-3">
        <label htmlFor="ImgUrl" className="w-24">Cover Url:</label>
          <input
          name="ImgUrl"
          type="text"
          placeholder="http://bestcovers.com"
          className="NOSELECT flex-1 bg-transparent border-2 border-teal-400/25 rounded-md px-2 py-1"
          />
        </div>
        <div className="flex w-full h-16 items-center justify-center gap-2 p-2">
          <Link href="/0" className="flex flex-1 justify-center items-center text-lg h-full text-slate-300 rounded-md bg-zinc-300/25 border-2 border-zinc-400/25 hover:bg-zinc-200/50 hover:border-zinc-300/50">Cancel</Link>
          <button type="submit" className="flex-1 text-center text-lg h-full text-slate-300 rounded-md bg-teal-300/25 border-2 border-teal-400/25 hover:bg-teal-200/50 hover:border-teal-300/50">Add Song</button>
        </div>
      </form>
    </main>
  );
}