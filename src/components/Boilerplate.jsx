import { Outlet } from "react-router-dom";

// components
import Navbar from "./Navbar";
import Footer from "./Footer";

function Boilerplate() {
  return (
    <section className="Boilerplate">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}

export default Boilerplate;
