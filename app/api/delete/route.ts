import { removeSong } from "@/app/_lib/data";
import { NextResponse } from "next/server";


export async function DELETE ( request: Request ) {
    const data = await request.json()
    
    removeSong(
        data.id,
        data.song_name,
        data.artist_name
    )

    return NextResponse.json({data})
}