import { Link } from "react-router-dom";

import apagioMain from "../../assets/images/Apagio/Apagio-main.jpeg";
import apagioFood01 from "../../assets/images/Apagio/Apagio-food01.jpeg";
import apagioFood02 from "../../assets/images/Apagio/Apagio-food02.jpg";

function Apagio() {
  const galleryImages = [apagioFood01, apagioFood02];

  return (
    <main className="apagio-page">
      <style>{`
        .apagio-page {
          --apagio-ink: #153247;
          --apagio-deep: #0c2738;
          --apagio-sky: #63c7ff;
          --apagio-soft: #eef9ff;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--apagio-ink);
          font-family: inherit;
        }

        .apagio-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(13, 54, 77, 0.2);
        }

        .apagio-hero::after {
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

        .apagio-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .apagio-hero:hover img {
          transform: scale(1.04);
        }

        .apagio-hero-content {
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

        .apagio-kicker {
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

        .apagio-title {
          margin: 0;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .apagio-award {
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

        .apagio-gallery {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 26px 0;
        }

        .apagio-gallery-item {
          overflow: hidden;
          height: 260px;
          border-radius: 22px;
          box-shadow: 0 12px 28px rgba(14, 51, 73, 0.12);
        }

        .apagio-gallery-item img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 500ms ease;
        }

        .apagio-gallery-item:hover img {
          transform: scale(1.06);
        }

        .apagio-details {
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

        .apagio-section-heading {
          margin: 0 0 16px;
          color: var(--apagio-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .apagio-menu-list,
        .apagio-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .apagio-menu-list li,
        .apagio-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .apagio-menu-list li {
          font-weight: 650;
        }

        .apagio-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(58, 142, 183, 0.22);
          text-align: right;
        }

        .apagio-info-list li {
          font-size: 0.94rem;
        }

        .apagio-info-list span,
        .apagio-info-list a {
          overflow-wrap: anywhere;
        }

        .apagio-link {
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

        .apagio-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 30px rgba(79, 70, 229, 0.38);
        }

        .apagio-actions {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          margin-top: 28px;
        }

        .apagio-button {
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

        .apagio-button:hover {
          transform: translateY(-3px);
        }

        .apagio-button-back {
          border-color: #c8e5f2;
          background: #fff;
          color: var(--apagio-ink);
          box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
        }

        .apagio-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        @media (max-width: 760px) {
          .apagio-page {
            padding-bottom: 32px;
          }

          .apagio-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .apagio-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .apagio-award {
            white-space: normal;
          }

          .apagio-gallery {
            grid-template-columns: 1fr;
            gap: 12px;
            margin: 18px 0;
          }

          .apagio-gallery-item {
            height: 210px;
            border-radius: 17px;
          }

          .apagio-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .apagio-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(58, 142, 183, 0.22);
            border-left: 0;
          }

          .apagio-actions {
            flex-direction: column-reverse;
          }

          .apagio-button {
            width: 100%;
          }
        }
      `}</style>

      <section className="apagio-hero">
        <img
          src={apagioMain}
          alt="Apagio Restaurant"
        />

        <div className="apagio-hero-content">
          <div>
            <p className="apagio-kicker">
              🍽️ Nea Skioni, Greece
            </p>

            <h1 className="apagio-title">
              Apagio
            </h1>
          </div>

          <p className="apagio-award">
            🍽️ DINNER — DAY 4
          </p>
        </div>
      </section>

      <section
        className="apagio-gallery"
        aria-label="Apagio food"
      >
        {galleryImages.map((image, index) => (
          <div
            className="apagio-gallery-item"
            key={`${image}-${index}`}
          >
            <img
              src={image}
              alt={`Apagio ${index + 1}`}
            />
          </div>
        ))}
      </section>

      <section className="apagio-details">
        <div>
          <h2 className="apagio-section-heading">
            🍽️ ארוחת ערב יוונית-ים תיכונית
          </h2>

            <ul className="apagio-menu-list" dir="rtl">
              <li>🍤 מנות ים תיכוניות</li>
              <li>🥩 בשרים איכותיים</li>
              <li>🥗 גבינת יוונית טריה</li>
              <li>🍷 יין מקומי</li>
              <li>🌿 חוויה סופהשבועית מושלמת
            </li>
            </ul>
        </div>

        <div className="apagio-info" dir="rtl">
          <h2 className="apagio-section-heading">
            פרטים שימושיים
          </h2>

          <ul className="apagio-info-list">
            <li>
              <span>
                📍 מיקום: Nea Skioni, חלקידיקי, יוון
              </span>
            </li>

            <li>
              <span>
                🍽️ סוג מקום: מסעדת ים תיכונית / יוונית
              </span>
            </li>

            <li>
              <span>
                🕖 זמן מומלץ: ערב — יום 4
              </span>
            </li>
          </ul>
        </div>
      </section>

      <nav
        className="apagio-actions"
        aria-label="Apagio navigation"
      >
        <Link
          className="apagio-button apagio-button-back"
          to="/encore-beach-bar"
        >
          חזרה ל-Encore Beach Bar
        </Link>

        <Link
          className="apagio-button apagio-button-next"
          to="/day4"
        >
          חזרה ליום 4
        </Link>
      </nav>
    </main>
  );
}

export default Apagio;
