import { Link } from "react-router-dom";
import heroImage from "../../assets/images/Petralona/Petralona-main.jpeg";
import trainImage from "../../assets/images/Petralona/Petralona-train.jpeg";

function Petralona() {
  return (
    <main className="petralona-page">
      <style>{`
        .petralona-page {
          --petralona-ink: #153247;
          --petralona-deep: #0c2738;
          --petralona-sky: #63c7ff;
          --petralona-soft: #eef9ff;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--petralona-ink);
          font-family: inherit;
        }

        .petralona-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(13, 54, 77, 0.2);
        }

        .petralona-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            180deg,
            rgba(5, 28, 42, 0.06) 22%,
            rgba(5, 28, 42, 0.8) 100%
          );
        }

        .petralona-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .petralona-hero:hover img {
          transform: scale(1.04);
        }

        .petralona-hero-content {
          position: absolute;
          z-index: 2;
          inset: auto clamp(22px, 5vw, 48px) clamp(24px, 5vw, 42px);
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          color: #fff;
          text-align: left;
        }

        .petralona-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 10px;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #d8f3ff;
        }

        .petralona-title {
          margin: 0;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .petralona-details {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(250px, 0.8fr);
          gap: 20px;
          margin-top: 28px;
          padding: clamp(20px, 4vw, 34px);
          border: 1px solid rgba(112, 196, 236, 0.34);
          border-radius: 28px;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.94),
            rgba(238, 249, 255, 0.88)
          );
          box-shadow: 0 18px 45px rgba(14, 57, 80, 0.1);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .petralona-section-heading {
          margin: 0 0 16px;
          color: var(--petralona-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .petralona-main-list,
        .petralona-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .petralona-main-list li,
        .petralona-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .petralona-main-list li {
          font-weight: 650;
        }

        .petralona-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(58, 142, 183, 0.22);
          text-align: right;
        }

        .petralona-info-list li {
          font-size: 0.94rem;
        }

        .petralona-important {
          font-weight: 800;
          color: #9a3412;
        }

        .petralona-train {
          margin-top: 28px;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 18px 45px rgba(14, 57, 80, 0.1);
        }

        .petralona-train img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .petralona-train-content {
          padding: clamp(20px, 4vw, 34px);
          border: 1px solid rgba(112, 196, 236, 0.34);
          border-top: none;
          border-radius: 0 0 28px 28px;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.94),
            rgba(238, 249, 255, 0.88)
          );
        }

        .petralona-train-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
          text-align: right;
        }

        .petralona-train-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
          font-size: 0.94rem;
        }

        .petralona-actions {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          margin-top: 28px;
        }

        .petralona-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          padding: 0 22px;
          border: 1px solid transparent;
          border-radius: 16px;
          text-decoration: none;
          font-size: 0.96rem;
          font-weight: 800;
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            background 220ms ease;
        }

        .petralona-button:hover {
          transform: translateY(-3px);
        }

        .petralona-button-back {
          border-color: #c8e5f2;
          background: #fff;
          color: var(--petralona-ink);
          box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
        }

        .petralona-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        @media (max-width: 760px) {
          .petralona-page {
            padding-bottom: 32px;
          }

          .petralona-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .petralona-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .petralona-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .petralona-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(58, 142, 183, 0.22);
            border-left: 0;
          }

          .petralona-actions {
            flex-direction: column-reverse;
          }

          .petralona-button {
            width: 100%;
          }
        }
      `}</style>

      <section className="petralona-hero">
        <img
          src={heroImage}
          alt="Petralona Cave & Museum"
        />

        <div className="petralona-hero-content">
          <div>
            <p className="petralona-kicker">
              🏛️ PETRALONA
            </p>

            <h1 className="petralona-title">
              Petralona Cave & Museum
            </h1>
          </div>
        </div>
      </section>

      <section className="petralona-details">
        <div>
          <h2 className="petralona-section-heading">
            מערת פטרלונה והמוזיאון — ביקור של כשעה.
          </h2>

          <ul className="petralona-main-list" dir="rtl">
            <li>
              🕗 פתוח ב־19.09.2026: <span dir="ltr">08:00–20:00</span>
            </li>

            <li>
              🕳️ המסלול בתוך המערה: כ־250 מטר
            </li>

            <li className="petralona-important">
              ⚠️ בחלק מהמסלול יש מדרגות ושתי נקודות צרות
            </li>

            <li>
              🏛️ המערה והמוזיאון ניתנים לביקור יחד
            </li>

            <li>
              🎟️ כרטיסים ניתן לרכוש במקום או אונליין
            </li>
          </ul>
        </div>

        <div className="petralona-info" dir="rtl">
          <h2 className="petralona-section-heading">
            פרטים שימושיים
          </h2>

          <ul className="petralona-info-list">
            <li>
              <span>
                📍 מיקום: Petralona
              </span>
            </li>

            <li>
              <span>
                🕗 שעות פעילות: <span dir="ltr">08:00–20:00</span>
              </span>
            </li>

            <li>
              <span>
                🎟️ כרטיסים במקום או אונליין
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="petralona-train">
        <img
          src={trainImage}
          alt="Tourist train to Petralona Cave"
        />

        <div className="petralona-train-content">
          <h2 className="petralona-section-heading">
            🚂 רכבת תיירותית מהחניה לכיוון המערה
          </h2>

          <ul className="petralona-train-list">
            <li>
              🚂 רכבת תיירותית מהחניה לכיוון המערה
            </li>

            <li>
              🚗 מגיעים עם הרכב ישירות לחניה התחתונה
            </li>

            <li>
              🚂 הרכבת פעילה בתאריך הביקור שלנו
            </li>

            <li>
              ℹ️ שעות יציאה ומחיר הרכבת עדיין ממתינים לאישור מהמפעיל
            </li>
          </ul>
        </div>
      </section>

      <nav
        className="petralona-actions"
        aria-label="Petralona Cave & Museum navigation"
      >
        <Link
          className="petralona-button petralona-button-back"
          to="/vagio-agrofarms"
        >
          ⬅️ התחנה הקודמת — Vagio Agrofarms
        </Link>

        <Link
          className="petralona-button petralona-button-next"
          to="/giannikos"
        >
          ➡️ התחנה הבאה — Giannikos Tavern
        </Link>
      </nav>
    </main>
  );
}

export default Petralona;
