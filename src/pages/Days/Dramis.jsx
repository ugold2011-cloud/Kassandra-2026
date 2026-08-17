import { Link } from "react-router-dom";

import dramisMain from "../../assets/images/Dramis/Dramis-main.jpeg";
import dramisBougatsa from "../../assets/images/Dramis/Dramis-bougatsa.jpeg";
import dramisFood from "../../assets/images/Dramis/Dramis-food.jpeg";

function Dramis() {
  const galleryImages = [dramisBougatsa, dramisFood];

  return (
    <main className="dramis-page">
      <style>{`
        .dramis-page {
          --dramis-ink: #153247;
          --dramis-deep: #0c2738;
          --dramis-sky: #63c7ff;
          --dramis-soft: #eef9ff;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--dramis-ink);
          font-family: inherit;
        }

        .dramis-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(13, 54, 77, 0.2);
        }

        .dramis-hero::after {
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

        .dramis-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .dramis-hero:hover img {
          transform: scale(1.04);
        }

        .dramis-hero-content {
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

        .dramis-kicker {
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

        .dramis-title {
          margin: 0;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .dramis-award {
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

        .dramis-gallery {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 26px 0;
        }

        .dramis-gallery-item {
          overflow: hidden;
          height: 260px;
          border-radius: 22px;
          box-shadow: 0 12px 28px rgba(14, 51, 73, 0.12);
        }

        .dramis-gallery-item img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 500ms ease;
        }

        .dramis-gallery-item:hover img {
          transform: scale(1.06);
        }

        .dramis-details {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(250px, 0.8fr);
          gap: 20px;
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

        .dramis-section-heading {
          margin: 0 0 16px;
          color: var(--dramis-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .dramis-menu-list,
        .dramis-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .dramis-menu-list li,
        .dramis-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .dramis-menu-list li {
          font-weight: 650;
        }

        .dramis-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(58, 142, 183, 0.22);
          text-align: right;
        }

        .dramis-info-list li {
          font-size: 0.94rem;
        }

        .dramis-info-list span,
        .dramis-info-list a {
          overflow-wrap: anywhere;
        }

        .dramis-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0 16px;
          border-radius: 999px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          text-decoration: none;
          font-weight: 800;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .dramis-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 30px rgba(79, 70, 229, 0.38);
        }

        .dramis-actions {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          margin-top: 28px;
        }

        .dramis-button {
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

        .dramis-button:hover {
          transform: translateY(-3px);
        }

        .dramis-button-back {
          border-color: #c8e5f2;
          background: #fff;
          color: var(--dramis-ink);
          box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
        }

        .dramis-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        @media (max-width: 760px) {
          .dramis-page {
            padding-bottom: 32px;
          }

          .dramis-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .dramis-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .dramis-award {
            white-space: normal;
          }

          .dramis-gallery {
            grid-template-columns: 1fr;
            gap: 12px;
            margin: 18px 0;
          }

          .dramis-gallery-item {
            height: 210px;
            border-radius: 17px;
          }

          .dramis-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .dramis-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(58, 142, 183, 0.22);
            border-left: 0;
          }

          .dramis-actions {
            flex-direction: column-reverse;
          }

          .dramis-button {
            width: 100%;
          }
        }
      `}</style>

      <section className="dramis-hero">
        <img
          src={dramisMain}
          alt="Dramis Bakery Cafe Patisserie"
        />

        <div className="dramis-hero-content">
          <div>
            <p className="dramis-kicker">
              🥐 Hanioti, Greece
            </p>

            <h1 className="dramis-title">
              Dramis Bakery — Cafe Patisserie
            </h1>
          </div>

          <p className="dramis-award">
            🥇 BREAKFAST ONLY
          </p>
        </div>
      </section>

      <section
        className="dramis-gallery"
        aria-label="Dramis food"
      >
        {galleryImages.map((image, index) => (
          <div
            className="dramis-gallery-item"
            key={`${image}-${index}`}
          >
            <img
              src={image}
              alt={`Dramis ${index + 1}`}
            />
          </div>
        ))}
      </section>

      <section className="dramis-details">
        <div>
          <h2 className="dramis-section-heading">
            🥐 ארוחת בוקר אותנטית יוונית
          </h2>

          <ul className="dramis-menu-list" dir="rtl">
            <li>🥐 בואג׳אטסה טריה ועמוקה</li>
            <li>☕ קפה יווני איכותי</li>
            <li>🥗 מנות בוקר נוספות</li>
            <li>🧃 מיצים טבעיים</li>
            <li>🍽️ חוויה קלילה ליום 4</li>
          </ul>
        </div>

        <div className="dramis-info" dir="rtl">
          <h2 className="dramis-section-heading">
            פרטים שימושיים
          </h2>

          <ul className="dramis-info-list">
            <li>
              <span>
                📍 מיקום: Hanioti, חלקידיקי, יוון
              </span>
            </li>

            <li>
              <span>
                🥐 סוג מקום: מאפיה / בית קפה / פטיסרי
              </span>
            </li>

            <li>
              <span>
                🕗 זמן מומלץ: ארוחת בוקר
              </span>
            </li>
          </ul>
        </div>
      </section>

      <nav
        className="dramis-actions"
        aria-label="Dramis navigation"
      >
        <Link
          className="dramis-button dramis-button-back"
          to="/day4"
        >
          חזרה ליום 4
        </Link>

        <Link
          className="dramis-button dramis-button-next"
          to="/encore-beach-bar"
        >
          המשך ל-Encore Beach Bar
        </Link>
      </nav>
    </main>
  );
}

export default Dramis;
