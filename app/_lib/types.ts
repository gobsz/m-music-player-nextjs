

export type Song = {
    id: number,
    song_name: string,
    artist_name: string,
    img_url: string,
    isFavorite: boolean,
}

export type CreateSong = {
    song_name: string,
    artist_name?: string,
    song_url: string,
    img_url?: string,
}

export type SearchParams = {
    searchParams?: { query?: string }
}

export const defSong: Song = {
    id: 0,
    song_name: "Unknown Song",
    artist_name: "Unknown Artist",
    img_url: "https://media.idownloadblog.com/wp-content/uploads/2018/03/Apple-Music-icon-001.jpg",
    isFavorite: false,
}

export const PNGs = {
    account: "/assets/account.png",
    config0: "/assets/config0.png",
    config1: "/assets/config1.png",
    edit0: "/assets/edit0.png",
    edit1: "/assets/edit1.png",
    heart0: "/assets/heart0.png",
    heart1: "/assets/heart1.png", 
    home0: "/assets/home0.png",
    home1: "/assets/home1.png",
    login0: "/assets/login0.png",
    login1: "/assets/login1.png",
    logout0: "/assets/logout0.png",
    logout1: "/assets/logout1.png",
    m: "/assets/m.png",
    mute0: "/assets/mute0.png",
    mute1: "/assets/mute1.png",
    next0: "/assets/next0.png",
    next1: "/assets/next1.png",
    pause0: "/assets/pause0.png",
    pause1: "/assets/pause1.png",
    play0: "/assets/play0.png",
    play1: "/assets/play1.png",
    playlist0: "/assets/playlist0.png",
    playlist1: "/assets/playlist1.png",
    plus: "/assets/plus.png",
    previous0: "/assets/previous0.png",
    previous1: "/assets/previous1.png",
    replay0: "/assets/replay0.png",
    replay1: "/assets/replay1.png",
    shuffle0: "/assets/shuffle0.png",
    shuffle1: "/assets/shuffle1.png",
    songs0: "/assets/songs0.png",
    songs1: "/assets/songs1.png",
    volume0: "/assets/volume0.png",
    volume1: "/assets/volume1.png"
}