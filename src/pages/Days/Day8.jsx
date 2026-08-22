import { useState } from "react";
import { Link } from "react-router-dom";
import "./Day.css";
import flagBulgaria from "../../assets/images/day8/flag-bulgaria.png";
import flagGreece from "../../assets/images/day8/flag-greece.png";
import day8RoadBg from "../../assets/images/day8/day8-road-bg.png";

function Day8() {

  return (
    <div className="day-page">
      <div className="day-location-box">
        <h2
          className="day-location"
          style={{
            fontSize: "96px",
            fontWeight: 900,
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          יום 8
        </h2>

        <div
          style={{
            width: "140px",
            height: "3px",
            background: "#16a34a",
            margin: "0 auto 28px",
            borderRadius: "2px",
          }}
        />

        <p
          style={{
            fontSize: "36px",
            fontWeight: 800,
            color: "#153b4a",
            margin: "0 0 16px",
            textAlign: "center",
            direction: "rtl",
            lineHeight: 1.3,
          }}
        >
          חזרה לבורובץ,
          בולגריה
        </p>

        <div
          dir="ltr"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            marginBottom: "28px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: "32px", fontWeight: 700, color: "#153b4a" }}>בולגריה</span>
            <img src={flagBulgaria} alt="Bulgaria" style={{ width: "80px", lineHeight: 1 }} />
          </div>
          <span style={{ fontSize: "80px", color: "#16a34a", lineHeight: 1 }}>←</span>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: "32px", fontWeight: 700, color: "#153b4a" }}>יוון</span>
            <img src={flagGreece} alt="Greece" style={{ width: "80px", lineHeight: 1 }} />
          </div>
        </div>

        <div
          style={{
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          <img
            src={day8RoadBg}
            alt="Day 8 road"
            style={{ width: "100%", height: "auto", display: "block", borderRadius: "16px" }}
          />
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



      </div>

        <div
          style={{
            maxWidth: "520px",
            margin: "0 auto 30px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#153b4a",
              marginBottom: "24px",
            }}
          >
            כיוון הנסיעה
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#153b4a",
              }}
            >
              🇬🇷 Hanioti
            </div>

            <div
              style={{
                fontSize: "28px",
                color: "#16a34a",
                lineHeight: 1,
              }}
            >
              ↓
            </div>

            <div
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#4b5563",
                marginBottom: "4px",
              }}
            >
              ⛽ Shell — Serres/Thessaloniki road
            </div>
            <a
              className="waze-button"
              href="https://waze.com/ul?ll=41.063827,23.351603&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                color: "#fff",
                border: "1px solid transparent",
                borderRadius: "16px",
                padding: "0 20px",
                width: "260px",
                maxWidth: "calc(100% - 32px)",
                minHeight: "52px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "0.9rem",
                boxShadow: "0 12px 24px rgba(79, 70, 229, 0.28)",
                marginLeft: "auto",
                marginRight: "auto",
                whiteSpace: "nowrap",
                transition: "transform 220ms ease, box-shadow 220ms ease",
              }}
            >
              🚗 Waze
            </a>

            <div
              style={{
                fontSize: "28px",
                color: "#16a34a",
                lineHeight: 1,
              }}
            >
              ↓
            </div>

            <div
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#4b5563",
                marginBottom: "4px",
              }}
            >
              ⛽ OMV Sandanski
            </div>
            <a
              className="waze-button"
              href="https://waze.com/ul?ll=41.5468744,23.2704584&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                color: "#fff",
                border: "1px solid transparent",
                borderRadius: "16px",
                padding: "0 20px",
                width: "260px",
                maxWidth: "calc(100% - 32px)",
                minHeight: "52px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "0.9rem",
                boxShadow: "0 12px 24px rgba(79, 70, 229, 0.28)",
                marginLeft: "auto",
                marginRight: "auto",
                whiteSpace: "nowrap",
                transition: "transform 220ms ease, box-shadow 220ms ease",
              }}
            >
              🚗 Waze
            </a>

            <div
              style={{
                fontSize: "28px",
                color: "#16a34a",
                lineHeight: 1,
              }}
            >
              ↓
            </div>

            <div
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#4b5563",
                marginBottom: "4px",
              }}
            >
              ⛽ OMV Dupnitsa
            </div>
            <a
              className="waze-button"
              href="https://waze.com/ul?ll=42.28485,23.12321&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                color: "#fff",
                border: "1px solid transparent",
                borderRadius: "16px",
                padding: "0 20px",
                width: "260px",
                maxWidth: "calc(100% - 32px)",
                minHeight: "52px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "0.9rem",
                boxShadow: "0 12px 24px rgba(79, 70, 229, 0.28)",
                marginLeft: "auto",
                marginRight: "auto",
                whiteSpace: "nowrap",
                transition: "transform 220ms ease, box-shadow 220ms ease",
              }}
            >
              🚗 Waze
            </a>

            <div
              style={{
                fontSize: "28px",
                color: "#16a34a",
                lineHeight: 1,
              }}
            >
              ↓
            </div>

            <div
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#153b4a",
              }}
            >
              🇧🇬 Studio in Borovets Gardens Complex — יעד סופי
            </div>
            <a
              className="waze-button"
              href="https://waze.com/ul?ll=42.271036,23.604136&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                color: "#fff",
                border: "1px solid transparent",
                borderRadius: "16px",
                padding: "0 20px",
                width: "260px",
                maxWidth: "calc(100% - 32px)",
                minHeight: "52px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "0.9rem",
                boxShadow: "0 12px 24px rgba(79, 70, 229, 0.28)",
                marginLeft: "auto",
                marginRight: "auto",
                whiteSpace: "nowrap",
                transition: "transform 220ms ease, box-shadow 220ms ease",
              }}
            >
              🚗 Waze לבורובץ
            </a>
          </div>
        </div>

      <nav style={{ display: "flex", justifyContent: "space-between", gap: "14px", marginTop: "28px" }}>
        <Link
          to="/day7"
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
          ← יום 7
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
      </nav>
    </div>
  );
}

export default Day8;
