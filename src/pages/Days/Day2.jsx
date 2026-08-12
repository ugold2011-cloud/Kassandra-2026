import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Day.css";
import heroImage from "../../assets/images/kallithea-beach-2.jpg";
import MusicModal from "../../components/MusicModal";

function Day2() {
  const [showMusicModal, setShowMusicModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="day-page">
      <div className="day-image">
        <img
          src={heroImage}
          alt="פפקוחורי"
          className="day-hero-image"
        />
      </div>

      <div className="day-location-box">
        <h2 className="day-location">
          פפקוחורי
        </h2>

        <p className="day-location-en">
          PEFKOCHORI
        </p>
      </div>

      <div className="day-icons">
        <span
          title="The Sip Spot Coffee And More — Breakfast"
          onClick={() => navigate("/sip-spot")}
          style={{ cursor: "pointer" }}
        >
          🍳
        </span>

        <span
          title="Shopping / Browsing — Pefkochori"
          onClick={() => navigate("/pefkochori-shopping")}
          style={{ cursor: "pointer" }}
        >
          👗
        </span>

        <span
          title="Glarokavos Beach (Sea Side)"
          onClick={() => navigate("/glarokavos-beach")}
          style={{ cursor: "pointer" }}
        >
          🏖️
        </span>

        <span
          title="Kassandreia Tuesday Market — Optional"
          onClick={() => navigate("/kassandreia-market")}
          style={{ cursor: "pointer" }}
        >
          🛍️
        </span>

        <span
          title="Metoxi Restaurant — Meat Dinner"
          onClick={() => navigate("/metoxi")}
          style={{ cursor: "pointer" }}
        >
          🥩
        </span>

        <span
          title="Givizinis Pastry Cafe — Dessert"
          onClick={() => navigate("/givizinis")}
          style={{ cursor: "pointer" }}
        >
          🍰
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
          to="/day1"
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
          ← יום 1
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
          to="/day3"
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
          יום 3 →
        </Link>
      </nav>
    </div>
  );
}

export default Day2;