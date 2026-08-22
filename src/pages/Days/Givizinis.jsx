import { Link } from "react-router-dom";
import heroImage from "../../assets/images/Givizinis/Givizinis-main.webp";
import food1 from "../../assets/images/Givizinis/Givizinis-food01.jpeg";
import food2 from "../../assets/images/Givizinis/Givizinis-food02.jpg";

function Givizinis() {
  return (
    <main className="givizinis-page">
      <style>{`
        .givizinis-page {
          --givizinis-ink: #153247;
          --givizinis-deep: #0c2738;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--givizinis-ink);
          font-family: inherit;
        }

        .givizinis-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(13, 54, 77, 0.2);
        }

        .givizinis-hero::after {
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

        .givizinis-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .givizinis-hero:hover img {
          transform: scale(1.04);
        }

        .givizinis-hero-content {
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

        .givizinis-kicker {
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

        .givizinis-title {
          margin: 0;
          color: #fff;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .givizinis-award {
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

        .givizinis-details {
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

        .givizinis-section-heading {
          margin: 0 0 16px;
          color: var(--givizinis-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .givizinis-menu-list,
        .givizinis-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .givizinis-menu-list li,
        .givizinis-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .givizinis-menu-list li {
          font-weight: 650;
        }

        .givizinis-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(58, 142, 183, 0.22);
          text-align: right;
        }

        .givizinis-info-list li {
          font-size: 0.94rem;
        }

        .givizinis-important {
          font-weight: 800;
          color: #9a3412;
        }

        .givizinis-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 28px;
          width: calc(100% - 32px);
          max-width: 360px;
          margin-left: auto;
          margin-right: auto;
        }

        .givizinis-button {
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

        .givizinis-button:hover {
          transform: translateY(-3px);
        }

        .givizinis-button-back {
          border-color: #c8e5f2;
          background: #fff;
          color: var(--givizinis-ink);
          box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
        }

        .givizinis-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        @media (max-width: 760px) {
          .givizinis-page {
            padding-bottom: 32px;
          }

          .givizinis-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .givizinis-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .givizinis-award {
            white-space: normal;
          }

          .givizinis-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .givizinis-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(58, 142, 183, 0.22);
            border-left: 0;
          }

          .givizinis-actions .givizinis-button {
            width: auto;
            flex: 1 1 0;
            min-width: 0;
          }

          .givizinis-gallery {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .givizinis-gallery img {
            height: 220px;
          }
        }

        .givizinis-gallery {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 20px;
        }

        .givizinis-gallery img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(14, 57, 80, 0.12);
          transition: transform 220ms ease;
        }

        .givizinis-gallery img:hover {
          transform: translateY(-4px);
        }
      `}</style>

      <section className="givizinis-hero">
        <img
          src={heroImage}
          alt="Givizinis Pastry Cafe"
        />

        <div className="givizinis-hero-content">
          <div>
            <p className="givizinis-kicker">
              🍰 Kassandreia, Greece
            </p>

            <h1 className="givizinis-title">
              Givizinis
            </h1>
          </div>

          <p className="givizinis-award">
            🍰 DESSERT STOP
          </p>
        </div>
      </section>

      <section className="givizinis-gallery" aria-label="Givizinis Pastry Cafe gallery">
        <img src={food1} alt="Givizinis food 1" />
        <img src={food2} alt="Givizinis food 2" />
      </section>

      <section className="givizinis-details">
        <div>
          <h2 className="givizinis-section-heading">
            🍰 קינוח לסיום יום 2
          </h2>

          <ul className="givizinis-menu-list" dir="rtl">
            <li>🍰 עוגות ומאפים</li>
            <li>🇬🇷 קינוחים בסגנון יווני</li>
            <li>🍰 Cheesecake</li>
          </ul>
        </div>

        <div className="givizinis-info" dir="rtl">
          <h2 className="givizinis-section-heading">
            פרטים שימושיים
          </h2>

          <ul className="givizinis-info-list">
            <li>
              <span>
                📍 מיקום: מרכז Kassandreia
              </span>
            </li>

            <li>
              <span>
                🚗 מרחק קצר מ־Metoxi — מתאים לעצירה אחרי ארוחת הערב
              </span>
            </li>

          </ul>
        </div>
      </section>

      <div style={{ textAlign: 'center', marginBottom: 14 }}>
        <a
          className="givizinis-button givizinis-button-next"
          href="https://waze.com/ul?ll=40.0516055203542,23.4131420711641&navigate=yes"
        >
          🚗 Waze ל-Givizinis
        </a>
      </div>

      <nav
        className="givizinis-actions"
        aria-label="Givizinis Pastry Cafe navigation"
      >
        <Link
          className="givizinis-button givizinis-button-back"
          to="/day2"
        >
          ⬅️ חזרה ליום 2
        </Link>

        <Link
          className="givizinis-button givizinis-button-next"
          to="/day3"
        >
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1.2 }}>
            <span>המשך</span>
            <span>ליום 3</span>
          </span>
        </Link>
      </nav>
    </main>
  );
}

export default Givizinis;