import { Link } from "react-router-dom";

import heroImage from "../../assets/images/Archontiko/Archontiko-main.jpeg";
import meat1 from "../../assets/images/Archontiko/Archontiko-meat01.jpeg";
import meat2 from "../../assets/images/Archontiko/Archontiko-meat02.jpeg";

function ArchontikoDay5() {
  return (
    <main className="archontiko-page">
      <style>{`
        .archontiko-page {
          --archontiko-ink: #153247;
          --archontiko-deep: #0c2738;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--archontiko-ink);
          font-family: inherit;
        }

        .archontiko-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(13, 54, 77, 0.2);
        }

        .archontiko-hero::after {
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

        .archontiko-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .archontiko-hero:hover img {
          transform: scale(1.04);
        }

        .archontiko-hero-content {
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

        .archontiko-kicker {
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

        .archontiko-title {
          margin: 0;
          color: #fff;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .archontiko-subhead {
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

        .archontiko-subhead p {
          margin: 4px 0 0;
          font-size: 1.02rem;
          line-height: 1.55;
        }

        .archontiko-gallery {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 20px;
        }

        .archontiko-gallery img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(14, 57, 80, 0.12);
          transition: transform 220ms ease;
        }

        .archontiko-gallery img:hover {
          transform: translateY(-4px);
        }

        .archontiko-details {
          display: grid;
          grid-template-columns: 1fr;
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
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .archontiko-section-heading {
          margin: 0 0 16px;
          color: var(--archontiko-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .archontiko-menu-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .archontiko-menu-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .archontiko-note {
          margin-top: 22px;
          padding: 16px 18px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.52);
          font-size: 0.96rem;
          line-height: 1.55;
        }

        .archontiko-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          width: calc(100% - 32px);
          max-width: 360px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 28px;
        }

        .archontiko-button {
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
          transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease;
          white-space: nowrap;
        }

        .archontiko-button:hover {
          transform: translateY(-3px);
        }

        .archontiko-button-back {
          border-color: #c8e5f2;
          background: #fff;
          color: var(--archontiko-ink);
          box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
        }

        .archontiko-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        .archontiko-waze-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 28px;
        }

        .archontiko-waze {
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

        .archontiko-waze:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 30px rgba(79, 70, 229, 0.38);
        }

        @media (max-width: 760px) {
          .archontiko-page {
            padding-bottom: 32px;
          }

          .archontiko-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .archontiko-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .archontiko-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .archontiko-actions .archontiko-button {
            flex: 1 1 0;
            min-width: 0;
          }

          .archontiko-gallery {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .archontiko-gallery img {
            height: 220px;
          }
        }
      `}</style>

      <section className="archontiko-hero">
        <img
          src={heroImage}
          alt="Archontiko Agia Paraskevi"
        />

        <div className="archontiko-hero-content">
          <div>
            <p className="archontiko-kicker">
              🥩 Agia Paraskevi
            </p>

            <h1 className="archontiko-title">
              Archontiko Agia Paraskevi
            </h1>
          </div>
        </div>
      </section>

      <section className="archontiko-subhead" dir="rtl">
        <h2 className="archontiko-section-heading">
          ארוחת שישי מיוחדת – מסעדת בשרים
        </h2>
        <p>בשר איכותי.</p>
      </section>

      <section className="archontiko-gallery" aria-label="Archontiko meat">
        <img src={meat1} alt="Archontiko meat 1" />
        <img src={meat2} alt="Archontiko meat 2" />
      </section>

      <section className="archontiko-details" dir="ltr">
        <h2 className="archontiko-section-heading">
          What to ask the waiter
        </h2>

        <p dir="rtl">
          🥩 ארוחת בשרים ל־4 אנשים
        </p>

        <p dir="rtl">
          במקום לבחור מראש נתח מסוים, מומלץ לשאול את המלצר אילו נתחים הם הטובים והמומלצים ביותר באותו ערב, ומה מתאים לחלוקה בין 4 אנשים.
        </p>

        <ul className="archontiko-menu-list">
          <li>Which cut of meat would you recommend today?</li>
          <li>Which cut is best for four people to share?</li>
          <li>Do you have Ribeye or Tomahawk that you especially recommend today?</li>
          <li>Which local wine would you recommend with the meat?</li>
        </ul>
      </section>

      <div className="archontiko-waze-wrapper">
        <a
          className="archontiko-waze"
          href="https://waze.com/ul?ll=39.953829298762,23.606505557671806&navigate=yes"
        >
          🚗 Waze ל-Archontiko Agia Paraskevi
        </a>
      </div>

      <nav
        className="archontiko-actions"
        aria-label="Day 5 navigation"
      >
        <Link
          className="archontiko-button archontiko-button-back"
          to="/day5"
        >
          ⬅️ חזרה ליום 5
        </Link>

        <Link
          className="archontiko-button archontiko-button-next"
          to="/day6"
        >
          ➡️ המשך ליום 6
        </Link>
      </nav>
    </main>
  );
}

export default ArchontikoDay5;
