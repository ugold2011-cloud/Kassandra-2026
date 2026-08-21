import { useState } from "react";
import { Link } from "react-router-dom";
import "./Day.css";
import heroImage from "../../assets/images/kallithea-beach-2.jpg";

function Day6() {

  return (
    <div className="day-page">
      <div className="day-image">
        <img
          src={heroImage}
          alt="אגיוס מאמאס / פטרלונה"
          className="day-hero-image"
        />
      </div>

      <div className="day-location-box">
        <h2 className="day-location">
          אגיוס מאמאס / פטרלונה
        </h2>

        <p className="day-location-en">
          AGIOS MAMAS / PETRALONA
        </p>
      </div>

      <div className="day-icons">
        <Link
          to="/bens-coffee"
          title="Ben's Coffee — ארוחת בוקר"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          🥐
        </Link>

        <Link
          to="/vagio-agrofarms"
          title="Vagio Agrofarms — טעימת שמן זית אצל יצרן מקומי"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          🫒
        </Link>

        <Link
          to="/petralona"
          title="Petralona Cave & Museum — מערה ומוזיאון"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          🦴
        </Link>

        <Link
          to="/giannikos"
          title="Giannikos Tavern — ארוחת ערב בטברנה יוונית"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          🍽️
        </Link>
      </div>



      <nav style={{ display: "flex", justifyContent: "space-between", gap: "14px", marginTop: "28px" }}>
        <Link
          to="/day5"
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
          ← יום 5
        </Link>

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
          to="/day7"
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
          יום 7 →
        </Link>
      </nav>
    </div>
  );
}

export default Day6;
