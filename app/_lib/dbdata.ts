import { PrismaClient } from '@prisma/client'
import { Playlist, Song } from './types';
const fs = require("fs");
export const prisma = new PrismaClient()

//ADD TRY CATCH
export async function fetchSongs (): Promise<Song[]> {
    const songs = await prisma.songs.findMany()
    return songs
}

export async function fetchSong ( id: Song["id"] ) {
    const song = await prisma.songs.findUnique({
        where: {
            id: id
        }
    })
    return song
}

export async function fetchFavoriteSongs () {
    const favSongs = await prisma.songs.findMany({
        where : {
            isFavorite: true
        }
    })
    return favSongs
}

export async function fetchArtistSongs( id: Song["id"], artist_name: Song["artist_name"] ) {
    const artistSongs = await prisma.songs.findMany({
        where : {
            artist_name: {
                contains: artist_name
            },
            id: {
                not: id
            }
        }
    })
    return artistSongs
}

export async function fetchLinearSong ( id: Song["id"] ) {
    const linearSong = await prisma.songs.findFirst({
        where: {
            id: {
                gt: id
            }
        },
        select: {
            id: true
        }
    })
    if ( linearSong ) {
        return linearSong.id
    } else {
        return 0
    }
}

export async function fetchShuffleSong ( id: Song["id"] ) {
    const shuffleSong = await prisma.songs.findFirst({
        where: {
            id: {
                not: id
            }
        },
        select: {
            id: true
        }
    })
    if ( shuffleSong ) {
        return shuffleSong.id
    } else {
        return 0
    }
}

export async function createSongDB (
    song_name: string,
    artist_name: string,
    song_url: string,
    img_url: string
) {
    try {
        const songPath = `@/app/music/${song_name} - ${artist_name}.mp4`;

        if ( !fs.existsSync( songPath ) ) {
            const newsong = await prisma.songs.create({
                data: {
                    song_name: song_name,
                    artist_name: artist_name,
                    song_path: songPath,
                    song_url: song_url,
                    img_url: img_url,
                    isFavorite: false
                }
            })
            return newsong
        }
        return "Song already exists"
    } catch (err) {
        console.log(err)
    }
}

export async function updateSongDB (
    id: number,
    newsong: string,
    newartist: string,
    newimg: string
) {
    const newSongPath = `@/app/music/${newsong}.mp4`;

    const editedSong = await prisma.songs.update({
        where: {
            id: id
        },
        data: {
            song_name: newsong,
            artist_name: newartist,
            song_path: newSongPath,
            img_url: newimg
        }
    })
    return editedSong
}

export async function deleteSongDB ( id: number ) {
    await prisma.songs.delete({
        where : {
            id: id
        }
    })
    return "Song removed from db"
}

export async function favoriteSong ( id: number, prevState: boolean ) {
    const currState = !prevState

    try {
        await prisma.songs.update({
            where: {
                id: id
            },
            data: {
                isFavorite: currState
            }
        })
    } catch (err) {
        return err
    }
    return "Saved"
}