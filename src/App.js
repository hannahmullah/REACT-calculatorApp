import { evaluate } from 'mathjs';
import { useState } from 'react';
import './App.css';

function App() {
  const [total, setTotal] = useState("");
  const buttons = ["C", "+-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];


  const handleClick = (value) => {
    if (value === "=") {
      setTotal(evaluate(total))
    } else if (value === "C") {
      setTotal("")
    } else {
      setTotal(total + value)
    }
  }

  return (
    <div className="calculator">
      <h1>{total}</h1>
      <div className="calcButtons">
        {buttons.map((button, index) => {
          return <button className="buttons" onClick={() => handleClick(button)} key={index}>{button}</button>
        })}
      </div>
    </div>
  )
}

export default App;
