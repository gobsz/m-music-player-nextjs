'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation"


export default function SearchBar () {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
  
    function handleSearch ( term: string ) {
        const params = new URLSearchParams(searchParams);

        if (term) {
            term = term.toLowerCase()
            params.set('query', term);
        } else {
            params.delete('query');
        }
        
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <input
        type="text"
        placeholder="Search..."
        className="NOSELECT flex-1 bg-transparent border-2 border-teal-400/25 text-slate-300 rounded-md px-2 py-1"
        onChange={ e =>  handleSearch( e.target.value ) }
        />
    )
}