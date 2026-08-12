import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Day.css";
import heroImage from "../../assets/images/kallithea-beach-2.jpg";
import MusicModal from "../../components/MusicModal";

function Day3() {
  const [showMusicModal, setShowMusicModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="day-page">
      <div className="day-image">
        <img
          src={heroImage}
          alt="קסנדרה"
          className="day-hero-image"
        />
      </div>

      <div className="day-location-box">
        <h2 className="day-location">
          קסנדרה
        </h2>

        <p className="day-location-en">
          KASSANDRA
        </p>
      </div>

      <div className="day-icons">
        <span
          title="The Stolen Cup — Kallithea"
          onClick={() => navigate("/the-stolen-cup")}
          style={{ cursor: "pointer" }}
        >
          ☕
        </span>

        <span
          title="Terra Azapiko"
          onClick={() => navigate("/terra-azapiko")}
          style={{ cursor: "pointer" }}
        >
          🫒
        </span>

        <span
          title="Afitos Old Village"
          onClick={() => navigate("/afitos-old-village")}
          style={{ cursor: "pointer" }}
        >
          🏺
        </span>

        <span
          title="Afytaion Gaia Winery"
          onClick={() => navigate("/afytaion-gaia")}
          style={{ cursor: "pointer" }}
        >
          🍷
        </span>

        <span
          title="Agia Paraskevi Village"
          onClick={() => navigate("/gaia-kallisti")}
          style={{ cursor: "pointer" }}
        >
          🍯
        </span>

        <span
          title="Archontiko Agia Paraskevi"
          onClick={() => navigate("/archontiko")}
          style={{ cursor: "pointer" }}
        >
          🥩
        </span>
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
        <button
          className="waze-button"
          style={{
            width: "260px",
          }}
        >
          🚗 פתח ב־Waze
        </button>

        {!showMusicModal && (
          <button
            onClick={() => setShowMusicModal(true)}
            style={{
              width: "260px",
              height: "58px",
              border: "none",
              borderRadius: "18px",
              background:
                "linear-gradient(135deg, #7c3aed, #4f46e5)",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              boxShadow: "0 8px 20px rgba(79,70,229,0.35)",
            }}
          >
            <span style={{ fontSize: "22px" }}>🎵</span>
            <span>Choose Your Soundtrack</span>
          </button>
        )}
      </div>

      {showMusicModal && (
        <MusicModal
          onClose={() => setShowMusicModal(false)}
        />
      )}

      <nav style={{ display: "flex", justifyContent: "space-between", gap: "14px", marginTop: "28px" }}>
        <Link
          to="/day2"
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
          ← יום 2
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
          to="/day4"
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
          יום 4 →
        </Link>
      </nav>
    </div>
  );
}

export default Day3;
