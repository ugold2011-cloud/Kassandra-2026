import { Link } from "react-router-dom";
import heroImage from "../../assets/images/Giannikos/Giannikos-main.jpeg";

function Giannikos() {
  return (
    <main className="giannikos-page">
      <style>{`
        .giannikos-page {
          --giannikos-ink: #3e2723;
          --giannikos-deep: #2b1a17;
          --giannikos-sky: #d7a86e;
          --giannikos-soft: #fdf6ed;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--giannikos-ink);
          font-family: inherit;
        }

        .giannikos-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(43, 26, 23, 0.2);
        }

        .giannikos-hero::after {
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

        .giannikos-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .giannikos-hero:hover img {
          transform: scale(1.04);
        }

        .giannikos-hero-content {
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

        .giannikos-kicker {
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

        .giannikos-title {
          margin: 0;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
          color: #fff;
        }

        .giannikos-details {
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

        .giannikos-section-heading {
          margin: 0 0 16px;
          color: var(--giannikos-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .giannikos-main-list,
        .giannikos-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .giannikos-main-list li,
        .giannikos-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .giannikos-main-list li {
          font-weight: 650;
        }

        .giannikos-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(215, 168, 110, 0.22);
          text-align: right;
        }

        .giannikos-info-list li {
          font-size: 0.94rem;
        }

        .giannikos-important {
          font-weight: 800;
          color: #9a3412;
        }

        .giannikos-ltr {
          direction: ltr;
          unicode-bidi: bidi-override;
          display: inline-block;
        }

        .giannikos-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          margin-top: 28px;
        }

        .giannikos-waze-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          width: 100%;
        }

        .giannikos-waze-row .giannikos-button {
          flex: 0 0 auto;
          max-width: 640px;
        }

        .giannikos-google-maps-button {
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
          color: var(--giannikos-ink);
          box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
          transition: transform 220ms ease, box-shadow 220ms ease;
          white-space: nowrap;
        }

        .giannikos-google-maps-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(14, 57, 80, 0.16);
        }

        .giannikos-nav-row {
          display: flex;
          justify-content: center;
          gap: 14px;
          width: 100%;
        }

        .giannikos-nav-row .giannikos-button {
          flex: 1 1 0;
          max-width: 320px;
        }

        .giannikos-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 0 14px;
          border: 1px solid transparent;
          border-radius: 16px;
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 800;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            background 220ms ease;
        }

        .giannikos-button:hover {
          transform: translateY(-3px);
        }

        .giannikos-button-back {
          border-color: #f5e6d3;
          background: #fff;
          color: var(--giannikos-ink);
          box-shadow: 0 8px 18px rgba(43, 26, 23, 0.08);
        }

        .giannikos-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        .giannikos-button-waze {
          width: 260px;
          max-width: calc(100% - 32px);
          min-height: 52px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 20px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        @media (max-width: 760px) {
          .giannikos-page {
            padding-bottom: 32px;
          }

          .giannikos-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .giannikos-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .giannikos-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .giannikos-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(215, 168, 110, 0.22);
            border-left: 0;
          }
        }
      `}</style>

      <section className="giannikos-hero">
        <img
          src={heroImage}
          alt="Giannikos Tavern"
        />

        <div className="giannikos-hero-content">
          <div>
            <p className="giannikos-kicker">
              PALIOURI
            </p>

            <h1 className="giannikos-title">
              Giannikos Tavern
            </h1>
          </div>
        </div>
      </section>

      <section className="giannikos-details">
        <div>
          <h2 className="giannikos-section-heading">
            ארוחת ערב בטברנה יוונית משפחתית ותיקה בכפר Paliouri.
          </h2>

          <ul className="giannikos-main-list" dir="rtl">
            <li className="giannikos-important">
              🚗 חניה פרטית צמודה / מול המסעדה
            </li>
          </ul>
        </div>

        <div className="giannikos-info" dir="rtl">
          <h2 className="giannikos-section-heading">
            מה כדאי להזמין
          </h2>

          <ul className="giannikos-info-list">
            <li>🥣 צזיקי</li>
            <li>🧀 פטה על הגריל</li>
            <li>🦐 שרימפס סאגאנקי</li>
            <li>🐟 לשאול מה הדג הטרי של היום</li>
            <li>🥩 ואם רוצים בשר — לשאול מה מומלץ באותו ערב</li>
          </ul>
        </div>
      </section>

      <nav
        className="giannikos-actions"
        aria-label="Giannikos Tavern navigation"
      >
        <div className="giannikos-waze-row">
          <a
            className="giannikos-button giannikos-button-waze"
            href="https://waze.com/ul?ll=39.94193117963143,23.662730586507706&navigate=yes"
          >
            🚗 Waze
          </a>

          <a
            className="giannikos-google-maps-button"
            href="https://www.google.com/maps/dir/?api=1&destination=39.94193117963143,23.662730586507706"
          >
            📍 Google Maps
          </a>
        </div>

        <div className="giannikos-nav-row">
          <Link
            className="giannikos-button giannikos-button-back"
            to="/petralona"
          >
            ⬅️ Petralona
          </Link>

          <Link
            className="giannikos-button giannikos-button-next"
            to="/day7"
          >
            ➡️ יום 7
          </Link>
        </div>
      </nav>
    </main>
  );
}

export default Giannikos;
