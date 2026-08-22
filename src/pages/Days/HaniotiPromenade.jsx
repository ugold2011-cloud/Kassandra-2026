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
        <a
          href="https://waze.com/ul?ll=40.001556,23.575541&navigate=yes"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "12px",
            width: "260px",
            maxWidth: "calc(100% - 32px)",
            minHeight: "52px",
            padding: "0 20px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 800,
            boxShadow: "0 8px 18px rgba(79, 70, 229, 0.28)",
          }}
        >
          🚗 פתח ב־Waze
        </a>

        <hr style={{ margin: "20px 0" }} />

        <p>💡 מומלץ להגיע אחרי השקיעה.</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "calc(100% - 32px)",
          maxWidth: "360px",
          gap: "12px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "30px",
          marginBottom: "40px",
        }}
      >
        <Link to="/amorato" style={{ flex: "1", minWidth: "0" }}>
          <button
            style={{
              width: "100%",
              minHeight: "52px",
              padding: "0 10px",
              border: "1px solid #dbe2ea",
              borderRadius: "16px",
              background: "#ffffff",
              color: "#1f2937",
              fontSize: "15px",
              fontWeight: "700",
              cursor: "pointer",
              boxShadow: "none",
              transition: "all 0.25s ease",
              whiteSpace: "nowrap",
            }}
          >
            🍦 חזרה ל־Amorato
          </button>
        </Link>

        <Link to="/day1" style={{ flex: "1", minWidth: "0" }}>
          <button
            style={{
              width: "100%",
              minHeight: "52px",
              padding: "0 10px",
              borderRadius: "16px",
              background:
                "linear-gradient(135deg, #7c3aed, #4f46e5)",
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: "700",
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(37, 99, 235, 0.35)",
              transition: "all 0.25s ease",
              border: "none",
              whiteSpace: "nowrap",
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