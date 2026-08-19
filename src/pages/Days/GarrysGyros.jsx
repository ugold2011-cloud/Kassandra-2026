import { Link } from "react-router-dom";
import heroImage from "../../assets/images/Garrys The King of GIROS/Garrys the king-main.jpeg";

function GarrysGyros() {
  return (
    <main className="garrys-page">
      <style>{`
        .garrys-page {
          --garrys-ink: #3e2723;
          --garrys-deep: #2b1a17;
          --garrys-sky: #d7a86e;
          --garrys-soft: #fdf6ed;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--garrys-ink);
          font-family: inherit;
        }

        .garrys-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(43, 26, 23, 0.2);
        }

        .garrys-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            180deg,
            rgba(43, 26, 23, 0.06) 22%,
            rgba(43, 26, 23, 0.8) 100%
          );
        }

        .garrys-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .garrys-hero:hover img {
          transform: scale(1.04);
        }

        .garrys-hero-content {
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

        .garrys-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 10px;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #fdebd0;
        }

        .garrys-title {
          margin: 0;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
          color: #fff;
        }

        .garrys-details {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(250px, 0.8fr);
          gap: 20px;
          margin-top: 28px;
          padding: clamp(20px, 4vw, 34px);
          border: 1px solid rgba(215, 168, 110, 0.34);
          border-radius: 28px;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.94),
            rgba(253, 246, 237, 0.88)
          );
          box-shadow: 0 18px 45px rgba(43, 26, 23, 0.1);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .garrys-section-heading {
          margin: 0 0 16px;
          color: var(--garrys-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .garrys-main-list,
        .garrys-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .garrys-main-list li,
        .garrys-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .garrys-main-list li {
          font-weight: 650;
        }

        .garrys-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(215, 168, 110, 0.22);
          text-align: right;
        }

        .garrys-info-list li {
          font-size: 0.94rem;
        }

        .garrys-important {
          font-weight: 800;
          color: #9a3412;
        }

        .garrys-ltr {
          direction: ltr;
          unicode-bidi: bidi-override;
          display: inline-block;
        }

        .garrys-actions {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          margin-top: 28px;
        }

        .garrys-button {
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

        .garrys-button:hover {
          transform: translateY(-3px);
        }

        .garrys-button-back {
          border-color: #f5e6d3;
          background: #fff;
          color: var(--garrys-ink);
          box-shadow: 0 8px 18px rgba(43, 26, 23, 0.08);
        }

        .garrys-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        .garrys-waze-wrapper {
          margin-top: 28px;
        }

        .garrys-waze-button {
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
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        .garrys-waze-button:hover {
          transform: translateY(-3px);
        }

        @media (max-width: 760px) {
          .garrys-page {
            padding-bottom: 32px;
          }

          .garrys-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .garrys-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .garrys-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .garrys-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(215, 168, 110, 0.22);
            border-left: 0;
          }

          .garrys-actions {
            flex-direction: row;
          }

          .garrys-button {
            flex: 1;
          }
        }
      `}</style>

      <section className="garrys-hero">
        <img
          src={heroImage}
          alt="Garry's The King of Gyros"
        />

        <div className="garrys-hero-content">
          <div>
            <p className="garrys-kicker">
              HANIOTI
            </p>

            <h1 className="garrys-title">
              Garry's The King of Gyros
            </h1>
          </div>
        </div>
      </section>

      <section className="garrys-details">
        <div>
          <h2 className="garrys-section-heading">
            ארוחת ערב קלילה של גירוס יווני בחניוטי.
          </h2>

          <ul className="garrys-main-list" dir="rtl">
            <li className="garrys-important">
              🌯 גירוס חזיר או עוף
            </li>

            <li>
              🥣 צזיקי
            </li>

            <li>
              🍺 בירה קרה
            </li>
          </ul>
        </div>
      </section>

      <div className="garrys-waze-wrapper">
        <a
          className="garrys-waze-button"
          href="waze://?ll=40.00082203892744,23.57373078465639&navigate=yes"
        >
          🚗 Waze ל-Garry's The King of Gyros
        </a>
      </div>

      <nav
        className="garrys-actions"
        aria-label="Garry's The King of Gyros navigation"
      >
        <Link
          className="garrys-button garrys-button-back"
          to="/lemonis-bakery"
        >
          ⬅️ Lemonis
        </Link>

        <Link
          className="garrys-button garrys-button-next"
          to="/day7"
        >
          ➡️ יום 7
        </Link>
      </nav>
    </main>
  );
}

export default GarrysGyros;
