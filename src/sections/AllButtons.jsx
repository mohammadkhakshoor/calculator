import { useState } from "react";

const AllButtons = ({ calc, setCalc }) => {
  // const [resetNum, setResetNum] = useState(false);
  console.log(calc);
  function handlePassNumber(e) {
    const lastChar = calc.at?.(length - 1);
    if (e.target.innerHTML === "DEL") {
      // if (!calc.split?.("")) {
      //     return;
      // }
      const deleteLastValue = calc.split("");
      deleteLastValue.pop();
      return setCalc(deleteLastValue.join(""));
    }
    if (e.target.innerHTML === "Reset") {
      return setCalc("");
    }
    if (e.target.innerHTML === "=") {
      // setResetNum(true);
      const num = String(eval(calc));
      return setCalc(() => num);
    }

    if (e.target.tagName === "BUTTON") {
      if (lastChar === "*" || lastChar === "/" || lastChar === "+" || lastChar === "-" || lastChar === ".") {
        if (
          e.target.innerHTML === "*" ||
          e.target.innerHTML === "/" ||
          e.target.innerHTML === "+" ||
          e.target.innerHTML === "-" ||
          e.target.innerHTML === "."
        ) {
          return;
        }
      }
      // if (resetNum) {
      //     setCalc("");
      //     setResetNum(false);
      // }
      setCalc((prevValue) => prevValue + e.target.innerHTML);
    }
  }
  return (
    <div
      onClick={handlePassNumber}
      className="bg-btnContainer rounded-xl font-Poppins grid grid-cols-4 grid-rows-5 justify-items-stretch gap-3 p-7"
    >
      <button className="btns ">7</button>
      <button className="btns ">8</button>
      <button className="btns ">9</button>
      <button className="btns  hover:bg-red-600  ">DEL</button>
      <button className="btns ">4</button>
      <button className="btns ">5</button>
      <button className="btns ">6</button>
      <button className="btns hover:bg-yellow-400 ">+</button>
      <button className="btns ">1</button>
      <button className="btns ">2</button>
      <button className="btns ">3</button>
      <button className="btns hover:bg-yellow-400 ">-</button>
      <button className="btns ">.</button>
      <button className="btns ">0</button>
      <button className="btns hover:bg-yellow-400 ">/</button>
      <button className="btns hover:bg-yellow-400 ">*</button>
      <button className="btns col-span-2  hover:bg-gray-400">Reset</button>
      <button className="btns col-span-2 hover:bg-green-500">=</button>
    </div>
  );
};

export default AllButtons;
