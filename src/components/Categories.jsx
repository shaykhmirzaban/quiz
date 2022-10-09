import { useState } from "react";

// css
import "../style/categories.scss";

// data
import SourceData from "../Json/Data.json";
import { useNavigate } from "react-router-dom";

function Categories() {
  let [data, setData] = useState(SourceData);
  let navigate = useNavigate();

  let val = [];

  data.forEach((value) => {
    val.push(value.BasicInfo[0]);
  });

  function moveData(e) {
    navigate(`${e}`);
  }

  return (
    <section className="Categories">
      <div className="heading">
        <h1>Categories</h1>
        <p>Choose your categories to start</p>
      </div>

      <div className="category">
        {val.map((value, index) => {
          return (
            <div
              className="category1"
              key={index}
              onClick={() => moveData(index)}
            >
              <div className="heading1">
                <h3>{value.name}</h3>
              </div>
              <div className="bottomtext">
                <p>{value.totalQuestion} Q</p>
                <p>{value.totalTime} M</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Categories;
