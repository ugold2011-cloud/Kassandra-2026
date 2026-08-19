import { Link } from "react-router-dom";

import heroImage from "../../assets/images/TerraAzapiko/TerraAzapiko-main.jpeg";
import product1 from "../../assets/images/TerraAzapiko/TerraAzapiko-products01.jpeg";
import product2 from "../../assets/images/TerraAzapiko/TerraAzapiko-products02.jpeg";

function TerraAzapiko() {
  return (
    <main className="terraazapiko-page">
      <style>{`
        .terraazapiko-page {
          --terraazapiko-ink: #153247;
          --terraazapiko-deep: #0c2738;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--terraazapiko-ink);
          font-family: inherit;
        }

        .terraazapiko-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(13, 54, 77, 0.2);
        }

        .terraazapiko-hero::after {
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

        .terraazapiko-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .terraazapiko-hero:hover img {
          transform: scale(1.04);
        }

        .terraazapiko-hero-content {
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

        .terraazapiko-kicker {
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

        .terraazapiko-title {
          margin: 0;
          color: #fff;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .terraazapiko-award {
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

        .terraazapiko-gallery {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 20px;
        }

        .terraazapiko-gallery img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(14, 57, 80, 0.12);
          transition: transform 220ms ease;
        }

        .terraazapiko-gallery img:hover {
          transform: translateY(-4px);
        }

        .terraazapiko-details {
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

        .terraazapiko-section-heading {
          margin: 0 0 16px;
          color: var(--terraazapiko-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .terraazapiko-menu-list,
        .terraazapiko-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .terraazapiko-menu-list li,
        .terraazapiko-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .terraazapiko-menu-list li {
          font-weight: 650;
        }

        .terraazapiko-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(58, 142, 183, 0.22);
          text-align: right;
        }

        .terraazapiko-info-list li {
          font-size: 0.94rem;
        }

        .terraazapiko-time {
          direction: ltr;
          unicode-bidi: isolate;
          display: inline-block;
        }

        .terraazapiko-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: nowrap;
          width: calc(100% - 32px);
          max-width: 360px;
          margin: 28px auto 0;
        }

        .terraazapiko-actions .terraazapiko-button {
          flex: 1 1 0;
          min-width: 0;
        }

        .terraazapiko-button {
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

        .terraazapiko-button:hover {
          transform: translateY(-3px);
        }

        .terraazapiko-button-back {
          border-color: #c8e5f2;
          background: #fff;
          color: var(--terraazapiko-ink);
          box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
        }

        .terraazapiko-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        .terraazapiko-waze-button {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
          width: 260px;
          max-width: calc(100% - 32px);
          min-height: 52px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 20px;
          border-radius: 16px;
        }

        @media (max-width: 760px) {
          .terraazapiko-page {
            padding-bottom: 32px;
          }

          .terraazapiko-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .terraazapiko-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .terraazapiko-award {
            white-space: normal;
          }

          .terraazapiko-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .terraazapiko-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(58, 142, 183, 0.22);
            border-left: 0;
          }

          .terraazapiko-gallery {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .terraazapiko-gallery img {
            height: 220px;
          }
        }
      `}</style>

      <section className="terraazapiko-hero">
        <img
          src={heroImage}
          alt="Terra Azapiko"
        />

        <div className="terraazapiko-hero-content">
          <div>
            <p className="terraazapiko-kicker">
              🫒 Afitos, Greece
            </p>

            <h1 className="terraazapiko-title">
              Terra Azapiko
            </h1>
          </div>

          <p className="terraazapiko-award">
            🫒 LOCAL PRODUCTS
          </p>
        </div>
      </section>

      <section className="terraazapiko-gallery" aria-label="Terra Azapiko products">
        <img src={product1} alt="Terra Azapiko products 1" />
        <img src={product2} alt="Terra Azapiko products 2" />
      </section>

      <section className="terraazapiko-details">
        <div>
          <h2 className="terraazapiko-section-heading">
            🫒 חווית מוצרים מקומיים
          </h2>

          <ul className="terraazapiko-menu-list" dir="rtl">
            <li>🫒 טעימות שמן זית מקומי</li>

            <li>🎁 בקבוקי שמן זית קטנים – מתאים גם כמתנה</li>
            <li>🛒 רכישת שמן זית ומוצרי שמן זית במקום</li>
          </ul>
        </div>

        <div className="terraazapiko-info" dir="rtl">
          <h2 className="terraazapiko-section-heading">
            פרטים שימושיים
          </h2>

          <ul className="terraazapiko-info-list">
            <li>
              <span>
                📍 מיקום: Afitos, Kassandra, חלקידיקי, יוון
              </span>
            </li>

            <li>
              <span>
                🕒 שעות פתיחה: <span className="terraazapiko-time">10:00-23:15</span>
              </span>
            </li>

            <li>
              <span>
                🏪 כניסה לחנות: חופשית, ללא תיאום מראש
              </span>
            </li>


          </ul>
        </div>
      </section>

      <div
        style={{
          textAlign: "center",
          marginTop: 28,
          marginBottom: 16,
        }}
      >
        <a
          className="terraazapiko-button terraazapiko-waze-button"
          href="waze://?ll=40.07444934032626,23.4488314&navigate=yes"
        >
          🚗 Waze ל-Terra Azapiko
        </a>
      </div>

      <nav
        className="terraazapiko-actions"
        aria-label="Terra Azapiko navigation"
      >
        <Link
          className="terraazapiko-button terraazapiko-button-back"
          to="/day3"
        >
          ⬅️ חזרה ליום 3
        </Link>

        <Link
          className="terraazapiko-button terraazapiko-button-next"
          to="/afitos-old-village"
        >
          <div style={{ lineHeight: 1.2 }}>
            <div>המשך</div>
            <div style={{ fontSize: "0.85em" }}>Afitos Old Village</div>
          </div>
        </Link>
      </nav>
    </main>
  );
}

export default TerraAzapiko;
