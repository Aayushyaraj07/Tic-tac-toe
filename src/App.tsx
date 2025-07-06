import { useState } from "react";
import "./App.css";
import Blocks from "./components/Blocks";

function App() {
  const [state,setState] = useState(Array(9).fill(null))
  const [currentTurn,setCurrentTurn] = useState('X')
  
  const checkWin  = (state: any) => {
    const win = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,7]
    ];
    for(let i=0; i<win.length; i++){
      const [a,b,c] = win[i];
      if(state[a]!== null && state[a] === state[b] && state[a] === state[c]){
        console.log("ha");
        return true;
      }
    }
    return false;
  }
  
  const handleClick = (index:number) => {
    const stateCopy = state.slice();
    if(stateCopy[index] !== null) return;
    stateCopy[index] = currentTurn;
        setState(stateCopy)
    setCurrentTurn(currentTurn === 'X' ? 'O' : 'X')
    const winp = checkWin(stateCopy)
    if(winp){
      setTimeout(()=>{
         alert(`${currentTurn} won the game`)
      },100)
     
    }

  }

  return ( 
    <>
      <div className="grid grid-rows-3 p-10 mt-60 m-auto w-[30%] rounded-xl bg-fuchsia-500">
        <div className="grid grid-cols-3">
         <Blocks onClick={()=>handleClick(0)} value={state[0]}/>
         <Blocks onClick={()=>handleClick(1)} value={state[1]}/>
         <Blocks onClick={()=>handleClick(2)} value={state[2]}/>
        </div>
        <div className="grid grid-cols-3">
         <Blocks onClick={()=>handleClick(3)} value={state[3]}/>
         <Blocks onClick={()=>handleClick(4)} value={state[4]}/>
         <Blocks onClick={()=>handleClick(5)} value={state[5]}/>
        </div>
        <div className="grid grid-cols-3">
         <Blocks onClick={()=>handleClick(6)} value={state[6]}/>
         <Blocks onClick={()=>handleClick(7)} value={state[7]}/>
         <Blocks onClick={()=>handleClick(8)} value={state[8]}/>
        </div>
      </div>
    </>
  );
}

export default App;
