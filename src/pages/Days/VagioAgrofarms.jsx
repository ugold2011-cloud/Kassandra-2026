import { Link } from "react-router-dom";
import heroImage from "../../assets/images/VagioAgrofarms/VagioAgrofarms-main.jpeg";

function VagioAgrofarms() {
  return (
    <main className="vagio-page">
      <style>{`
        .vagio-page {
          --vagio-ink: #3e2723;
          --vagio-deep: #2b1a17;
          --vagio-sky: #d7a86e;
          --vagio-soft: #fdf6ed;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--vagio-ink);
          font-family: inherit;
        }

        .vagio-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(43, 26, 23, 0.2);
        }

        .vagio-hero::after {
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

        .vagio-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .vagio-hero:hover img {
          transform: scale(1.04);
        }

        .vagio-hero-content {
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

        .vagio-kicker {
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

        .vagio-title {
          margin: 0;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .vagio-details {
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

        .vagio-section-heading {
          margin: 0 0 16px;
          color: var(--vagio-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .vagio-main-list,
        .vagio-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .vagio-main-list li,
        .vagio-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .vagio-main-list li {
          font-weight: 650;
        }

        .vagio-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(215, 168, 110, 0.22);
          text-align: right;
        }

        .vagio-info-list li {
          font-size: 0.94rem;
        }

        .vagio-important {
          font-weight: 800;
          color: #9a3412;
        }

        .vagio-ltr {
          direction: ltr;
          unicode-bidi: bidi-override;
          display: inline-block;
        }

        .vagio-actions {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          margin-top: 28px;
        }

        .vagio-button {
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

        .vagio-button:hover {
          transform: translateY(-3px);
        }

        .vagio-button-back {
          border-color: #f5e6d3;
          background: #fff;
          color: var(--vagio-ink);
          box-shadow: 0 8px 18px rgba(43, 26, 23, 0.08);
        }

        .vagio-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        @media (max-width: 760px) {
          .vagio-page {
            padding-bottom: 32px;
          }

          .vagio-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .vagio-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .vagio-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .vagio-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(215, 168, 110, 0.22);
            border-left: 0;
          }

          .vagio-actions {
            flex-direction: column-reverse;
          }

          .vagio-button {
            width: 100%;
          }
        }
      `}</style>

      <section className="vagio-hero">
        <img
          src={heroImage}
          alt="Vagio Agrofarms"
        />

        <div className="vagio-hero-content">
          <div>
            <p className="vagio-kicker">
              AGIOS MAMAS
            </p>

            <h1 className="vagio-title">
              Vagio Agrofarms
            </h1>
          </div>
        </div>
      </section>

      <section className="vagio-details">
        <div>
          <h2 className="vagio-section-heading">
            ביקור אצל יצרן מקומי של שמן זית ומוצרי זיתים.
          </h2>

          <ul className="vagio-main-list" dir="rtl">
            <li className="vagio-important">
              🕙 פתוח החל משעה 10:00
            </li>
          </ul>
        </div>

        <div className="vagio-info" dir="rtl">
          <h2 className="vagio-section-heading">
            מה כדאי לקנות
          </h2>

          <ul className="vagio-info-list">
            <li>🫒 שמן זית כתית מעולה</li>
            <li>🫒 זיתי Halkidiki</li>
            <li>🫙 ממרחי זיתים</li>
          </ul>
        </div>
      </section>

      <nav
        className="vagio-actions"
        aria-label="Vagio Agrofarms navigation"
      >
        <Link
          className="vagio-button vagio-button-back"
          to="/bens-coffee"
        >
          ⬅️ חזרה — Ben's Coffee
        </Link>

        <Link
          className="vagio-button vagio-button-next"
          to="/petralona"
        >
          ➡️ התחנה הבאה — Petralona Cave & Museum
        </Link>
      </nav>
    </main>
  );
}

export default VagioAgrofarms;
