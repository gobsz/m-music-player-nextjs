'use client';

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import ButtonIcon from "./ui/ButtonIcon";
import { FavoriteSong } from "../_lib/utils";
import { Song, PNGs } from "../_lib/types";


export default function SongCard ( props: {
    id: Song["id"],
    songname: Song["song_name"],
    artist: Song["artist_name"],
    img: Song["img_url"],
    isFavorite: Song["isFavorite"],
    isActive: boolean
} ) {
    const router = useRouter()
    const [ hoverCard, setHoverCard ] = useState(false)

    const path = usePathname()
    const subpath = path.split("/")
    
    let songPath: string
    if ( subpath[2] ) {
        songPath = `/${props.id}/${subpath[2]}`
    } else {
        songPath = `/${props.id}/`
    }

    return (
        <div
        onMouseEnter={ () => setHoverCard(true) }
        onMouseLeave={ () => setHoverCard(false) }
        className="flex w-full items-center bg-cyan-100/15 backdrop-blur-xl shadow-md rounded-md p-2 gap-1 box-border border-2 border-teal-50/10 hover:border-teal-400"
        >
            <div
            className="relative w-12 h-12 drop-shadow-xl rounded-sm mx-2"
            > 
            {
                hoverCard &&
                <button className="flex w-12 h-12 bg-black/50 justify-center items-center absolute z-10" onClick={ () => router.push(songPath) }>
                    <ButtonIcon img0={PNGs.play0} img1={PNGs.play1} size={24} />
                </button>
            }
                <img
                src={props.img}
                className="w-12 h-12 rounded-sm drop-shadow-xl object-cover"
                />
            </div>
            <div className="flex-1">
                <h3 className="text-slate-300">
                    {props.songname}
                </h3>
                <p className="text-slate-400 text-sm">
                    {props.artist}
                </p>
            </div>
            {
                props.isActive &&
                <>
                    <button onClick={ () => router.push(`/${props.id}/editsong`) }>
                        <ButtonIcon
                        img0={PNGs.edit0}
                        img1={PNGs.edit1}
                        size={24}
                        />
                    </button>
                    {
                        props.isFavorite ?
                        (
                            <button onClick={ () => FavoriteSong( props.id , true ) }>
                                <ButtonIcon
                                img0={ PNGs.heart1 }
                                img1={ PNGs.heart0 }
                                size={24}
                                />
                            </button>
                        ) : (
                            <button onClick={ () => FavoriteSong( props.id , false ) }>
                                <ButtonIcon
                                img0={ PNGs.heart0 }
                                img1={ PNGs.heart1 }
                                size={24}
                                />
                            </button>
                        )
                    }
                </>
            }
        </div>
    )
}