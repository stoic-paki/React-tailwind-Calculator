import React, { useState } from "react";
import Moon from "./assets/moon.svg";
import Sun from "./assets/sun.svg";
import back from "./assets/backspace.svg";
import "./App.css";
import { NumericBtn, OperatorBtn } from "./components/NumericBtn";
import { stringSplitter } from "./utils/arithematic";

const App = () => {
  let [darkMode, setDarkMode] = useState(false);

  // screens
  let [upperDisplay, setUpperDisplay] = useState("");
  let [lowerDisplay, setLowerDisplay] = useState("");

  // evaluation vals
  // let first_operand;
  // let second_operand;
  // let operator_operand;

  // checking to see if there is another one operator if have then evaluate

  const BackSpace = () => {
    try {
      let new_Str = upperDisplay.slice(0, upperDisplay.length - 1);
      setUpperDisplay(new_Str);
      console.log("clicked backspace");
    } catch (error) {
      console.error(error);
    }
  };

  const ClearAll = () => {
    try {
      setLowerDisplay("");
      setUpperDisplay("");
      console.log("clicked ClearAll");
    } catch (error) {
      console.error(error);
    }
  };

const GetBtnVal = (e) => {
  const val = e.target.innerText;
  const isOperator = /[+\-*/]/.test(val);

  setUpperDisplay((prev) => {
    if (isOperator) {
      // check if already has operator
      if (/[+\-*/]/.test(prev)) {
        const result = stringSplitter(prev);
        // setLowerDisplay(result);
        return result.toString() + val; // carry forward result
      } else {
        return prev + val;
      }
    } else {
      return prev + val;
    }
  });
};
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className={`h-[100vh] w-[100vw] flex justify-center items-center ${darkMode? "dark-gradient":"light-gradient"}`}>
      <div className={darkMode ? "calc-dark" : "calc-light"}>
        <div
          className={`screen border-2 p-2 rounded-2xl  h-[20%] w-[100%] flex flex-col justify-between items-center ${
            darkMode ? "display-dark" : "display-light"
          }`}
        >
          <div
            className={`screen-upper h-[50%] w-[100%] px-3 flex justify-start items-end`}
          >
            <p className="font-poppins text-[15px]">{upperDisplay}</p>
          </div>
          <div
            className={`screen-lower h-[50%] w-[100%] px-3 flex justify-start items-end ${
              darkMode ? "display-bar-dark" : "display-bar-light"
            }`}
          >
            <p className="font-poppins text-[15px]">{lowerDisplay}</p>
          </div>
        </div>
        <div className="keypad  h-[80%] w-[100%] flex justify-center items-center">
          <div className="keypad-left h-[100%] w-[70%]  flex flex-col justify-start items-start gap-5">
            <div className="other-btn-row w-[100%]  grid grid-cols-3 place-items-center">
              <button
                className={darkMode ? "btn btn-dark" : "btn btn-light"}
                onClick={() => setDarkMode(!darkMode)}
              >
                <img
                  src={darkMode ? Moon : Sun}
                  draggable="false"
                  alt="icon"
                  className="h-[70%] w-[70%]"
                />
              </button>
              <button
                className={darkMode ? "btn btn-dark" : "btn btn-light"}
                onClick={ClearAll}
              >
                AC
              </button>
              <button
                className={darkMode ? "btn btn-dark" : "btn btn-light"}
                onClick={BackSpace}
              >
                <img
                  src={back}
                  alt="cut"
                  draggable="false"
                  className="h-[70%] w-[70%]"
                />
              </button>
            </div>
            <div className="numeric-btn-row w-[100%]  grid grid-cols-3 place-items-center justify-center items-center gap-3">
              {numbers.map((number, index) => (
                <NumericBtn
                  key={index}
                  text={number}
                  onClick={GetBtnVal}
                  className={darkMode ? "btn btn-dark" : "btn btn-light"}
                />
              ))}
              <button
                // onClick={()=>stringSplitter(upperDisplay, first_operand, second_operand, operator_operand)}
                onClick={() => {
                  const result = stringSplitter(upperDisplay);
                  if (result !== undefined) {
                    setLowerDisplay(`=${result}`);
                    setUpperDisplay(result.toString()); // so user can continue with result
                  }
                }}
                className={`${
                  darkMode ? "btn-long-hori-dark" : "btn-long-hori-light"
                }`}
              >
                =
              </button>
            </div>
          </div>
          <div className="keypad-right h-[100%] w-[30%]  flex flex-col justify-start items-center gap-5">
            <div className="extra-row ">
              {" "}
              <OperatorBtn
                text="."
                onClick={GetBtnVal}
                classHere={darkMode ? "btn btn-op-dark" : "btn btn-op-light"}
              />
            </div>
            <div className="rest-row  w-[100%] grid grid-cols-1 grid-rows-4 justify-items-center gap-3">
              <OperatorBtn
                text="*"
                onClick={GetBtnVal}
                classHere={darkMode ? "btn btn-op-dark" : "btn btn-op-light"}
              />
              <OperatorBtn
                text="/"
                onClick={GetBtnVal}
                classHere={darkMode ? "btn btn-op-dark" : "btn btn-op-light"}
              />
              <OperatorBtn
                text="-"
                onClick={GetBtnVal}
                classHere={darkMode ? "btn btn-op-dark" : "btn btn-op-light"}
              />
              <OperatorBtn
                text="+"
                onClick={GetBtnVal}
                classHere={darkMode ? "btn btn-op-dark" : "btn btn-op-light"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
