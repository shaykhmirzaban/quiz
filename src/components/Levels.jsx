import { useNavigate, useParams } from "react-router-dom";

// sourceData
import sourceData from "../Json/Data.json";

// css
import "../style/Levels.scss";

function Levels() {
  let { id } = useParams();
  let navigate = useNavigate();

  let key = Object.keys(sourceData[id]).filter((value) => {
    if (value !== "BasicInfo") {
      return value;
    }
  });

  return (
    <section className="Levels">
      <div className="heading">
        <h1>
          {sourceData[id].BasicInfo[0].name}: <span>Levels</span>
        </h1>
        <p>Choose your level to start</p>
      </div>
      <div className="level">
        {key.map((value, index) => {
          return (
            <div
              className="level1"
              key={index}
              onClick={() => navigate(`${value}`)}
            >
              <h1>{value}</h1>
            </div>
          );
        })}
      </div>
      <div className="bottomText">
        <h1>
          More levels <span>more difficut</span>
        </h1>
      </div>
    </section>
  );
}

export default Levels;
