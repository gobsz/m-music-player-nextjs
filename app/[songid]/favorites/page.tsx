import SearchBar from "@/app/_components/SearchBar";
import { fetchFavoriteSongs } from "../../_lib/dbdata";
import MapSongs from "@/app/_components/MapSongs";
import { SearchParams } from "@/app/_lib/types";
import { Suspense } from "react";


export default async function FavoritesPage ( { searchParams }: SearchParams ) {
  const favSongs = await fetchFavoriteSongs()
  const query = searchParams?.query || ""
  
  const favFilteredSongs = favSongs.filter( song => {
    if ( song.song_name.toLowerCase().includes( query ) || song.artist_name.toLowerCase().includes( query ) ) {
      return song
    }
  } )

  return (
    <main
    className="NOSCROLL flex flex-col flex-1 h-full bg-cyan-500/15 backdrop-blur-xl p-4 gap-2 overflow-y-scroll"
    >
      <div className="flex items-center gap-3 my-2">
        <h1 className="text-xl text-slate-300 w-fit">// Favorite Songs</h1>
        <SearchBar />
      </div>
      <Suspense fallback={<h2 className="text-slate-400 text-2xl">Loading songs...</h2>}>
      {
        favFilteredSongs.length <= 0
        ? (
          <div
          className="flex flex-col flex-1 h-full justify-center items-center gap-4"
          >
              <h1 className="text-9xl text-slate-300">// 0 favorite songs</h1>
              <h3 className="text-4xl text-slate-500">Favorite more songs!</h3>
            </div>
        ) : <MapSongs songs={favFilteredSongs} active={true} />
      }
      </Suspense>
    </main>
  )
}