import { useState } from "react";
import "./Day.css";
import heroImage from "../../assets/images/kallithea-beach-2.jpg";
import MusicModal from "../../components/MusicModal";

function Day1() {
  const [showMusicModal, setShowMusicModal] = useState(false);

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

      <div className="day-icons">
        <span title="Lefko Suites">🏨</span>
        <span title="Faros Fish Restaurant">🐟</span>
        <span title="טיילת ושקיעה">🌅</span>
        <span title="גלידה">🍨</span>
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
    </div>
  );
}

export default Day1;