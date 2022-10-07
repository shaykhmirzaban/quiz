import { Route, Routes } from "react-router-dom";

// components
import Boilerplate from "./components/Boilerplate";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Levels from "./components/Levels";
import Quize from "./components/Quize";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Boilerplate />}>
        <Route index element={<Home />} />
        <Route path="category" element={<Categories />} />
        <Route path="category/:id" element={<Levels />} />
        <Route path="category/:id/:level" element={<Quize />} />
      </Route>
    </Routes>
  );
}

export default App;
