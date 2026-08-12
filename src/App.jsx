import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Day1 from "./pages/Days/Day1";
import Day2 from "./pages/Days/Day2";
import Day3 from "./pages/Days/Day3";
import TheStolenCup from "./pages/Days/TheStolenCup";
import TerraAzapiko from "./pages/Days/TerraAzapiko";
import AfitosOldVillage from "./pages/Days/AfitosOldVillage";
import AfytaionGaia from "./pages/Days/AfytaionGaia";
import GaiaKallisti from "./pages/Days/GaiaKallisti";
import Archontiko from "./pages/Days/Archontiko";
import LefkoSuites from "./pages/Days/LefkoSuites";
import Faros from "./pages/Days/Faros";
import Amorato from "./pages/Days/Amorato";
import HaniotiPromenade from "./pages/Days/HaniotiPromenade";
import SipSpot from "./pages/Days/SipSpot";
import PefkochoriShopping from "./pages/Days/PefkochoriShopping";
import GlarokavosBeach from "./pages/Days/GlarokavosBeach";
import KassandreiaMarket from "./pages/Days/KassandreiaMarket";
import Metoxi from "./pages/Days/Metoxi";
import Givizinis from "./pages/Days/Givizinis";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/day1" element={<Day1 />} />
      <Route path="/day2" element={<Day2 />} />
      <Route path="/day3" element={<Day3 />} />
      <Route path="/the-stolen-cup" element={<TheStolenCup />} />
      <Route path="/terra-azapiko" element={<TerraAzapiko />} />
      <Route path="/afitos-old-village" element={<AfitosOldVillage />} />
      <Route path="/afytaion-gaia" element={<AfytaionGaia />} />
      <Route path="/gaia-kallisti" element={<GaiaKallisti />} />
      <Route path="/archontiko" element={<Archontiko />} />
      <Route path="/lefko" element={<LefkoSuites />} />
      <Route path="/faros" element={<Faros />} />
      <Route path="/amorato" element={<Amorato />} />
      <Route path="/hanioti-promenade" element={<HaniotiPromenade />} />
      <Route path="/sip-spot" element={<SipSpot />} />
      <Route
        path="/pefkochori-shopping"
        element={<PefkochoriShopping />}
      />
      <Route
        path="/glarokavos-beach"
        element={<GlarokavosBeach />}
      />
      <Route
        path="/kassandreia-market"
        element={<KassandreiaMarket />}
      />
      <Route
        path="/metoxi"
        element={<Metoxi />}
      />
      <Route
        path="/givizinis"
        element={<Givizinis />}
      />
    </Routes>
  );
}

export default App;