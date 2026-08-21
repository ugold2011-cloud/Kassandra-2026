import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Day.css";
import heroImage from "../../assets/images/kallithea-beach-2.jpg";

function Day1() {
  const navigate = useNavigate();

  const [iconRowWidth, setIconRowWidth] = useState(null);
  const iconsRowRef = useRef(null);

  useEffect(() => {
    const measureRow = () => {
      if (iconsRowRef.current) {
        setIconRowWidth(iconsRowRef.current.getBoundingClientRect().width);
      }
    };

    measureRow();

    const observer = new ResizeObserver(measureRow);
    if (iconsRowRef.current) {
      observer.observe(iconsRowRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="day-page">
      <div className="day-image">
        <img
          src={heroImage}
          alt="חוף קליתאה"
          className="day-hero-image"
        />
      </div>

      <div className="day-location-box">
        <h2 className="day-location">
          חניוטי
        </h2>

        <p className="day-location-en">
          HANIOTI
        </p>
      </div>

      <div className="day-icons" ref={iconsRowRef}>
        <span
          title="Lefko Suites"
          onClick={() => navigate("/lefko")}
          style={{ cursor: "pointer" }}
        >
          🏨
        </span>
        <span
          title="Faros Fish Restaurant"
          onClick={() => navigate("/faros")}
          style={{ cursor: "pointer" }}
        >
          🐟
        </span>
        <span
          title="טיילת ושקיעה"
          onClick={() => navigate("/hanioti-promenade")}
          style={{ cursor: "pointer" }}
        >
          🌅
        </span>
        <span
          title="גלידה"
          onClick={() => navigate("/amorato")}
          style={{ cursor: "pointer" }}
        >
          🍨
        </span>
      </div>



      <nav style={{ display: "flex", justifyContent: "space-between", gap: "14px", marginTop: "28px" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#153247",
            background: "#fff",
            padding: "0 22px",
            minHeight: "54px",
            border: "1px solid #c8e5f2",
            borderRadius: "16px",
            boxShadow: "0 8px 18px rgba(14, 57, 80, 0.08)",
            fontWeight: 800,
            fontSize: "0.96rem",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          🏠 ראשי
        </Link>

        <Link
          to="/day2"
          style={{
            textDecoration: "none",
            color: "#fff",
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            padding: "0 22px",
            minHeight: "54px",
            border: "1px solid transparent",
            borderRadius: "16px",
            boxShadow: "0 12px 24px rgba(79, 70, 229, 0.28)",
            fontWeight: 800,
            fontSize: "0.96rem",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          יום 2 →
        </Link>
      </nav>
    </div>
  );
}

export default Day1;