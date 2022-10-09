import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
  let [time, setTime] = useState({
    minut: 0,
    second: 0,
  });
  var interval;

  let navigate = useNavigate();
  const checkAnswer = (e) => {
    let li = document.querySelectorAll("li");

    if (data[count].correct === e) {
      setPoint((value) => [...value, count + 1]);

      // styling li element
      li.forEach((value) => {
        if (value.innerText.slice(3).toLowerCase() === e.toLowerCase()) {
          value.style.backgroundColor = "#1ba817";
          value.style.color = "#fff";
        }
      });
    } else {
      // styling li element
      li.forEach((value) => {
        if (value.innerText.slice(3).toLowerCase() === e.toLowerCase()) {
          value.style.backgroundColor = "#f52a2af7";
          value.style.color = "#fff";
        }
      });
    }

    if (data.length - 1 === count) {
      setBtnText("Finished");
      setFlag1(false);
    }
  };

  const updateQuestion = () => {
    let li = document.querySelectorAll("li");
    if (count < 4) {
      setCount((pre) => pre + 1);
      setFlag(true);

      // Styling li element
      li.forEach((value) => {
        value.style.backgroundColor = "#fff";
        value.style.color = "#333";
      });
    }
  };

  const tryAgain = () => {
    setCount(0);
    setFlag(true);
    setBtnText("Next");
    setPoint([]);
    clearInterval(interval);
    setFlag1(true);
    time = { minut: 0, second: 0 };
    asd();
  };

  const liFn = (e) => {
    if (flag) {
      checkAnswer(e);
      setFlag(false);
    }
  };

  const asd = () => {
    var updateMinut, updateSecond;
    const run = () => {
      updateMinut = time.minut;
      updateSecond = time.second;

      if (updateSecond === 60) {
        updateMinut++;
        updateSecond = 0;
      }

      if (updateMinut === 2) {
        setFlag1(false);
        clearInterval(interval);
      } else {
        updateSecond++;
      }

      setTime(time);
      time = { minut: updateMinut, second: updateSecond };
    };

    interval = setInterval(run, 1000);
  };

  useEffect(asd, []);

  return (
    <section className="Quize">
      {flag1 ? (
        <div className="ques">
          <h1>Questions {`${count + 1} / ${data.length}`}</h1>
          <h4 className="timer">
            {time.minut < 10 ? `0${time.minut}` : time.minut}:
            {time.second < 10 ? `0${time.second}` : time.second}
          </h4>
          <div className="questions">
            <div className="question">
              <h1>Q: {data[count].question}</h1>

              <ul>
                {data[count].options.map((value, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        liFn(value);
                      }}
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
          {point.length == 5 ? (
            <p>Awesome play 😍</p>
          ) : (
            <p>You did a good job, Keep trying to get better 😢</p>
          )}

          <h4>Total question {data.length}</h4>
          <h4>Correct {point.length}</h4>
          <h4>Wrong {data.length - point.length}</h4>
          <h4>Percentage {(point.length * 100) / data.length}%</h4>
         

          <button onClick={tryAgain} className="rewind">Rewind</button>
          <button onClick={() => navigate("/category")} className="category">Go to category</button>
        </div>
      )}
    </section>
  );
}

export default Quize;
