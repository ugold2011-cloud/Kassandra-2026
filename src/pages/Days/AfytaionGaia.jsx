import { Link } from "react-router-dom";

import heroImage from "../../assets/images/AfytaionGaia/AfytaioGaia-main.png";
import winery1 from "../../assets/images/AfytaionGaia/AfytaioGaia-winery01.jpg";

function AfytaionGaia() {
  return (
    <main className="afytaiongaia-page">
      <style>{`
        .afytaiongaia-page {
          --afytaiongaia-ink: #153247;
          --afytaiongaia-deep: #0c2738;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--afytaiongaia-ink);
          font-family: inherit;
        }

        .afytaiongaia-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(13, 54, 77, 0.2);
        }

        .afytaiongaia-hero::after {
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

        .afytaiongaia-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .afytaiongaia-hero:hover img {
          transform: scale(1.04);
        }

        .afytaiongaia-hero-content {
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

        .afytaiongaia-kicker {
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

        .afytaiongaia-title {
          margin: 0;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .afytaiongaia-award {
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

        .afytaiongaia-gallery {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 20px;
        }

        .afytaiongaia-gallery img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(14, 57, 80, 0.12);
          transition: transform 220ms ease;
        }

        .afytaiongaia-gallery img:hover {
          transform: translateY(-4px);
        }

        .afytaiongaia-details {
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
        }

        .afytaiongaia-section-heading {
          margin: 0 0 16px;
          color: var(--afytaiongaia-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .afytaiongaia-menu-list,
        .afytaiongaia-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .afytaiongaia-menu-list li,
        .afytaiongaia-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .afytaiongaia-menu-list li {
          font-weight: 650;
        }

        .afytaiongaia-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(58, 142, 183, 0.22);
          text-align: right;
        }

        .afytaiongaia-info-list li {
          font-size: 0.94rem;
        }

        .afytaiongaia-actions {
          display: flex;
          justify-content: center;
          max-width: 360px;
          margin: 28px auto 0;
          gap: 12px;
        }

        .afytaiongaia-button {
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
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .afytaiongaia-button:hover {
          transform: translateY(-3px);
        }

        .afytaiongaia-waze-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 28px;
        }

        .afytaiongaia-waze-button {
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
          transition: transform 220ms ease, box-shadow 220ms ease;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        .afytaiongaia-waze-button:hover {
          transform: translateY(-3px);
        }

        .afytaiongaia-button-back {
          border-color: #c8e5f2;
          background: #fff;
          color: var(--afytaiongaia-ink);
          box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
        }

        .afytaiongaia-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        @media (max-width: 760px) {
          .afytaiongaia-page {
            padding-bottom: 32px;
          }

          .afytaiongaia-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .afytaiongaia-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .afytaiongaia-award {
            white-space: normal;
          }

          .afytaiongaia-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .afytaiongaia-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(58, 142, 183, 0.22);
            border-left: 0;
          }

          .afytaiongaia-actions {
            flex-wrap: wrap;
          }

          .afytaiongaia-button {
            width: auto;
          }

          .afytaiongaia-gallery {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .afytaiongaia-gallery img {
            height: 220px;
          }
        }
      `}</style>

      <section className="afytaiongaia-hero">
        <img
          src={heroImage}
          alt="Afytaion Gaia Winery"
        />

        <div className="afytaiongaia-hero-content">
          <div>
            <p className="afytaiongaia-kicker">
              🍷 Afitos, Greece
            </p>

            <h1 className="afytaiongaia-title">
              Afytaion Gaia
            </h1>
          </div>

          <p className="afytaiongaia-award">
            🍷 WINERY
          </p>
        </div>
      </section>

      <section className="afytaiongaia-gallery" aria-label="Afytaion Gaia Winery">
        <img src={winery1} alt="Afytaion Gaia Winery" />
      </section>

      <section className="afytaiongaia-details">
        <div>
          <h2 className="afytaiongaia-section-heading">
            🍷 טעימות יין ביקב
          </h2>

          <ul className="afytaiongaia-menu-list" dir="rtl">
            <li>🍷 טעימות יין מקומי</li>
            <li>🍷 יינות מהכרם האורגני של Afytaion Gaia</li>
          </ul>
        </div>

        <div className="afytaiongaia-info" dir="rtl">
          <h2 className="afytaiongaia-section-heading">
            פרטים שימושיים
          </h2>

          <ul className="afytaiongaia-info-list">
            <li>
              <span>
                📍 מיקום: Afitos, Kassandra, חלקידיקי, יוון
              </span>
            </li>

            <li>
              <span>
                📅 ביקור ביקב וטעימות: בתיאום מראש
              </span>
            </li>

            <li>
              <span>
                🛍️ אפשרות לרכוש בקבוקים במקום
              </span>
            </li>
          </ul>
        </div>
      </section>

      <div className="afytaiongaia-waze-wrapper">
        <a
          className="afytaiongaia-waze-button"
          href="waze://?ll=40.10374559152338,23.421352557671803&navigate=yes"
        >
          🚗 Waze ל-Afytaion Gaia
        </a>
      </div>

      <nav
        className="afytaiongaia-actions"
        aria-label="Afytaion Gaia Winery navigation"
      >
        <Link
          className="afytaiongaia-button afytaiongaia-button-back"
          to="/day3"
        >
          ⬅️ חזרה ליום 3
        </Link>

        <Link
          className="afytaiongaia-button afytaiongaia-button-next"
          to="/gaia-kallisti"
        >
          ➡️ המשך
          <br />
          Gaia Kallisti
        </Link>
      </nav>
    </main>
  );
}

export default AfytaionGaia;
