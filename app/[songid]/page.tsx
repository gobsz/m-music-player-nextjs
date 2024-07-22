import { fetchSongs } from "../_lib/dbdata";
import MapSongs from "../_components/MapSongs";
import SearchBar from "../_components/SearchBar";
import { SearchParams } from "../_lib/types";


export default async function Home ( { searchParams }: SearchParams ) {
  const songs = await fetchSongs()
  const query = searchParams?.query || ""
  
  const filteredSongs = songs.filter( song => {
    if ( song.song_name.toLowerCase().includes( query ) || song.artist_name.toLowerCase().includes( query ) ) {
      return song
    }
  } )

  return (
    <main
    className="NOSCROLL flex flex-col flex-1 h-full bg-cyan-500/15 backdrop-blur-xl p-4 gap-2 overflow-y-scroll"
    >
      <div className="flex items-center gap-3 my-2">
        <h1 className="text-xl text-slate-300 w-fit">// Your Songs</h1>
        <SearchBar />
      </div>
        {
          filteredSongs.length <= 0
          ? (
              <div
              className="flex flex-col flex-1 h-full justify-center items-center gap-4"
              >
                <h1 className="text-9xl text-slate-300">// 0 matches</h1>
                <h3 className="text-4xl text-slate-500">Add more songs!</h3>
              </div>
          )
          : <MapSongs songs={filteredSongs} active={true}/>
        }
    </main>
  );
}