import { Link } from "react-router-dom";

import sipSpotMain from "../../assets/images/SipSpot/SipSpot-main.webp";
import sipSpotBreakfast from "../../assets/images/SipSpot/SipSpot-breakfast.webp";
import sipSpotFood from "../../assets/images/SipSpot/SipSpot-food.webp";

function SipSpot() {
  const galleryImages = [sipSpotBreakfast, sipSpotFood];

  return (
    <main className="sipspot-page">
      <style>{`
        .sipspot-page {
          --sipspot-ink: #153247;
          --sipspot-deep: #0c2738;
          --sipspot-sky: #63c7ff;
          --sipspot-soft: #eef9ff;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--sipspot-ink);
          font-family: inherit;
        }

        .sipspot-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(13, 54, 77, 0.2);
        }

        .sipspot-hero::after {
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

        .sipspot-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .sipspot-hero:hover img {
          transform: scale(1.04);
        }

        .sipspot-hero-content {
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

        .sipspot-kicker {
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

        .sipspot-title {
          margin: 0;
          color: #fff;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .sipspot-award {
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

        .sipspot-gallery {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 26px 0;
        }

        .sipspot-gallery-item {
          overflow: hidden;
          height: 260px;
          border-radius: 22px;
          box-shadow: 0 12px 28px rgba(14, 51, 73, 0.12);
        }

        .sipspot-gallery-item img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 500ms ease;
        }

        .sipspot-gallery-item:hover img {
          transform: scale(1.06);
        }

        .sipspot-details {
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

        .sipspot-section-heading {
          margin: 0 0 16px;
          color: var(--sipspot-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .sipspot-menu-list,
        .sipspot-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .sipspot-menu-list li,
        .sipspot-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .sipspot-menu-list li {
          font-weight: 650;
        }

        .sipspot-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(58, 142, 183, 0.22);
          text-align: right;
        }

        .sipspot-info-list li {
          font-size: 0.94rem;
        }

        .sipspot-info-list span,
        .sipspot-info-list a {
          overflow-wrap: anywhere;
        }

        .sipspot-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 260px;
          max-width: calc(100% - 32px);
          margin-left: auto;
          margin-right: auto;
          min-height: 52px;
          padding: 0 20px;
          border-radius: 16px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          text-decoration: none;
          font-weight: 800;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
          transition: transform 220ms ease, box-shadow 220ms ease;
          white-space: nowrap;
        }

        .sipspot-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 30px rgba(79, 70, 229, 0.38);
        }

        .sipspot-link-secondary {
          margin-top: 12px;
          font-weight: 700;
          background: #fff;
          color: var(--sipspot-ink);
          border: 1px solid #dbe2ea;
          box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
        }

        .sipspot-link-secondary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(14, 57, 80, 0.16);
        }

        .sipspot-actions {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: calc(100% - 32px);
          max-width: 360px;
          gap: 12px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 28px;
        }

        .sipspot-button {
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

        .sipspot-button:hover {
          transform: translateY(-3px);
        }

        .sipspot-button-back {
          border: 1px solid #dbe2ea;
          background: #fff;
          color: var(--sipspot-ink);
          box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
        }

        .sipspot-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        @media (max-width: 760px) {
          .sipspot-page {
            padding-bottom: 32px;
          }

          .sipspot-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .sipspot-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .sipspot-award {
            white-space: normal;
          }

          .sipspot-gallery {
            grid-template-columns: 1fr;
            gap: 12px;
            margin: 18px 0;
          }

          .sipspot-gallery-item {
            height: 210px;
            border-radius: 17px;
          }

          .sipspot-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .sipspot-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(58, 142, 183, 0.22);
            border-left: 0;
          }

          .sipspot-actions {
            flex-direction: row;
          }

          .sipspot-button {
            flex: 1;
          }
        }
      `}</style>

      <section className="sipspot-hero">
        <img
          src={sipSpotMain}
          alt="The Sip Spot Coffee And More"
        />

        <div className="sipspot-hero-content">
          <div>
            <p className="sipspot-kicker">
              🍳 Pefkochori, Greece
            </p>

            <h1 className="sipspot-title">
              The Sip Spot
            </h1>
          </div>

          <p className="sipspot-award">
            🥇 BEST OF THE BEST
          </p>
        </div>
      </section>

      <section
        className="sipspot-gallery"
        aria-label="The Sip Spot food"
      >
        {galleryImages.map((image, index) => (
          <div
            className="sipspot-gallery-item"
            key={`${image}-${index}`}
          >
            <img
              src={image}
              alt={`The Sip Spot ${index + 1}`}
            />
          </div>
        ))}
      </section>

      <section className="sipspot-details">
        <div>
          <h2 className="sipspot-section-heading">
            🍳 ארוחת בוקר ובראנץ׳ מתוכננת
          </h2>

          <ul className="sipspot-menu-list" dir="rtl">
            <li>🍳 אומלט / מנות ביצים</li>
            <li>🥗 סלט רענן</li>
            <li>☕ קפה איכותי</li>
            <li>🧃 מיץ טבעי</li>
            <li>🥐 מנות בוקר ובראנץ׳ נוספות</li>
          </ul>
        </div>

        <div className="sipspot-info" dir="rtl">
          <h2 className="sipspot-section-heading">
            פרטים שימושיים
          </h2>

          <ul className="sipspot-info-list">
            <li>
              <span>
                📍 מיקום: פפקוחורי (Pefkochori), חלקידיקי, יוון
              </span>
            </li>

            <li>
              <span>
                ☕ סוג מקום: ארוחת בוקר / בראנץ׳ / קפה
              </span>
            </li>

            <li>
              <a
                className="sipspot-link"
                href="https://waze.com/ul/hsx0g3rdpz"
              >
                🚗 פתח ב־Waze
              </a>
            </li>

            <li>
              <a
                className="sipspot-link sipspot-link-secondary"
                href="https://www.google.com/maps/dir/?api=1&destination=The%20Sip%20Spot%20Coffee%20And%20More&destination_place_id=ChIJ3cIh_1olphQRNfe1Z39BW9g&travelmode=driving"
              >
                📍 פתח ב־Google Maps
              </a>
            </li>
          </ul>
        </div>
      </section>

      <nav
        className="sipspot-actions"
        aria-label="The Sip Spot navigation"
      >
        <Link
          className="sipspot-button sipspot-button-back"
          to="/day2"
        >
          ⬅️ חזרה ליום 2
        </Link>

        <Link
          className="sipspot-button sipspot-button-next"
          to="/day2"
        >
          ➡️ המשך לשופינג פפקוחורי
        </Link>
      </nav>
    </main>
  );
}

export default SipSpot;