import { Link } from "react-router-dom";

import heroImage from "../../assets/images/AfitosOldVillage/AfitosOldVillage-main.jpeg";
import street1 from "../../assets/images/AfitosOldVillage/AfitosOldVillage-street01.jpeg";
import view1 from "../../assets/images/AfitosOldVillage/AfitosOldVillage-view01.jpeg";

function AfitosOldVillage() {
  return (
    <main className="afitosoldvillage-page">
      <style>{`
        .afitosoldvillage-page {
          --afitosoldvillage-ink: #153247;
          --afitosoldvillage-deep: #0c2738;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--afitosoldvillage-ink);
          font-family: inherit;
        }

        .afitosoldvillage-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(13, 54, 77, 0.2);
        }

        .afitosoldvillage-hero::after {
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

        .afitosoldvillage-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .afitosoldvillage-hero:hover img {
          transform: scale(1.04);
        }

        .afitosoldvillage-hero-content {
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

        .afitosoldvillage-kicker {
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

        .afitosoldvillage-title {
          margin: 0;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .afitosoldvillage-award {
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

        .afitosoldvillage-gallery {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 20px;
        }

        .afitosoldvillage-gallery img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(14, 57, 80, 0.12);
          transition: transform 220ms ease;
        }

        .afitosoldvillage-gallery img:hover {
          transform: translateY(-4px);
        }

        .afitosoldvillage-details {
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

        .afitosoldvillage-section-heading {
          margin: 0 0 16px;
          color: var(--afitosoldvillage-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .afitosoldvillage-menu-list,
        .afitosoldvillage-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .afitosoldvillage-menu-list li,
        .afitosoldvillage-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .afitosoldvillage-menu-list li {
          font-weight: 650;
        }

        .afitosoldvillage-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(58, 142, 183, 0.22);
          text-align: right;
        }

        .afitosoldvillage-info-list li {
          font-size: 0.94rem;
        }

        .afitosoldvillage-actions {
          display: flex;
          justify-content: center;
          max-width: 360px;
          margin: 28px auto 0;
          gap: 12px;
        }

        .afitosoldvillage-button {
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

        .afitosoldvillage-button:hover {
          transform: translateY(-3px);
        }

        .afitosoldvillage-waze-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 28px;
        }

        .afitosoldvillage-waze-button {
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
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        .afitosoldvillage-waze-button:hover {
          transform: translateY(-3px);
        }

        .afitosoldvillage-button-back {
          border-color: #c8e5f2;
          background: #fff;
          color: var(--afitosoldvillage-ink);
          box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
        }

        .afitosoldvillage-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        @media (max-width: 760px) {
          .afitosoldvillage-page {
            padding-bottom: 32px;
          }

          .afitosoldvillage-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .afitosoldvillage-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .afitosoldvillage-award {
            white-space: normal;
          }

          .afitosoldvillage-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .afitosoldvillage-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(58, 142, 183, 0.22);
            border-left: 0;
          }

          .afitosoldvillage-actions {
            flex-wrap: wrap;
          }

          .afitosoldvillage-button {
            width: auto;
          }

          .afitosoldvillage-gallery {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .afitosoldvillage-gallery img {
            height: 220px;
          }
        }
      `}</style>

      <section className="afitosoldvillage-hero">
        <img
          src={heroImage}
          alt="Afitos Old Village"
        />

        <div className="afitosoldvillage-hero-content">
          <div>
            <p className="afitosoldvillage-kicker">
              🏺 Afitos, Greece
            </p>

            <h1 className="afitosoldvillage-title">
              Afitos Old Village
            </h1>
          </div>

          <p className="afitosoldvillage-award">
            🏺 TRADITIONAL VILLAGE
          </p>
        </div>
      </section>

      <section className="afitosoldvillage-gallery" aria-label="Afitos Old Village">
        <img src={street1} alt="Afitos Old Village street" />
        <img src={view1} alt="Afitos Old Village viewpoint" />
      </section>

      <section className="afitosoldvillage-details">
        <div>
          <h2 className="afitosoldvillage-section-heading">
            🏺 ביקור בכפר העתיק
          </h2>

          <ul className="afitosoldvillage-menu-list" dir="rtl">
            <li>🏺 רחובות אבן מסורתיים</li>
            <li>🛍️ חנויות מקומיות</li>
            <li>בתי קפה</li>
            <li>🖼️ נקודת תצפית</li>
            <li>🌿 אווירה כפרית רגועה</li>
          </ul>
        </div>

        <div className="afitosoldvillage-info" dir="rtl">
          <h2 className="afitosoldvillage-section-heading">
            פרטים שימושיים
          </h2>

          <ul className="afitosoldvillage-info-list">
            <li>
              <span>
                📍 מיקום: Afitos, Kassandra, חלקידיקי, יוון
              </span>
            </li>

            <li>
              <span>
                🕗 זמן: ביקור קצר ונוח
              </span>
            </li>

            <li>
              <span>
                🧘 אווירה: רוגע
              </span>
            </li>
          </ul>
        </div>
      </section>

      <div className="afitosoldvillage-waze-wrapper">
        <a
          className="afitosoldvillage-waze-button"
          href="waze://?ll=40.09968465410918,23.432916738073143&navigate=yes"
        >
          🚗 Waze לחניה – Afitos Old Village
        </a>
      </div>

      <nav
        className="afitosoldvillage-actions"
        aria-label="Afitos Old Village navigation"
      >
        <Link
          className="afitosoldvillage-button afitosoldvillage-button-back"
          to="/day3"
        >
          ⬅️ חזרה ליום 3
        </Link>

        <Link
          className="afitosoldvillage-button afitosoldvillage-button-next"
          to="/afytaion-gaia"
        >
          ➡️ המשך
          <br />
          Afytaion Gaia
        </Link>
      </nav>
    </main>
  );
}

export default AfitosOldVillage;
