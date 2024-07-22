'use client'

import Link from "next/link";


export default async function FourOFour() {
    
    return (
      <main
      className="flex flex-col flex-1 h-full bg-cyan-500/15 backdrop-blur-xl justify-center items-center gap-4"
      >
        <h1 className="text-9xl text-slate-300">// 404</h1>
        <Link href="/" >
            <h3 className="text-4xl text-slate-500 underline cursor-pointer hover:text-slate-400">Return to main page</h3>
        </Link>
      </main>
    );
}