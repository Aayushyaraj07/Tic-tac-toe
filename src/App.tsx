import "./App.css";

function App() {
  return (
    <>
      <div className="grid grid-rows-3 p-10 mt-60 m-auto w-[30%] rounded-xl bg-fuchsia-500">
        <div className="grid grid-cols-3">
          <div className="p-10 text-center bg-white m-3 rounded-xl">1</div>
          <div className="p-10 text-center bg-white m-3 rounded-xl">2</div>
          <div className="p-10 text-center bg-white m-3 rounded-xl">3</div>
        </div>
        <div className="grid grid-cols-3">
          <div className="p-10 text-center bg-white m-3 rounded-xl">1</div>
          <div className="p-10 text-center bg-white m-3 rounded-xl">2</div>
          <div className="p-10 text-center bg-white m-3 rounded-xl">3</div>
        </div>
        <div className="grid grid-cols-3">
          <div className="p-10 text-center bg-white m-3 rounded-xl">1</div>
          <div className="p-10 text-center bg-white m-3 rounded-xl">2</div>
          <div className="p-10 text-center bg-white m-3 rounded-xl">3</div>
        </div>
      </div>
    </>
  );
}

export default App;
