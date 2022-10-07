import { useNavigate } from "react-router-dom";
// css
import "../style/Home.scss";

function Home() {
  let navigate = useNavigate();

  return (
    <section className="Home">
      <h1>Let's improve your</h1>
      <h1>mental skills</h1>
      <button onClick={() => navigate("category")}>Let's play</button>
    </section>
  );
}

export default Home;
