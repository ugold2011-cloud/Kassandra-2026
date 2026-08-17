import { Link } from "react-router-dom";
import heroImage from "../../assets/images/BensCoffee/BensCoffee-main.jpeg";

function BensCoffee() {
  return (
    <main className="coffee-page">
      <style>{`
        .coffee-page {
          --coffee-ink: #3e2723;
          --coffee-deep: #2b1a17;
          --coffee-sky: #d7a86e;
          --coffee-soft: #fdf6ed;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--coffee-ink);
          font-family: inherit;
        }

        .coffee-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(43, 26, 23, 0.2);
        }

        .coffee-hero::after {
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

        .coffee-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .coffee-hero:hover img {
          transform: scale(1.04);
        }

        .coffee-hero-content {
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

        .coffee-kicker {
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

        .coffee-title {
          margin: 0;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .coffee-status {
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

        .coffee-details {
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

        .coffee-section-heading {
          margin: 0 0 16px;
          color: var(--coffee-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .coffee-main-list,
        .coffee-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .coffee-main-list li,
        .coffee-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .coffee-main-list li {
          font-weight: 650;
        }

        .coffee-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(215, 168, 110, 0.22);
          text-align: right;
        }

        .coffee-info-list li {
          font-size: 0.94rem;
        }

        .coffee-important {
          font-weight: 800;
          color: #9a3412;
        }

        .coffee-ltr {
          direction: ltr;
          unicode-bidi: bidi-override;
          display: inline-block;
        }

        .coffee-actions {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          margin-top: 28px;
        }

        .coffee-button {
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

        .coffee-button:hover {
          transform: translateY(-3px);
        }

        .coffee-button-back {
          border-color: #f5e6d3;
          background: #fff;
          color: var(--coffee-ink);
          box-shadow: 0 8px 18px rgba(43, 26, 23, 0.08);
        }

        .coffee-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        @media (max-width: 760px) {
          .coffee-page {
            padding-bottom: 32px;
          }

          .coffee-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .coffee-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .coffee-status {
            white-space: normal;
          }

          .coffee-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .coffee-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(215, 168, 110, 0.22);
            border-left: 0;
          }

          .coffee-actions {
            flex-direction: column-reverse;
          }

          .coffee-button {
            width: 100%;
          }
        }
      `}</style>

      <section className="coffee-hero">
        <img
          src={heroImage}
          alt="Ben's Coffee"
        />

        <div className="coffee-hero-content">
          <div>
            <p className="coffee-kicker">
              NEA MOUDANIA
            </p>

            <h1 className="coffee-title">
              Ben's Coffee
            </h1>
          </div>
        </div>
      </section>

      <section className="coffee-details">
        <div>
          <h2 className="coffee-section-heading">
            עצירת בוקר מקומית לקפה ובוגאצה
          </h2>

          <ul className="coffee-main-list" dir="rtl">
            <li className="coffee-important">
              📍 כתובת: Kiprou 8, Nea Moudania 632 00
            </li>

            <li>
              📞 +30 2373 026400
            </li>
          </ul>
        </div>

        <div className="coffee-info" dir="rtl">

          <ul className="coffee-info-list">
            <li>🥐 בוגאצה</li>
            <li>☕ אספרסו או קפה לבחירה</li>
          </ul>
        </div>
      </section>

      <nav
        className="coffee-actions"
        aria-label="Ben's Coffee navigation"
      >
        <Link
          className="coffee-button coffee-button-back"
          to="/day6"
        >
          ⬅️ חזרה ליום 6
        </Link>

        <Link
          className="coffee-button coffee-button-next"
          to="/vagio-agrofarms"
        >
          ➡️ התחנה הבאה — Vagio Agrofarms
        </Link>
      </nav>
    </main>
  );
}

export default BensCoffee;
