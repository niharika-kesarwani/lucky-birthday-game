import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import { React, useState } from "react";

export default function App() {
  const [date, setDate] = useState("");
  const [lucky, setLucky] = useState(0);
  const [result, setResult] = useState("");

  const digitsSum = (string) => {
    let sum = 0;

    for (let digit of string) {
      sum += Number(digit);
    }
    return sum;
  };

  function calculate() {
    let sum = 0;

    const digits = date.split("-");

    for (let digit of digits) {
      sum += digitsSum(digit);
    }
    if (sum % Number(lucky) === 0) {
      setResult("LUCKY!!!");
    } else {
      setResult("UN-LUCKY!!!");
    }
  }

  const assignDate = (e) => {
    setDate(e.target.value);
  };

  function assignLucky(event) {
    setLucky(event.target.value);
  }

  return (
    <div className="App">
      <input
        type="date"
        name="dateinput"
        id="datei/p"
        value={date}
        onChange={assignDate}
        className="datepicker"
      />
      <p />
      <input onChange={assignLucky}></input>
      <p />
      <button onClick={calculate}>Calculate</button>
      <p />
      <div>DOB {date}</div>
      <div>Lucky {lucky}</div>
      <div>Result {result}</div>
    </div>
  );
}
