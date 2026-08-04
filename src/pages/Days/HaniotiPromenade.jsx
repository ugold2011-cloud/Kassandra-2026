import { Link } from "react-router-dom";

import haniotiMain from "../../assets/images/hanioti-promenade/hanioti-main.jpg";
import haniotiEvening from "../../assets/images/hanioti-promenade/hanioti-evening.jpg";
import haniotiStreet from "../../assets/images/hanioti-promenade/hanioti-street.jpg";
import haniotiNight from "../../assets/images/hanioti-promenade/hanioti-night.jpg";

import "./Day.css";

function HaniotiPromenade() {
  return (
    <div
      style={{
        maxWidth: "950px",
        margin: "0 auto",
        padding: "30px 20px",
        textAlign: "center",
      }}
    >
      <img
        src={haniotiMain}
        alt="Hanioti Promenade"
        style={{
          width: "100%",
          height: "360px",
          objectFit: "cover",
          objectPosition: "center 100%",
          borderRadius: "24px",
          marginBottom: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
        }}
      />

      <h1 className="place-title">טיילת חניוטי</h1>

      <p className="place-subtitle">🌅 Hanioti Promenade</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "18px",
          marginTop: "30px",
        }}
      >
        <img
          src={haniotiEvening}
          alt="Evening"
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            borderRadius: "18px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        />

        <img
          src={haniotiStreet}
          alt="Street"
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            borderRadius: "18px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        />

        <img
          src={haniotiNight}
          alt="Night"
          style={{
            width: "100%",
            height: "260px",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "18px",
            gridColumn: "1 / span 2",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        />
      </div>

      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "22px",
          padding: "24px",
          marginTop: "30px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <p>🚶 טיילת מושלמת לטיול ערב רגוע.</p>
        <p>🍦 גלידריות, בתי קפה וחנויות.</p>
        <p>🌊 מרחק הליכה קצר מהים.</p>
        <p>📍 Hanioti, Chalkidiki, Greece</p>

        <hr style={{ margin: "20px 0" }} />

        <p>💡 מומלץ להגיע אחרי השקיעה.</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "14px",
          marginTop: "30px",
          marginBottom: "40px",
        }}
      >
        <Link to="/amorato">
          <button
            style={{
              width: "220px",
              padding: "16px",
              border: "none",
              borderRadius: "18px",
              background:
                "linear-gradient(135deg, #26c6da 0%, #0097a7 100%)",
              color: "white",
              fontSize: "17px",
              fontWeight: "700",
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(38, 198, 218, 0.35)",
              transition: "all 0.25s ease",
            }}
          >
            🍦 חזרה ל־Amorato
          </button>
        </Link>

        <Link to="/day1">
          <button
            style={{
              width: "220px",
              padding: "16px",
              border: "none",
              borderRadius: "18px",
              background:
                "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
              color: "white",
              fontSize: "17px",
              fontWeight: "700",
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(37, 99, 235, 0.35)",
              transition: "all 0.25s ease",
            }}
          >
            🏠 חזרה ליום 1
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HaniotiPromenade;