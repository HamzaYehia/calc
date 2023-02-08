import { useState } from "react";

import Result from "./components/Result";
import Equal from "./components/Equal";
import Del from "./components/Del";
import Digits from "./components/Digits";
import Ops from "./components/Ops";


function App() {
  const [calc, setCalc] = useState(``);
  const [result, setResult] = useState(``);
  

  const operators = [`/`, '*', `-`, `+`, `.`];

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && operators.includes(calc.slice(-1)))
      || (operators.includes(value) && calc === ``)
    ) return;

    setCalc(calc + value);

    if (operators.includes(value) === false) {
      setResult(eval(calc + value).toString());
    }
  };

  return ( 
    <div className="App">
      <div className="calculator">
        <Result calc={calc} result={result} />

        <div className="operators">
          <Ops updateCalc={updateCalc} />

          <Del calc={calc}  setCalc={setCalc} result={result} setResult={setResult} />
        </div>

        <div className="digits">
          <Digits updateCalc={updateCalc} />

          <Equal calc={calc} setCalc={setCalc}  result={result} setResult={setResult} />
        </div>

      </div>
    </div> 
  );
};

export default App;