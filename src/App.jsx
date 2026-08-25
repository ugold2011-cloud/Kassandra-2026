import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Day1 from "./pages/Days/Day1";
import Day2 from "./pages/Days/Day2";
import Day3 from "./pages/Days/Day3";
import Day4 from "./pages/Days/Day4";
import Day5 from "./pages/Days/Day5";
import Day6 from "./pages/Days/Day6";
import Day7 from "./pages/Days/Day7";
import Day8 from "./pages/Days/Day8";
import TheStolenCup from "./pages/Days/TheStolenCup";
import TerraAzapiko from "./pages/Days/TerraAzapiko";
import AfitosOldVillage from "./pages/Days/AfitosOldVillage";
import AfytaionGaia from "./pages/Days/AfytaionGaia";
import GaiaKallisti from "./pages/Days/GaiaKallisti";
import Archontiko from "./pages/Days/Archontiko";
import ArchontikoDay5 from "./pages/Days/ArchontikoDay5";
import LefkoSuites from "./pages/Days/LefkoSuites";
import Faros from "./pages/Days/Faros";
import Amorato from "./pages/Days/Amorato";
import HaniotiPromenade from "./pages/Days/HaniotiPromenade";
import SipSpot from "./pages/Days/SipSpot";
import PefkochoriShopping from "./pages/Days/PefkochoriShopping";
import GlarokavosBeach from "./pages/Days/GlarokavosBeach";
import KassandreiaMarket from "./pages/Days/KassandreiaMarket";
import BensCoffee from "./pages/Days/BensCoffee";
import VagioAgrofarms from "./pages/Days/VagioAgrofarms";
import LemonisBakery from "./pages/Days/LemonisBakery";
import Giannikos from "./pages/Days/Giannikos";
import Metoxi from "./pages/Days/Metoxi";
import Givizinis from "./pages/Days/Givizinis";
import Dramis from "./pages/Days/Dramis";
import EncoreBeachBar from "./pages/Days/EncoreBeachBar";
import Apagio from "./pages/Days/Apagio";
import GarrysGyros from "./pages/Days/GarrysGyros";
import DreamCoffee from "./pages/Days/DreamCoffee";
import Petralona from "./pages/Days/Petralona";
import InstallAndroid from "./pages/InstallAndroid";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/day1" element={<Day1 />} />
      <Route path="/day2" element={<Day2 />} />
      <Route path="/day3" element={<Day3 />} />
      <Route path="/day4" element={<Day4 />} />
      <Route path="/day5" element={<Day5 />} />
      <Route path="/day6" element={<Day6 />} />
      <Route path="/day7" element={<Day7 />} />
      <Route path="/day8" element={<Day8 />} />
      <Route path="/the-stolen-cup" element={<TheStolenCup />} />
      <Route path="/terra-azapiko" element={<TerraAzapiko />} />
      <Route path="/afitos-old-village" element={<AfitosOldVillage />} />
      <Route path="/afytaion-gaia" element={<AfytaionGaia />} />
      <Route path="/gaia-kallisti" element={<GaiaKallisti />} />
      <Route path="/archontiko" element={<Archontiko />} />
      <Route path="/archontiko-day5" element={<ArchontikoDay5 />} />
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
        path="/bens-coffee"
        element={<BensCoffee />}
      />
      <Route
        path="/lemonis-bakery"
        element={<LemonisBakery />}
      />
      <Route
        path="/garrys-gyros"
        element={<GarrysGyros />}
      />
      <Route
        path="/vagio-agrofarms"
        element={<VagioAgrofarms />}
      />
      <Route
        path="/giannikos"
        element={<Giannikos />}
      />
      <Route
        path="/metoxi"
        element={<Metoxi />}
      />
      <Route
        path="/givizinis"
        element={<Givizinis />}
      />
      <Route path="/dramis" element={<Dramis />} />
      <Route path="/encore-beach-bar" element={<EncoreBeachBar />} />
      <Route path="/apagio" element={<Apagio />} />
      <Route path="/dream-coffee" element={<DreamCoffee />} />
      <Route path="/petralona" element={<Petralona />} />
      <Route path="/install-android" element={<InstallAndroid />} />
    </Routes>
  );
}

export default App;