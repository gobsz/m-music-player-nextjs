import { editSong } from "@/app/_lib/data";
import { prisma } from "@/app/_lib/dbdata";
import { Song, defSong } from "@/app/_lib/types";
import { NextResponse } from "next/server";


export async function PATCH ( request: Request ) {
    const data = await request.json()
    let song: Song

    try {
        const res = await prisma.songs.findUnique({
            where: {
                id: data.id
            }
        }) as Song
        song = res
    } catch ( err ) {
        song = defSong
    }

    let song_name: Song["song_name"]
    let artist_name: Song["artist_name"]
    let img_url: Song["img_url"]

    if ( data.new_song_name === "" ) {
        song_name = song.song_name
    } else {
        song_name = data.new_song_name
    }

    if ( data.new_artist_name === "" ) {
        artist_name = song.artist_name
    } else {
        artist_name = data.new_artist_name
    }

    if ( data.new_img_url === "" ) {
        img_url = song.img_url
    } else {
        img_url = data.new_img_url
    }
    
    editSong(
        data.id,
        song.song_name,
        song.artist_name,
        song.img_url,
        song_name,
        artist_name,
        img_url
    )

    return NextResponse.json({data})
}