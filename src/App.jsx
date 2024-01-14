import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import "./app.css";
import TheSun from "./Pages/TheSun";
import Mercury from "./Pages/Mercury";
import Venus from "./Pages/Venus";
import Earth from "./Pages/Earth";
import Mars from "./Pages/Mars";
import Jupiter from "./Pages/Jupiter";
import Saturn from "./Pages/Saturn";
import Uranus from "./Pages/Uranus";
import Neptune from "./Pages/Neptune";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/The Sun" element={<TheSun />} />
          <Route path="/Mercury" element={<Mercury />} />
          <Route path="/Venus" element={<Venus />} />
          <Route path="/Earth" element={<Earth />} />
          <Route path="/Mars" element={<Mars />} />
          <Route path="/Jupiter" element={<Jupiter />} />
          <Route path="/Saturn" element={<Saturn />} />
          <Route path="/Uranus" element={<Uranus />} />
          <Route path="/Neptune" element={<Neptune />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
