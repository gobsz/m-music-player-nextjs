import SearchBar from "../_components/SearchBar";


export default function LoadingMain () {
  return (
    <main
    className="NOSCROLL flex flex-col flex-1 h-full bg-cyan-500/15 backdrop-blur-xl p-4 gap-2 overflow-y-scroll"
    >
      <div className="flex items-center gap-3 my-2">
        <h1 className="text-xl text-slate-300 w-fit">// Your Songs</h1>
        <SearchBar />
      </div>
    </main>
  );
}