// css
import { NavLink } from "react-router-dom";
import "../style/navbar.scss";

function Navbar() {
  return (
    <section className="Navbar">
      <div className="logo">
        <h1>Quiz</h1>
        <p>Quick Uniform Intelligence Zone</p>
      </div>
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="category">Category</NavLink>
      </div>
    </section>
  );
}

export default Navbar;
