import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Day1 from "./pages/Days/Day1";
import Faros from "./pages/Days/Faros";
import LefkoSuites from "./pages/Days/LefkoSuites";
import HaniotiPromenade from "./pages/Days/HaniotiPromenade";
import Amorato from "./pages/Days/Amorato";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/day1" element={<Day1 />} />

      <Route path="/faros" element={<Faros />} />
      <Route path="/lefko-suites" element={<LefkoSuites />} />
      <Route path="/hanioti-promenade" element={<HaniotiPromenade />} />
      <Route path="/amorato" element={<Amorato />} />
    </Routes>
  );
}

export default App;