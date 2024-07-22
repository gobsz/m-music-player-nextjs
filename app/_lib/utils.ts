import { Song } from "./types";


export async function ActionCreateSong ( formData: FormData ) {
  const response = await fetch( "/api/create", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify( {
      song_name: formData.get( "SongName" ),
      artist_name: formData.get( "ArtistName" ),
      song_url: formData.get( "SongUrl" ),
      img_url: formData.get( "ImgUrl" )
    } )
  } );
  return response;
}

export async function FavoriteSong ( id: Song[ "id" ], prevState: boolean ) {
  const response = await fetch( "/api/favorite", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify( {
      id: id,
      isFavorite: prevState
    } )
  } );
  return response;
}

export async function ActionEditSong ( formData: FormData, id: Song[ "id" ] ) {
  const response = await fetch( "/api/edit", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify( {
      id: id,
      new_song_name: formData.get( "SongName" ),
      new_artist_name: formData.get( "ArtistName" ),
      new_img_url: formData.get( "ImgUrl" )
    } )
  } );

  return response;
}

export async function ActionDeleteSong (
  song_name: Song[ "song_name" ],
  artist_name: Song[ "artist_name" ],
  id: Song[ "id" ]
) {
  const response = await fetch( "/api/delete", {
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify( {
      id: id,
      song_name: song_name,
      artist_name: artist_name
    } )
  } );

  return response;
}

export function formatTime ( time: string ): string {
  let numTime = Number( time );

  const hours = Math.floor( numTime / 3600 );
  const minutes = Math.floor( numTime / 60 ) - ( hours * 60 );
  const seconds = Math.floor( numTime ) - ( minutes * 60 ) - ( hours * 60 );

  if ( hours === 0 ) {
    if ( minutes >= 10 ) {
      if ( seconds >= 10 ) {
        return `${minutes}:${seconds}`;
      } else {
        return `${minutes}:0${seconds}`;
      }
    } else {
      if ( seconds >= 10 ) {
        return `0${minutes}:${seconds}`;
      } else {
        return `0${minutes}:0${seconds}`;
      }
    }
  } else {
    if ( minutes >= 10 ) {
      if ( seconds >= 10 ) {
        return `${hours}:${minutes}:${seconds}`;
      } else {
        return `${hours}:${minutes}:0${seconds}`;
      }
    } else {
      if ( seconds >= 10 ) {
        return `${hours}:0${minutes}:${seconds}`;
      } else {
        return `${hours}:0${minutes}:0${seconds}`;
      }
    }
  }
}