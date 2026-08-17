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
          justify-content: space-between;
          gap: 14px;
          margin-top: 28px;
        }

        .dreamcoffee-button {
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

          .dreamcoffee-actions {
            flex-direction: column-reverse;
          }

          .dreamcoffee-button {
            width: 100%;
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
          to="/day5"
        >
          ➡️ חזרה ליום 5
        </Link>
      </nav>
    </main>
  );
}

export default DreamCoffee;
