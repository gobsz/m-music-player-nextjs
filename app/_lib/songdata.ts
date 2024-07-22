import fs from 'node:fs';
const ytdl = require('ytdl-core');

//ADD TRY CATCH
export function downloadSong ( song_url: string, song_name: string, artist_name: string ) {
    const path = `./public/music/${song_name} - ${artist_name}.mp4`
    const stream = ytdl( song_url, { quality: '140' } )
    
    if ( !fs.existsSync( path ) ) {
      stream.pipe( fs.createWriteStream( path ) );
      return "Downloading song"
    }
    return "Already downloaded"
}

export function updateSong (
  old_song_name: string,
  new_song_name: string,
  old_artist_name: string,
  new_artist_name: string
) {
  const oldSongPath = `./public/music/${old_song_name} - ${old_artist_name}.mp4`
  const newSongPath = `./public/music/${new_song_name} - ${new_artist_name}.mp4`
  
  if ( !fs.existsSync( oldSongPath ) ) {
    fs.renameSync( oldSongPath, newSongPath  )
  }
  
  return "Already downloaded"
}
  
export function deleteSong ( song_name: string, artist_name: string ) {
    const songpath = `./public/music/${song_name} - ${artist_name}.mp4`

    if ( fs.existsSync( songpath ) ) {
      fs.rm( songpath, { recursive: true, force: true }, err => {
        if (err) {
          console.error(err)
        }
      } )
    }
    return "Already deleted"
}