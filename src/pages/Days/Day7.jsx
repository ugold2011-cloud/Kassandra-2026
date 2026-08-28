import { useState } from "react";
import { Link } from "react-router-dom";
import "./Day.css";
import heroImage from "../../assets/images/kallithea-beach-2.jpg";

function Day7() {

  return (
    <div className="day-page">
      <div className="day-image">
        <img
          src={heroImage}
          alt="חניוטי"
          className="day-hero-image"
        />
      </div>

      <div className="day-location-box">
        <h2 className="day-location">
          יום 7
        </h2>

        <p className="day-location-en">
          יום ראשון, 20.09.2026
        </p>
      </div>

      <div className="day-icons">
        <Link
          to="/lemonis-bakery"
          title="Lemonis Bakery — ארוחת בוקר רגועה בחניוטי"
          style={{ textDecoration: "none" }}
        >
          🥐
        </Link>

        <Link
          to="/garrys-gyros"
          title="Garry's The King of Gyros — ארוחת ערב — גירוס וצזיקי"
          style={{ textDecoration: "none" }}
        >
          🌯
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          marginTop: "30px",
        }}
      >

      </div>



      <nav style={{ display: "flex", justifyContent: "space-between", gap: "14px", marginTop: "28px" }}>
        <Link
          to="/day6"
          style={{
            textDecoration: "none",
            color: "#fff",
            background: "#153247",
            padding: "0 22px",
            minHeight: "54px",
            border: "1px solid transparent",
            borderRadius: "16px",
            fontWeight: 800,
            fontSize: "0.96rem",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ← יום 6
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
          to="/day8"
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
          יום 8 →
        </Link>
      </nav>
    </div>
  );
}

export default Day7;
