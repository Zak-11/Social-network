import React from "react";


export type SongsPageType = {
    id: number
    artist: string
    songs: string
}


export function MusicItem(props: SongsPageType) {

    return <div> {props.id}
        {props.artist}
        {props.songs}
    </div>


}
