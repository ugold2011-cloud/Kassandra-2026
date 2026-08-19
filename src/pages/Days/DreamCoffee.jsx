import { Link } from "react-router-dom";
import heroImage from "../../assets/images/Dream Coffee/Dream Coffee-main.jpg";

function DreamCoffee() {
  return (
    <main className="dreamcoffee-page">
      <style>{`
        .dreamcoffee-page {
          --dreamcoffee-ink: #3e2723;
          --dreamcoffee-deep: #2b1a17;
          --dreamcoffee-sky: #d7a86e;
          --dreamcoffee-soft: #fdf6ed;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--dreamcoffee-ink);
          font-family: inherit;
        }

        .dreamcoffee-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(43, 26, 23, 0.2);
        }

        .dreamcoffee-hero::after {
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

        .dreamcoffee-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .dreamcoffee-hero:hover img {
          transform: scale(1.04);
        }

        .dreamcoffee-hero-content {
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

        .dreamcoffee-kicker {
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

        .dreamcoffee-title {
          margin: 0;
          color: #fff;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .dreamcoffee-details {
          display: grid;
          grid-template-columns: 1fr;
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

        .dreamcoffee-section-heading {
          margin: 0 0 16px;
          color: var(--dreamcoffee-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .dreamcoffee-main-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .dreamcoffee-main-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          font-weight: 650;
          line-height: 1.55;
        }

        .dreamcoffee-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          width: calc(100% - 32px);
          max-width: 360px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 28px;
        }

        .dreamcoffee-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          min-width: 0;
          width: auto;
          min-height: 52px;
          padding: 0 10px;
          border: 1px solid transparent;
          border-radius: 16px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 800;
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            background 220ms ease;
          white-space: nowrap;
        }

        .dreamcoffee-button:hover {
          transform: translateY(-3px);
        }

        .dreamcoffee-button-back {
          border-color: #f5e6d3;
          background: #fff;
          color: var(--dreamcoffee-ink);
          box-shadow: 0 8px 18px rgba(43, 26, 23, 0.08);
        }

        .dreamcoffee-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        .dreamcoffee-waze-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 28px;
        }

        .dreamcoffee-waze {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 260px;
          max-width: calc(100% - 32px);
          min-height: 52px;
          padding: 0 20px;
          margin-left: auto;
          margin-right: auto;
          border-radius: 16px;
          border: 1px solid transparent;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          text-decoration: none;
          font-weight: 800;
          font-size: 0.9rem;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
          transition: transform 220ms ease, box-shadow 220ms ease;
          white-space: nowrap;
        }

        .dreamcoffee-waze:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 30px rgba(79, 70, 229, 0.38);
        }

        @media (max-width: 760px) {
          .dreamcoffee-page {
            padding-bottom: 32px;
          }

          .dreamcoffee-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .dreamcoffee-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .dreamcoffee-actions .dreamcoffee-button {
            flex: 1 1 0;
            min-width: 0;
          }
        }
      `}</style>

      <section className="dreamcoffee-hero">
        <img
          src={heroImage}
          alt="Dream Coffee"
        />

        <div className="dreamcoffee-hero-content">
          <div>
            <p className="dreamcoffee-kicker">
              HANIOTI
            </p>

            <h1 className="dreamcoffee-title">
              Dream Coffee
            </h1>
          </div>
        </div>
      </section>

      <section className="dreamcoffee-details">
        <div>
          <h2 className="dreamcoffee-section-heading">
            ארוחת בוקר רגועה בחניוטי.
          </h2>

          <h3 className="dreamcoffee-section-heading" style={{ marginTop: "20px" }}>
            מה כדאי לקחת
          </h3>

          <ul className="dreamcoffee-main-list" dir="rtl">
            <li>☕ קפה לבחירה</li>
            <li>🥐 מאפה טרי</li>
            <li>🥪 כריך לבחירה</li>
          </ul>
        </div>
      </section>

      <div className="dreamcoffee-waze-wrapper">
        <a
          className="dreamcoffee-waze"
          href="waze://?ll=39.999094487126385,23.577449742328195&navigate=yes"
        >
          🚗 Waze ל-Dream Coffee
        </a>
      </div>

      <nav
        className="dreamcoffee-actions"
        aria-label="Dream Coffee navigation"
      >
        <Link
          className="dreamcoffee-button dreamcoffee-button-back"
          to="/day5"
        >
          ⬅️ חזרה ליום 5
        </Link>

        <Link
          className="dreamcoffee-button dreamcoffee-button-next"
          to="/archontiko-day5"
        >
          ➡️ Archontiko
        </Link>
      </nav>
    </main>
  );
}

export default DreamCoffee;
