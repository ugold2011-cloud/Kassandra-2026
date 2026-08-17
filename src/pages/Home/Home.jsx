import "./Home.css";
import { useNavigate } from "react-router-dom";
import kassandraMap from "../../assets/maps/reference/kassandra-master-map-v1.png.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>קסנדרה – כמו מקומי</h1>

      <div className="layout">
        <div className="mapPanel">
          <img
            className="mainMap"
            src={kassandraMap}
            alt="מפת קסנדרה"
          />
        </div>

        <div className="daysPanel">
          <button onClick={() => navigate("/day1")}>
            יום 1
          </button>

          <button onClick={() => navigate("/day2")}>
            יום 2
          </button>

          <button onClick={() => navigate("/day3")}>
            יום 3
          </button>

          <button onClick={() => navigate("/day4")}>
            יום 4
          </button>

          <button onClick={() => navigate("/day5")}>יום 5</button>

          <button onClick={() => navigate("/day6")}>יום 6</button>

          <button onClick={() => navigate("/day7")}>יום 7</button>

          <button onClick={() => navigate("/day8")}>יום 8</button>
        </div>
      </div>
    </div>
  );
}