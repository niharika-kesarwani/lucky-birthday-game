import "./styles.css";

export default function App() {
  const stringDigitSum = (string) => {
    let digitSum = 0;

    for (let digit of string) {
      digitSum += Number(digit);
    }

    return digitSum;
  };

  function calculate() {
    var birthDay = "24-04-1999";
    var luckyNumber = 19;
    let sumOfBirthDayDigits = 0;
    var i = 0;

    const digitStringArray = birthDay.split("-");

    for (let digitString of digitStringArray) {
      sumOfBirthDayDigits += stringDigitSum(digitString);
      console.log(i++, sumOfBirthDayDigits);
    }

    console.log("sum", sumOfBirthDayDigits);
    console.log("lucky", Number(luckyNumber));
    if (sumOfBirthDayDigits % Number(luckyNumber) === 0) {
      console.log("LUCKY!!!");
    } else {
      console.log("UN-LUCKY!!!");
    }
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={calculate}>Calculate</button>
    </div>
  );
}
