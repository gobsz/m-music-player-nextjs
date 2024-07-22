export default function Icon ( props: {
    img: string,
    size: number
} ) {

    return (
        <img 
        src={props.img} 
        alt="icon" 
        style={{objectFit: "contain"}} 
        width={props.size} height={props.size}
        />
    )
}