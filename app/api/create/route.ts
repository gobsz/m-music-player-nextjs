import { createSong } from "@/app/_lib/data";
import { NextResponse } from "next/server";


export async function POST ( request: Request ) {
    const data = await request.json()
    if ( data.artist_name === "" ) { data.artist_name = "Unknown Artist" }
    if ( data.img_url === "" ) { data.img_url = "https://media.idownloadblog.com/wp-content/uploads/2018/03/Apple-Music-icon-001.jpg" }
    
    createSong(
        data.song_name,
        data.artist_name,
        data.song_url,
        data.img_url
    )

    return NextResponse.json({data})
}