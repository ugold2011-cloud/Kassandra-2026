import { Link } from "react-router-dom";
import heroImage from "../../assets/images/LemonisBakery/LemonisBakery-,main.jpeg";

function LemonisBakery() {
  return (
    <main className="lemonis-page">
      <style>{`
        .lemonis-page {
          --lemonis-ink: #3e2723;
          --lemonis-deep: #2b1a17;
          --lemonis-sky: #d7a86e;
          --lemonis-soft: #fdf6ed;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--lemonis-ink);
          font-family: inherit;
        }

        .lemonis-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(43, 26, 23, 0.2);
        }

        .lemonis-hero::after {
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

        .lemonis-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .lemonis-hero:hover img {
          transform: scale(1.04);
        }

        .lemonis-hero-content {
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

        .lemonis-kicker {
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

        .lemonis-title {
          margin: 0;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .lemonis-details {
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

        .lemonis-section-heading {
          margin: 0 0 16px;
          color: var(--lemonis-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .lemonis-main-list,
        .lemonis-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .lemonis-main-list li,
        .lemonis-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .lemonis-main-list li {
          font-weight: 650;
        }

        .lemonis-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(215, 168, 110, 0.22);
          text-align: right;
        }

        .lemonis-info-list li {
          font-size: 0.94rem;
        }

        .lemonis-important {
          font-weight: 800;
          color: #9a3412;
        }

        .lemonis-ltr {
          direction: ltr;
          unicode-bidi: bidi-override;
          display: inline-block;
        }

        .lemonis-actions {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          margin-top: 28px;
        }

        .lemonis-button {
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

        .lemonis-button:hover {
          transform: translateY(-3px);
        }

        .lemonis-button-back {
          border-color: #f5e6d3;
          background: #fff;
          color: var(--lemonis-ink);
          box-shadow: 0 8px 18px rgba(43, 26, 23, 0.08);
        }

        .lemonis-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        @media (max-width: 760px) {
          .lemonis-page {
            padding-bottom: 32px;
          }

          .lemonis-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .lemonis-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .lemonis-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .lemonis-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(215, 168, 110, 0.22);
            border-left: 0;
          }

          .lemonis-actions {
            flex-direction: column-reverse;
          }

          .lemonis-button {
            width: 100%;
          }
        }
      `}</style>

      <section className="lemonis-hero">
        <img
          src={heroImage}
          alt="Lemonis Bakery"
        />

        <div className="lemonis-hero-content">
          <div>
            <p className="lemonis-kicker">
              HANIOTI
            </p>

            <h1 className="lemonis-title">
              Lemonis Bakery
            </h1>
          </div>
        </div>
      </section>

      <section className="lemonis-details">
        <div>
          <h2 className="lemonis-section-heading">
            ארוחת בוקר רגועה בחניוטי.
          </h2>

          <ul className="lemonis-main-list" dir="rtl">
            <li className="lemonis-important">
              🥐 בוגאצה או קרואסון
            </li>

            <li>
              🥧 מאפה תרד או גבינה
            </li>

            <li>
              ☕ קפה לבחירה
            </li>
          </ul>
        </div>
      </section>

      <nav
        className="lemonis-actions"
        aria-label="Lemonis Bakery navigation"
      >
        <Link
          className="lemonis-button lemonis-button-back"
          to="/day7"
        >
          ⬅️ חזרה ליום 7
        </Link>

        <Link
          className="lemonis-button lemonis-button-next"
          to="/garrys-gyros"
        >
          ➡️ התחנה הבאה — Garry's The King of Gyros
        </Link>
      </nav>
    </main>
  );
}

export default LemonisBakery;
