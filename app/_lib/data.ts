import { downloadSong, updateSong, deleteSong } from "./songdata";
import { createSongDB, updateSongDB, deleteSongDB } from "./dbdata";

//ADD TRY CATCH
export function createSong (
    song_name: string,
    artist_name: string,
    song_url: string,
    img_url: string
) {
    downloadSong( song_url, song_name, artist_name );
    createSongDB( song_name, artist_name, song_url, img_url );

    return "Song Created"
}

export function editSong (
    id: number,
    old_song_name: string,
    old_artist_name: string,
    old_img_url: string,
    new_song_name: string,
    new_artist_name: string,
    new_img_url: string
) {
    if( old_song_name === new_song_name && old_artist_name === new_artist_name && old_img_url === new_img_url ) { return "No changes were made" }

    if ( old_song_name === new_song_name ) { new_song_name = old_song_name }
    if ( old_artist_name === new_artist_name ) { new_artist_name = old_artist_name }
    if ( old_img_url === new_img_url ) { new_img_url = old_img_url }

    if ( old_song_name !== new_song_name || old_artist_name !== new_artist_name ) { updateSong( old_song_name, new_song_name, old_artist_name, new_artist_name ) }

    updateSongDB( id, new_song_name, new_artist_name, new_img_url );

    return "Song edited"
}

export function removeSong(
    id: number,
    song_name: string,
    artist_name: string
) {
    deleteSong( song_name, artist_name );
    deleteSongDB( id );

    return "Song Removed"
}