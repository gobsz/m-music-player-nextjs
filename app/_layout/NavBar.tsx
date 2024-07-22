import NavIcons from "./nav/navIcons"
import { PNGs } from "../_lib/types"


export default function NavBar () {
    
    return (
        <section className="flex flex-col w-28 bg-zinc-800 h-full items-center p-4 box-border">
            <div className="flex w-16 h-16 bg-teal-400 rounded-full drop-shadow-lg justify-center p-4">
                <img
                src={PNGs.m} 
                alt="icon"
                style={{objectFit: "contain"}} 
                width={48} height={48}
                />
            </div>
            <h1 className="text-white my-2">player</h1>
            <NavIcons />
        </section>
    )
}