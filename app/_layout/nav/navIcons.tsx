'use client';

import { useParams, usePathname } from "next/navigation"
import Link from "next/link";
import Icon from "../../_components/ui/Icon";
import { PNGs } from "@/app/_lib/types";
import ButtonIcon from "@/app/_components/ui/ButtonIcon";


export default function navIcons () {
    const path = usePathname()
    const param = useParams()
    const id = param.songid

    return (
        <nav className="flex flex-col flex-1">
            <div className="flex flex-col flex-1 items-center gap-4 my-8">
                <Link href={`/${id}`} replace>
                    {
                        path === `/${id}`
                        ?<Icon img={PNGs.home1} size={24}/>
                        :<Icon img={PNGs.home0} size={24}/>
                    }
                </Link>
                <Link href={`/${id}/songs`} replace>
                    {
                        path === `/${id}/songs`
                        ?<Icon img={PNGs.songs1} size={24}/>
                        :<Icon img={PNGs.songs0} size={24}/>
                    }
                </Link>
                <Link href={`/${id}/favorites`} replace>
                    {
                        path === `/${id}/favorites`
                        ?<Icon img={PNGs.heart1} size={24}/>
                        :<Icon img={PNGs.heart0} size={24}/>
                    }
                </Link>
                <Link href={`/${id}/configurations`} replace>
                    {
                        path === `/${id}/configurations`
                        ?<Icon img={PNGs.config1} size={24}/>
                        :<Icon img={PNGs.config0} size={24}/>
                    }
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <Link href={`/${id}/addsong`} className="flex w-8 h-8 bg-zinc-700 border-zinc-600 border-2 rounded-md drop-shadow-lg justify-center hover:border-teal-400/50" replace>
                    <img 
                    src={PNGs.plus} 
                    alt="icon" 
                    style={{objectFit: "contain"}} 
                    width={32} height={32}
                    />
                </Link>
                <Link href={`/${id}/profile`} className="flex w-12 h-12 bg-zinc-700 border-2 border-zinc-600 rounded-full drop-shadow-lg justify-center hover:border-teal-400/50" replace>
                    <img 
                    src={PNGs.account} 
                    alt="icon" 
                    style={{objectFit: "contain"}} 
                    width={48} height={48}
                    />
                </Link>
                    {
                        true ? //EDITTTTTTTTTTTTTT
                        (
                            <button>
                                <ButtonIcon img0={PNGs.logout0} img1={PNGs.logout1} size={24}/>
                            </button>
                        ) : (
                            <button>
                                <ButtonIcon img0={PNGs.login0} img1={PNGs.login1} size={24}/>
                            </button>
                        )
                    }
            </div>
        </nav>
    )
}