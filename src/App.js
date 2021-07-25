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
    if (sum % Number(lucky) === 0 && date !== "") {
      setResult("YAY!!! " + date + " is a Lucky Birthday!!!!");
    } else if (Number(lucky) !== 0 && date !== "") {
      setResult("OH-NO!!! " + date + " is not a Lucky Birthday!!!");
    } else {
      setResult("Enter a valid date and number!!");
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
      <h1 className="header">LUCKY BIRTHDAY CALCULATOR</h1>
      <p className="intro">
        Play this game to see if your birthday is lucky or not!!!!
      </p>
      <table>
        <tbody>
          <tr>
            <th>
              <p className="datetext">Select your birthday: </p>
            </th>
            <th>
              <input
                type="date"
                name="dateinput"
                id="datei/p"
                value={date}
                onChange={assignDate}
                className="datepicker"
              />
            </th>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th>
              <p className="numtext">Enter your lucky number: </p>
            </th>
            <th>
              <input
                className="input"
                type="number"
                onChange={assignLucky}
              ></input>
            </th>
          </tr>
        </tbody>
      </table>
      <p />
      <p />
      <button className="btn" onClick={calculate}>
        CHECK
      </button>
      <p />
      <div className="result">{result}</div>
    </div>
  );
}
