'use client';

import ButtonIcon from "./ui/ButtonIcon";
import { useRef, useState } from "react"
import { PNGs, Song } from "../_lib/types";
import { formatTime } from "../_lib/utils";
import { FavoriteSong } from "../_lib/utils"
import { usePathname, useRouter } from "next/navigation"


export default function MediaBar ( props: { song: Song, linear: number, shuffle: number } ) {
    //PREVIOUS BUTTON MISSING
    const song = props.song
    const song_name = song.song_name;
    const artist_name = song.artist_name;

    const router = useRouter()
    const path = usePathname()
    const subpath = path.split("/")[2] ? "/" + path.split("/")[2] : ""

    const videoRef = useRef<HTMLVideoElement>(null)
    const progressRef = useRef<HTMLInputElement>(null)
    const volumeRef = useRef<HTMLInputElement>(null)
    
    const [ play, setPlay ] = useState(true)
    const [ shuffle, setShuffle ] = useState(false)
    const [ replay, setReplay ] = useState(false)
    
    const [ mute, setMute ] = useState(false)

    const [ currTime, setCurrTime ] = useState("--:--")
    const [ duration, setDuration ] = useState("--:--")

    if ( videoRef.current ) {
        const video = videoRef.current
        const progress = progressRef.current

        video.onloadedmetadata = function () {
            if ( progress ) {
                progress.max = String( video.duration )
                progress.value = String( video.currentTime )

                setCurrTime( () => formatTime(progress.value) )
                setDuration( () => formatTime(progress.max) )
            }
        }

        if ( progress ) {
            progress.onchange = function () {
                video.play()
                video.currentTime = Number( progress.value )
            }
        }

        if ( volumeRef.current ) {
            const volume = volumeRef.current
            volumeRef.current.onchange = function () {
                video.volume = Number( volume.value ) / 100
            }
        }

        video.onended = function () {
            if ( !video.loop ) {
                shuffle
                ? router.push(`/${props.shuffle}${subpath}`)
                : router.push(`/${props.linear}${subpath}`)
            }
        }
    }

    function togglePlay () {
        const video = videoRef.current;
        if (video) {
            setPlay( p => !p );
            play ? video.play() : video.pause()
        }
    }

    if ( videoRef.current?.play ) {
        const video = videoRef.current;
        if ( progressRef.current ) {
            const progress = progressRef.current
            setInterval( () => {
                progress.value = String( video.currentTime )
                setCurrTime( () => formatTime(progress.value) )
            }, 500 )
        }
    }

    function mutePlayer () {
        if ( videoRef.current ) {
            const video = videoRef.current
            if ( video.muted ) {
                video.muted = false
                setMute(false)
            } else {
                video.muted = true
                setMute(true)
            }
        }
    }

    function loopPlayer () {
        if ( videoRef.current ) {
            const video = videoRef.current
            if ( video.loop ) {
                video.loop = false
                setReplay(false)
            } else {
                video.loop = true
                setReplay(true)
            }
        }
    }

    function NextPlayer () {
        shuffle
        ? router.push(`/${props.shuffle}${subpath}`)
        : router.push(`/${props.linear}${subpath}`)
    }

    return (
        <>
            <div className="flex w-full justify-center items-center gap-2 px-2 mt-4">
                <p className="text-xs text-zinc-400">{currTime}</p>
                <input type="range" ref={progressRef} className="SLIDERBAR SB1 flex-1 h-1 bg-teal-400 rounded-md cursor-pointer"/>
                <p className="text-xs text-zinc-400">{duration}</p>
            </div>

            <div className="flex w-full h-16 justify-center items-center gap-2 my-2">
                {
                    shuffle ?
                    (
                        <button onClick={ () => setShuffle(false) }>
                            <ButtonIcon size={24} img0={PNGs.shuffle1} img1={PNGs.shuffle0} />
                        </button>
                    ) : (
                        <button onClick={ () => setShuffle(true) }>
                            <ButtonIcon size={24} img0={PNGs.shuffle0} img1={PNGs.shuffle1} />
                        </button>
                    )
                }
                <button onClick={ () => router.back() }>
                    <ButtonIcon size={48} img0={PNGs.previous0} img1={PNGs.previous1} />
                </button>

                <button onClick={ togglePlay }>
                    {
                        play
                        ? <ButtonIcon size={40} img0={PNGs.play0} img1={PNGs.play1} />
                        : <ButtonIcon size={40} img0={PNGs.pause0} img1={PNGs.pause1} />
                    }
                </button>

                <button onClick={ NextPlayer }>
                    <ButtonIcon size={48} img0={PNGs.next0} img1={PNGs.next1} />
                </button>
                {
                    replay ?
                    (
                        <button onClick={ loopPlayer }>
                            <ButtonIcon size={24} img0={PNGs.replay1} img1={PNGs.replay0} />
                        </button>
                    ) : (
                        <button onClick={ loopPlayer }>
                            <ButtonIcon size={24} img0={PNGs.replay0} img1={PNGs.replay1} />
                        </button>
                    )
                }
            </div>

            <div className="invisible">
                <video width="0" height="0" ref={videoRef} controls preload="none" >
                    <source src={`music/${song_name} - ${artist_name}.mp4`} type="video/mp4" />
                </video>
            </div>

            <div className="flex w-full items-center justify-center bg-cyan-100/15 backdrop-blur-xl shadow-md rounded-md gap-1 px-4 py-2 mb-3">
                {
                    mute ?
                    (
                        <button onClick={ mutePlayer }>
                            <ButtonIcon img0={ PNGs.mute0 } img1={ PNGs.mute1 } size={24} />
                        </button>
                    ) : (
                        <button onClick={ mutePlayer }>
                            <ButtonIcon img0={ PNGs.volume0 } img1={ PNGs.volume1 } size={24} />
                        </button>
                    )
                }
                <input type="range" ref={volumeRef} className="SLIDERBAR SB2 flex-1 h-1 bg-teal-400 rounded-md cursor-pointer ml-1 mr-4"/>
                <button onClick={ () => router.push(`/${props.song.id}/editsong`) }>
                    <ButtonIcon img0={PNGs.edit0} img1={PNGs.edit1} size={24} />
                </button>
                {
                    props.song.isFavorite ?
                    (
                        <button onClick={ () => FavoriteSong( props.song.id , true ) }>
                            <ButtonIcon img0={ PNGs.heart1 } img1={ PNGs.heart0 } size={24} />
                        </button>
                    ) : (   
                        <button onClick={ () => FavoriteSong( props.song.id , false ) }>
                            <ButtonIcon img0={ PNGs.heart0 } img1={ PNGs.heart1 } size={24} />
                        </button>
                    )
                }
            </div>
        </>
    )
}