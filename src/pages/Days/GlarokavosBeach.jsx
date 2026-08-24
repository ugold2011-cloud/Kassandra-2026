import { Link } from "react-router-dom";
import heroImage from "../../assets/images/GlarokavosBeach/GlarokavosBeach-main.jpg";

function GlarokavosBeach() {
  return (
    <main className="glarokavos-page">
      <style>{`
        .glarokavos-page {
          --glarokavos-ink: #153247;
          --glarokavos-deep: #0c2738;
          --glarokavos-sky: #63c7ff;
          --glarokavos-soft: #eef9ff;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--glarokavos-ink);
          font-family: inherit;
        }

        .glarokavos-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(13, 54, 77, 0.2);
        }

        .glarokavos-hero::after {
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

        .glarokavos-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .glarokavos-hero:hover img {
          transform: scale(1.04);
        }

        .glarokavos-hero-content {
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

        .glarokavos-kicker {
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

        .glarokavos-title {
          margin: 0;
          color: #fff;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .glarokavos-award {
          margin: 0;
          padding: 10px 14px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          white-space: nowrap;
        }

        .glarokavos-details {
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

        .glarokavos-section-heading {
          margin: 0 0 16px;
          color: var(--glarokavos-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .glarokavos-main-list,
        .glarokavos-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .glarokavos-main-list li,
        .glarokavos-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .glarokavos-main-list li {
          font-weight: 650;
        }

        .glarokavos-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(58, 142, 183, 0.22);
          text-align: right;
        }

        .glarokavos-info-list li {
          font-size: 0.94rem;
        }

        .glarokavos-warning {
          font-weight: 800;
          color: #9a3412;
        }

        .glarokavos-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          width: calc(100% - 32px);
          max-width: 360px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 28px;
        }

        .glarokavos-button {
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

        .glarokavos-button:hover {
          transform: translateY(-3px);
        }

        .glarokavos-button-back {
          border-color: #dbe2ea;
          background: #fff;
          color: var(--glarokavos-ink);
        }

        .glarokavos-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        .glarokavos-waze-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 260px;
          max-width: calc(100% - 32px);
          margin-left: auto;
          margin-right: auto;
          min-height: 52px;
          padding: 0 20px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: white;
          border: none;
          border-radius: 16px;
          font-size: 20px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 10px 24px rgba(46, 197, 211, 0.35);
          transition: all 0.2s ease;
          text-decoration: none;
          text-align: center;
        }

        .glarokavos-waze-button:hover {
          transform: scale(1.04);
        }

        .glarokavos-waze-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-top: 28px;
        }

        .glarokavos-google-maps-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          width: 260px;
          max-width: calc(100% - 32px);
          margin-left: auto;
          margin-right: auto;
          padding: 0 20px;
          border: 1px solid #dbe2ea;
          border-radius: 16px;
          text-decoration: none;
          font-size: 0.96rem;
          font-weight: 700;
          background: #fff;
          color: var(--glarokavos-ink);
          box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
          transition: transform 220ms ease, box-shadow 220ms ease;
          white-space: nowrap;
        }

        .glarokavos-google-maps-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(14, 57, 80, 0.16);
        }

        @media (max-width: 760px) {
          .glarokavos-page {
            padding-bottom: 32px;
          }

          .glarokavos-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .glarokavos-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .glarokavos-award {
            white-space: normal;
          }

          .glarokavos-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .glarokavos-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(58, 142, 183, 0.22);
            border-left: 0;
          }
        }
      `}</style>

      <section className="glarokavos-hero">
        <img
          src={heroImage}
          alt="Glarokavos Beach"
        />

        <div className="glarokavos-hero-content">
          <div>
            <p className="glarokavos-kicker">
              🏖️ Near Pefkochori, Kassandra
            </p>

            <h1 className="glarokavos-title">
              Glarokavos Beach
            </h1>
          </div>

          <p className="glarokavos-award">
            SEA SIDE — NOT LAGOON SIDE
          </p>
        </div>
      </section>

      <section className="glarokavos-details">
        <div>
          <h2 className="glarokavos-section-heading">
            🏖️ ים, שחייה ומנוחה
          </h2>

          <ul className="glarokavos-main-list" dir="rtl">
            <li className="glarokavos-warning">
              ⚠️ להגיע לצד הים הפתוח — לא לצד הלגונה
            </li>

            <li>
              🌊 הצד המומלץ עבורנו הוא Open Sea Side
            </li>

            <li>
              🏊 מתאים לשחייה אמיתית בים הפתוח
            </li>

            <li>
              🏖️ חוף חולי עם חלוקי אבן בחלק מהאזורים
            </li>

            <li>
              💧 מים צלולים ונעימים
            </li>

            <li>
              😌 עצירה רגועה למנוחה ולים
            </li>
          </ul>
        </div>

        <div className="glarokavos-info" dir="rtl">
          <h2 className="glarokavos-section-heading">
            פרטים שימושיים
          </h2>

          <ul className="glarokavos-info-list">
            <li>
              <span>
                📍 אזור: Glarokavos Beach, ליד Pefkochori
              </span>
            </li>

            <li>
              <span>
                🚗 חניה: לבחור חניה בצד הים — Sea Side
              </span>
            </li>

            <li>
              <span>
                ❌ לא לחנות בצד הלגונה
              </span>
            </li>

            <li>
              <span>
                🌊 יעד: Open Sea Side
              </span>
            </li>

            <li>
              <span>
                🍂 ספטמבר: פחות עומס ואווירה רגועה יותר
              </span>
            </li>
          </ul>
        </div>
      </section>

      <div className="glarokavos-waze-wrapper">
        <a
          className="glarokavos-waze-button"
          href="https://waze.com/ul?ll=39.982746969180965,23.64361449999999&navigate=yes"
          target="_blank"
          rel="noopener noreferrer"
        >
          🚗 Waze ל-Glarokavos BeachBar
        </a>

        <a
          className="glarokavos-google-maps-button"
          href="https://www.google.com/maps/dir/?api=1&destination=39.982746969180965,23.64361449999999"
        >
          🗺️ Google Maps ל-Glarokavos Beach
        </a>
      </div>

      <nav
        className="glarokavos-actions"
        aria-label="Glarokavos Beach navigation"
      >
        <Link
          className="glarokavos-button glarokavos-button-back"
          to="/day2"
        >
          ⬅️ חזרה ליום 2
        </Link>

        <Link
          className="glarokavos-button glarokavos-button-next"
          to="/kassandreia-market"
        >
          המשך<br />
          Kassandreia Market
        </Link>
      </nav>
    </main>
  );
}

export default GlarokavosBeach;