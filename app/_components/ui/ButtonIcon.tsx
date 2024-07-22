'use client';

import { useState } from "react";
import Icon from "./Icon";


export default function ButtonIcon ( props: { size: number, img0: string, img1: string } ) {
    const [ hoverButton, setHoverButton ] = useState(false)

    return (
        <div
        onMouseEnter={ () => setHoverButton(true) }
        onMouseLeave={ () => setHoverButton(false) }
        className="w-fit h-fit"
        >
            {
                hoverButton
                ? <Icon img={props.img1} size={props.size} />
                : <Icon img={props.img0} size={props.size} />
            }
        </div>
    )
}