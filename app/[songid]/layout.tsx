import { redirect } from "next/navigation";
import SideBar from "../_layout/SideBar";


export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { songid: string }
}>) {
  if ( params.songid === "undefined" ) {
    return redirect('/0/')
  }
  const songidNum = Number(params.songid)
    

  return (
    <>
        {children}
        <SideBar songid={ songidNum } />
    </>
  );
}
