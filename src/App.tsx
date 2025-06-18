import { useState } from "react";
import "./App.css";
import Blocks from "./components/Blocks";

function App() {
  const [state,_setState] = useState(Array(9).fill(null))
  console.log(state)
  return (
    <>
      <div className="grid grid-rows-3 p-10 mt-60 m-auto w-[30%] rounded-xl bg-fuchsia-500">
        <div className="grid grid-cols-3">
         <Blocks value="O"/>
         <Blocks value="X"/>
         <Blocks value="X"/>
        </div>
        <div className="grid grid-cols-3">
         <Blocks value="X"/>
         <Blocks value="O"/>
         <Blocks value="X"/>
        </div>
        <div className="grid grid-cols-3">
         <Blocks value="X"/>
         <Blocks value="X"/>
         <Blocks value="O"/>
        </div>
      </div>
    </>
  );
}

export default App;
