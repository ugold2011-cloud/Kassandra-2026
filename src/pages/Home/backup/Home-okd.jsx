import "./Home.css";
import kassandraMap from "../../assets/maps/reference/kassandra-clean-map.png";
const days = [
  {
    number: "יום 1",
    title: "חניוטי והסביבה",
    date: "14.09.2026",
  },
  {
    number: "יום 2",
    title: "פפקוחורי ופוליכרונו",
    date: "15.09.2026",
  },
  {
    number: "יום 3",
    title: "אפיטוס",
    date: "16.09.2026",
  },
  {
    number: "יום 4",
    title: "פליורי",
    date: "17.09.2026",
  },
  {
    number: "יום 5",
    title: "קליתאה",
    date: "18.09.2026",
  },
  {
    number: "יום 6",
    title: "חופים",
    date: "19.09.2026",
  },
  {
    number: "יום 7",
    title: "סלוניקי",
    date: "20.09.2026",
  },
];

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

        <aside className="daysPanel">
          {days.map((day, index) => (
            <div
              key={index}
              className={`dayCard ${
                index === 0 ? "activeCard" : ""
              }`}
            >
              <div className="dayNumber">{day.number}</div>

              <div className="dayTitle">{day.title}</div>

              <div className="dayDate">{day.date}</div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}