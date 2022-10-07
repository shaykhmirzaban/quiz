import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// data
import sourceData from "../Json/Data.json";

// css
import "../style/Quiz.scss";

function Quize() {
  let { id, level } = useParams();
  let [data, setData] = useState(sourceData[id][level]);
  let [count, setCount] = useState(0);
  let [flag, setFlag] = useState(true);
  let [btnText, setBtnText] = useState("Next");
  let [point, setPoint] = useState([]);
  let [flag1, setFlag1] = useState(true);
  //   console.log(sourceData[id].BasicInfo[0].totalTime);
  //   let [seconds, setSeconds] = useState(0);

  const checkAnswer = (e) => {
    if (data[count].correct === e) {
      console.log("Right Answer");
      setPoint((value) => [...value, count + 1]);
    } else {
      console.log("Wrong Answer");
    }
    if (data.length - 1 === count) {
      setBtnText("Finished");
      setFlag1(false);
    }
  };

  const updateQuestion = () => {
    if (count < 4) {
      setCount((pre) => pre + 1);
      setFlag(true);
    }
  };

  const tryAgain = () => {
    setCount(0);
    setFlag(true);
    setBtnText("Next");
    setPoint([]);
    setFlag1(true);
  };

  //   useEffect(() => {
  //     let interval = setInterval(() => {
  //       setSeconds((val) => val + 1);
  //     }, 1000);

  //   }, []);

  return (
    <section className="Quize">
      {flag1 ? (
        <div className="ques">
          <h1>Questions {`${count + 1} / ${data.length}`}</h1>
          <div className="questions">
            <div className="question">
              <h1>Q: {data[count].question}</h1>

              <ul>
                {data[count].options.map((value, index) => {
                  // let [sty, setSty] = useState(true);
                  return (
                    <li
                      key={index}
                      onClick={
                        flag
                          ? () => {
                              setFlag(false);
                              checkAnswer(value);
                              // setSty(false);
                            }
                          : null
                      }
                      // style={{
                      //   backgroundColor: sty ? "" : "#ff530f",
                      //   color: sty ? "" : "#fff",
                      // }}
                    >
                      {`${index + 1}) ${value}`}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="button">
              {flag ? null : (
                <button onClick={updateQuestion}>{btnText}</button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="score">
          <h1>Score</h1>
          {point.length == 5 ? (
            <p>Awesome play</p>
          ) : (
            <p>You did a good job, Keep trying to get better</p>
          )}
          <h3>{point.length}</h3>

          <button onClick={tryAgain}>Rewind</button>
        </div>
      )}
    </section>
  );
}

export default Quize;

//   useEffect(() => {
//     let interval = setInterval(() => {
//       setSeconds((val) => val + 1);
//     }, 1000);

//     if (seconds == 10) {
//         clearInterval(interval);
//     }
//     // return () => clearInterval(interval);
//     // const interval = setInterval(() => {
//         //     setSeconds(seconds => seconds + 1);
//         //   }, 1000);
//     }, []);

// const updateTime = () => {
//     setInterval(()=> {
//         setSeconds(val => val + 1);
//     }, 1000);
// }
// console.log(seconds);
// updateTime();
//   useEffect(() => {
//     let second = setInterval(() => {
//       setSeconds((second) => second + 1);
//     }, 1000);
//     return () => clearInterval(second);
//   }, []);

//   console.log(seconds);

//   let date = new Date();
//   let minut = date.getMinutes();
//   let second = date.getSeconds();
//   console.log(minut);
//   console.log(second);

// let minut = 0;/
// useEffect(() => {
//     let interval = null;
//     if(seconds === 10) {
//         interval = setInterval(() => {
//             setSeconds((val) => val + 1);
//         }, 1000);

//         // if(n === 20) {
//         //     clearInterval(interval);
//         //     console.log(n);
//         // }
//         return () => clearInterval(interval);
//     } else {
//         return () => clearInterval(interval);
//     }
//     // if (seconds === 10) {
//     //     console.log("run");
//     //     return () => clearInterval(interval);
//     // }

// }, [seconds]);

// console.log(seconds);

// function asd () {
//     let interval = setInterval(() => {
//         minut = minut + 1;
//         setSeconds(minut);
//     }, 1000);

//     if(minut === 10) {
//         clearInterval(interval);
//     }
// }

// asd();
