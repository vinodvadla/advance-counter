import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setcounter] = useState(0);
  let [incr, setincr] = useState(1);
  let [start, setStart] = useState(0)

  let increment = () => {
    let count = counter + incr;
    setcounter(count);
  };
  let decrement = () => {
    let count = counter - incr;
    setcounter(count);
  };
  let starting=(e)=>{
    let num=Number(e.target.value)
    setStart(num)
    console.log(num)
  }
let settingStart=()=>{
  if(start!==0){
    setcounter(start)
  }
}
  return (
    <div className="main">
      <h1 className={counter < 0 ? "red" : "green"}>{counter}</h1>
      <div className="start">
        <h2>Select starting Point</h2>
        <div className="start-box">
          <input type="number" value={start} onChange={(e) =>starting(e)} />
          <button className="btn-2" onClick={()=>{settingStart()}}>start</button>
        </div>
      </div>
      <div className="btn-div">
        <button className="btn" onClick={increment}>
          Increment
        </button>
        <button className="btn" onClick={decrement}>
          Decrement
        </button>
        <button
          className="btn"
          onClick={() => {
            setcounter(0);
          }}
        >
          Reset
        </button>

      </div>
      <div className="heading">
        <h2>Custom Incement !!</h2>
        <h2>You can increment/Decrement by custom values !!</h2>
      </div>
      <div className="input-div">
        <input
          type="number"
          className="input-box"
          value={incr}
          onChange={(e) => setincr(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default App;
