import DeleteForm from "@/app/_components/forms/DeleteForm";
import EditForm from "@/app/_components/forms/EditForm";
import { fetchSong } from "@/app/_lib/dbdata";
import { Song, defSong } from "@/app/_lib/types";


export default async function EditSong({ params } : { params: { songid: Song["id"] } }) {
  const song = await fetchSong( Number( params.songid ) ) || defSong

  return (
    <main
    className="flex flex-col flex-1 h-full bg-cyan-500/15 backdrop-blur-xl p-4"
    >
      <h1 className="text-xl text-slate-300">// Edit Song</h1>
      <EditForm song={song}/>
      <h1 className="text-xl text-slate-300">// Delete Song</h1>
      <DeleteForm song={song}/>
    </main>
  );
}