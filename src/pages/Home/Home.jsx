import "./Home.css";
import kassandraMap from "../../assets/maps/reference/kassandra-master-map-v1.png.png";

export default function Home() {
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
          <button onClick={() => (window.location.href = "/day1")}>
            יום 1
          </button>

          <button>יום 2</button>

          <button>יום 3</button>

          <button>יום 4</button>

          <button>יום 5</button>

          <button>יום 6</button>

          <button>יום 7</button>
        </div>
      </div>
    </div>
  );
}