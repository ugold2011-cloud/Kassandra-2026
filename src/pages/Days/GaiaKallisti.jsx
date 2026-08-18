import { Link } from "react-router-dom";

import heroImage from "../../assets/images/GaiaKallisti/GaiaKallisti-main.jpg";
import honey1 from "../../assets/images/GaiaKallisti/GaiaKallisti-honey01.jpg";
import oliveoil1 from "../../assets/images/GaiaKallisti/GaiaKallisti-oliveoil01.png";

function GaiaKallisti() {
  return (
    <main className="gaidakallisti-page">
      <style>{`
        .gaidakallisti-page {
          --gaidakallisti-ink: #153247;
          --gaidakallisti-deep: #0c2738;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--gaidakallisti-ink);
          font-family: inherit;
        }

        .gaidakallisti-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(13, 54, 77, 0.2);
        }

        .gaidakallisti-hero::after {
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

        .gaidakallisti-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .gaidakallisti-hero:hover img {
          transform: scale(1.04);
        }

        .gaidakallisti-hero-content {
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

        .gaidakallisti-kicker {
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

        .gaidakallisti-title {
          margin: 0;
          color: #ffffff;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
        }

        .gaidakallisti-award {
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

        .gaidakallisti-gallery {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 20px;
        }

        .gaidakallisti-gallery img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(14, 57, 80, 0.12);
          transition: transform 220ms ease;
        }

        .gaidakallisti-gallery img:hover {
          transform: translateY(-4px);
        }

        .gaidakallisti-details {
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

        .gaidakallisti-section-heading {
          margin: 0 0 16px;
          color: var(--gaidakallisti-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .gaidakallisti-menu-list,
        .gaidakallisti-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .gaidakallisti-menu-list li,
        .gaidakallisti-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .gaidakallisti-menu-list li {
          font-weight: 650;
        }

        .gaidakallisti-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(58, 142, 183, 0.22);
          text-align: right;
        }

        .gaidakallisti-info-list li {
          font-size: 0.94rem;
        }

        .gaidakallisti-phone {
          direction: ltr;
          unicode-bidi: isolate;
          display: inline-block;
        }

        .gaidakallisti-actions {
          display: flex;
          justify-content: center;
          max-width: 360px;
          margin: 28px auto 0;
          gap: 12px;
        }

        .gaidakallisti-button {
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

        .gaidakallisti-button:hover {
          transform: translateY(-3px);
        }

        .gaidakallisti-button-back {
          border-color: #c8e5f2;
          background: #fff;
          color: var(--gaidakallisti-ink);
          box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
        }

        .gaidakallisti-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        .gaidakallisti-waze-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 28px;
        }

        .gaidakallisti-waze-button {
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

        .gaidakallisti-waze-button:hover {
          transform: translateY(-3px);
        }

        @media (max-width: 760px) {
          .gaidakallisti-page {
            padding-bottom: 32px;
          }

          .gaidakallisti-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .gaidakallisti-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .gaidakallisti-award {
            white-space: normal;
          }

          .gaidakallisti-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .gaidakallisti-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(58, 142, 183, 0.22);
            border-left: 0;
          }

          .gaidakallisti-actions {
            flex-wrap: wrap;
          }

          .gaidakallisti-button {
            width: auto;
          }

          .gaidakallisti-gallery {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .gaidakallisti-gallery img {
            height: 220px;
          }
        }
      `}</style>

      <section className="gaidakallisti-hero">
        <img
          src={heroImage}
          alt="Gaia Kallisti - Olive Oil & Olives Center"
        />

        <div className="gaidakallisti-hero-content">
          <div>
            <p className="gaidakallisti-kicker">
              🫒 Siviri, Greece
            </p>

            <h1 className="gaidakallisti-title">
              Gaia Kallisti
            </h1>
          </div>

          <p className="gaidakallisti-award">
            🫒 OLIVE OIL & OLIVES
          </p>
        </div>
      </section>

      <section className="gaidakallisti-gallery" aria-label="Gaia Kallisti products">
        <img src={honey1} alt="Gaia Kallisti honey" />
        <img src={oliveoil1} alt="Gaia Kallisti olive oil" />
      </section>

      <section className="gaidakallisti-details">
        <div>
          <h2 className="gaidakallisti-section-heading">
            🫒 חווית מוצרים מקומיים
          </h2>

          <ul className="gaidakallisti-menu-list" dir="rtl">
            <li>🍯 דבש יווני במגוון סוגים</li>
            <li>🫒 שמן זית וזיתים</li>
            <li>🛍️ אפשרות לרכוש מוצרים במקום</li>
          </ul>
        </div>

        <div className="gaidakallisti-info" dir="rtl">
          <h2 className="gaidakallisti-section-heading">
            פרטי קשר
          </h2>

          <ul className="gaidakallisti-info-list">
            <li>
              <span>
                📍 מיקום: Siviri, Kassandra, חלקידיקי, יוון
              </span>
            </li>

            <li>
              <span>
                📞 טלפון: <span className="gaidakallisti-phone">+30 23740 23855</span>
              </span>
            </li>
          </ul>
        </div>
      </section>

      <div className="gaidakallisti-waze-wrapper">
        <a
          className="gaidakallisti-waze-button"
          href="waze://?ll=40.04181401885115,23.3712053&navigate=yes"
        >
          🚗 Waze ל-Gaia Kallisti
        </a>
      </div>

      <nav
        className="gaidakallisti-actions"
        aria-label="Gaia Kallisti navigation"
      >
        <Link
          className="gaidakallisti-button gaidakallisti-button-back"
          to="/day3"
        >
          ⬅️ חזרה ליום 3
        </Link>

        <Link
          className="gaidakallisti-button gaidakallisti-button-next"
          to="/archontiko"
        >
          ➡️ המשך
          <br />
          Archontiko
        </Link>
      </nav>
    </main>
  );
}

export default GaiaKallisti;
