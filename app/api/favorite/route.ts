import { favoriteSong } from "@/app/_lib/dbdata";
import { NextResponse } from "next/server";


export async function PATCH ( request: Request ) {
    const data = await request.json()
    
    favoriteSong(
        data.id,
        data.isFavorite
    )

    return NextResponse.json({data})
}