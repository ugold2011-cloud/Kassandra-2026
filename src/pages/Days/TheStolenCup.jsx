import { Link } from "react-router-dom";

import heroImage from "../../assets/images/TheStolenCup/TheStolenCup-main.jpeg";
import food1 from "../../assets/images/TheStolenCup/TheStolenCup-food01.jpg";
import food2 from "../../assets/images/TheStolenCup/TheStolenCup-food02.jpg";
import food3 from "../../assets/images/TheStolenCup/TheStolenCup-food03.jpeg";

function TheStolenCup() {
  return (
    <main className="thestolencup-page">
      <style>{`
        .thestolencup-page {
          --thestolencup-ink: #153247;
          --thestolencup-deep: #0c2738;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--thestolencup-ink);
          font-family: inherit;
        }

        .thestolencup-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(13, 54, 77, 0.2);
        }

        .thestolencup-hero::after {
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

        .thestolencup-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .thestolencup-hero:hover img {
          transform: scale(1.04);
        }

        .thestolencup-hero-content {
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

        .thestolencup-kicker {
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

        .thestolencup-title {
          margin: 0;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .thestolencup-award {
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

        .thestolencup-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 20px;
        }

        .thestolencup-gallery img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(14, 57, 80, 0.12);
          transition: transform 220ms ease;
        }

        .thestolencup-gallery img:hover {
          transform: translateY(-4px);
        }

        .thestolencup-details {
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

        .thestolencup-section-heading {
          margin: 0 0 16px;
          color: var(--thestolencup-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .thestolencup-menu-list,
        .thestolencup-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .thestolencup-menu-list li,
        .thestolencup-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .thestolencup-menu-list li {
          font-weight: 650;
        }

        .thestolencup-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(58, 142, 183, 0.22);
          text-align: right;
        }

        .thestolencup-info-list li {
          font-size: 0.94rem;
        }

        .thestolencup-time {
          direction: ltr;
          unicode-bidi: isolate;
          display: inline-block;
        }

        .thestolencup-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 28px;
          width: calc(100% - 32px);
          max-width: 360px;
          margin-left: auto;
          margin-right: auto;
        }

        .thestolencup-button {
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

        .thestolencup-button:hover {
          transform: translateY(-3px);
        }

        .thestolencup-button-back {
          border-color: #c8e5f2;
          background: #fff;
          color: var(--thestolencup-ink);
          box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
        }

        .thestolencup-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        @media (max-width: 760px) {
          .thestolencup-page {
            padding-bottom: 32px;
          }

          .thestolencup-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .thestolencup-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .thestolencup-award {
            white-space: normal;
          }

          .thestolencup-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .thestolencup-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(58, 142, 183, 0.22);
            border-left: 0;
          }

          .thestolencup-actions .thestolencup-button {
            width: auto;
            flex: 1 1 0;
            min-width: 0;
          }

          .thestolencup-gallery {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .thestolencup-gallery img {
            height: 220px;
          }
        }
      `}</style>

      <section className="thestolencup-hero">
        <img
          src={heroImage}
          alt="The Stolen Cup"
        />

        <div className="thestolencup-hero-content">
          <div>
            <p className="thestolencup-kicker">
              ☕ Kallithea, Greece
            </p>

            <h1 className="thestolencup-title">
              The Stolen Cup
            </h1>
          </div>

          <p className="thestolencup-award">
            ☕ BREAKFAST / BRUNCH
          </p>
        </div>
      </section>

      <section className="thestolencup-gallery" aria-label="The Stolen Cup food">
        <img src={food1} alt="The Stolen Cup food 1" />
        <img src={food2} alt="The Stolen Cup food 2" />
        <img src={food3} alt="The Stolen Cup food 3" />
      </section>

      <section className="thestolencup-details">
        <div>
          <h2 className="thestolencup-section-heading">
            ☕ ארוחת בוקר / בראנץ׳
          </h2>

          <ul className="thestolencup-menu-list" dir="rtl">
            <li>☕ קפה איכותי</li>
            <li>🥐 מנות בוקר / בראנץ׳</li>
            <li>🍳 מנות ביצים</li>
            <li>🥗 סלט רענן</li>
            <li>🧃 מיץ טבעי</li>
          </ul>
        </div>

        <div className="thestolencup-info" dir="rtl">
          <h2 className="thestolencup-section-heading">
            פרטים שימושיים
          </h2>

          <ul className="thestolencup-info-list">
            <li>
              <span>
                📍 מיקום: Kallithea, Kassandra, חלקידיקי, יוון
              </span>
            </li>

            <li>
              <span>
                🏠 כתובת: Epar.Od. Paliouriou-Afitou 17, Kallithea 63077, Greece
              </span>
            </li>

            <li>
              <span>
                🕘 זמן מומלץ: <span dir="ltr">08:00–08:30</span>
              </span>
            </li>

          </ul>
        </div>
      </section>

      <div style={{ textAlign: 'center', marginBottom: 14 }}>
        <a
          className="thestolencup-button thestolencup-button-next"
          href="waze://?ll=40.07950599775993,23.444984800000004&navigate=yes"
        >
          🚗 Waze ל-The Stolen Cup
        </a>
      </div>

      <nav
        className="thestolencup-actions"
        aria-label="The Stolen Cup navigation"
      >
        <Link
          className="thestolencup-button thestolencup-button-back"
          to="/day3"
        >
          ⬅️ חזרה ליום 3
        </Link>

        <Link
          className="thestolencup-button thestolencup-button-next"
          to="/terra-azapiko"
        >
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1.2 }}>
            <span>המשך</span>
            <span>Terra Azapiko</span>
          </span>
        </Link>
      </nav>
    </main>
  );
}

export default TheStolenCup;
