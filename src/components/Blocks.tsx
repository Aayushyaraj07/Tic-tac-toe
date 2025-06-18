 interface BlockProps {
    value? : any
 }
 const Blocks = (props : BlockProps) => {
    return(
        <div className="p-10 text-center bg-white m-3 rounded-xl">{props.value}</div>
    )
 }

 export default Blocks;