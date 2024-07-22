import SongCard from "./SongCard"
import { Song } from "../_lib/types"


export default function MapSongs ( props: { songs: Song[] , active: boolean } ) {
  //RETURNING THE LAST ELEMENT TWICE
  props.songs.sort( ( a, b ) => {
    return a.id - b.id
  } )

  const songsList = props.songs.map( ( song , idx) => {
    return (
      <SongCard
      key={idx}
      id={song.id}
      songname={song.song_name}
      artist={song.artist_name}
      img={song.img_url}
      isFavorite={song.isFavorite}
      isActive={props.active}/>
    )
  } )

  return (
    <>
      { songsList }
    </>
  )
}