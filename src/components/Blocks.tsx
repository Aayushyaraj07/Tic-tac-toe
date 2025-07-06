 interface BlockProps {
    value? : string | null
    onClick?: ()=>void
 }
 const Blocks = (props : BlockProps) => {
    return(
        <div onClick={props.onClick} className="p-10 text-center cursor-pointer text-4xl font-extrabold bg-white m-3 rounded-xl">{props.value}</div>
    )
 }

 export default Blocks;