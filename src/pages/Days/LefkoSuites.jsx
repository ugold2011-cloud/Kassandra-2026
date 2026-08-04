import { Link } from "react-router-dom";

import lefkoMain from "../../assets/images/lefko/lefko-evening.jpg";
import lefkoRoom from "../../assets/images/lefko/lefko-room.jpg";
import lefkoBalcony from "../../assets/images/lefko/lefko-balcony.jpg";
import lefkoEvening from "../../assets/images/lefko/lefko-main.jpg";

function LefkoSuites() {
  const galleryImages = [lefkoRoom, lefkoBalcony, lefkoEvening];

  return (
    <main className="lefko-page">
      <style>{`
        .lefko-page {
          --lefko-ink: #153247;
          --lefko-deep: #0c2738;
          --lefko-sky: #63c7ff;
          --lefko-soft: #eef9ff;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--lefko-ink);
          font-family: inherit;
        }

        .lefko-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(13, 54, 77, 0.2);
        }

        .lefko-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(180deg, rgba(5, 28, 42, 0.06) 22%, rgba(5, 28, 42, 0.8) 100%);
        }

        .lefko-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .lefko-hero:hover img {
          transform: scale(1.04);
        }

        .lefko-hero-content {
          position: absolute;
          z-index: 2;
          inset: auto clamp(22px, 5vw, 48px) clamp(24px, 5vw, 42px);
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          color: #fff;
          text-align: left;
          direction: ltr;
        }

        .lefko-kicker {
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

        .lefko-title {
          margin: 0;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .lefko-award {
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

        .lefko-gallery {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin: 26px 0;
        }

        .lefko-gallery-item {
          overflow: hidden;
          height: 220px;
          border-radius: 22px;
          box-shadow: 0 12px 28px rgba(14, 51, 73, 0.12);
        }

        .lefko-gallery-item img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 500ms ease;
        }

        .lefko-gallery-item:hover img {
          transform: scale(1.06);
        }

        .lefko-details {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(250px, 0.8fr);
          gap: 20px;
          padding: clamp(20px, 4vw, 34px);
          border: 1px solid rgba(112, 196, 236, 0.34);
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.94), rgba(238, 249, 255, 0.88));
          box-shadow: 0 18px 45px rgba(14, 57, 80, 0.1);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .faros-section-heading {
          margin: 0 0 16px;
          color: var(--lefko-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .faros-menu-list, .faros-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .faros-menu-list li, .faros-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .faros-menu-list li {
          font-weight: 650;
        }

        .faros-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(58, 142, 183, 0.22);
          text-align: right;
        }

        .faros-info-list li {
          font-size: 0.94rem;
        }

        .faros-info-list span,
        .faros-info-list a {
          overflow-wrap: anywhere;
        }

        .lefko-ltr {
          direction: ltr;
          unicode-bidi: bidi-override;
          display: inline-block;
        }

        .lefko-link {
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

        .lefko-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 30px rgba(79, 70, 229, 0.38);
        }

        .lefko-actions {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          margin-top: 28px;
        }

        .lefko-button {
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
          transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease;
        }

        .lefko-button:hover {
          transform: translateY(-3px);
        }

        .lefko-button:active {
          transform: translateY(-1px);
        }

        .lefko-button-back {
          border-color: #c8e5f2;
          background: #fff;
          color: var(--lefko-ink);
          box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
        }

        .lefko-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        .lefko-button-next:hover {
          box-shadow: 0 16px 30px rgba(79, 70, 229, 0.38);
        }

        @media (max-width: 900px) {
          .lefko-gallery {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .lefko-page {
            padding-bottom: 32px;
          }

          .lefko-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .lefko-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .lefko-award {
            white-space: normal;
          }

          .lefko-gallery {
            grid-template-columns: 1fr;
            gap: 12px;
            margin: 18px 0;
          }

          .lefko-gallery-item {
            height: 180px;
            border-radius: 17px;
          }

          .lefko-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .lefko-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(58, 142, 183, 0.22);
            border-left: 0;
          }

          .lefko-actions {
            flex-direction: column-reverse;
          }

          .lefko-button {
            width: 100%;
          }
        }
      `}</style>

      <section className="lefko-hero">
        <img src={lefkoMain} alt="Lefko Suites" />
        <div className="lefko-hero-content">
          <div>
            <p className="lefko-kicker">🏨 Hanioti, Greece</p>
            <h1 className="lefko-title">Lefko Suites</h1>
            <p>TEST-12345</p>
          </div>
          <p className="lefko-award">🥇 BEST OF THE BEST</p>
        </div>
      </section>

      <section className="lefko-gallery" aria-label="Lefko Suites highlights">
        {galleryImages.map((image, index) => (
          <div className="lefko-gallery-item" key={`${image}-${index}`}>
            <img src={image} alt={`Lefko ${index + 1}`} />
          </div>
        ))}
      </section>

      <section className="lefko-details">
        <div>
          <h2 className="faros-section-heading">🗺️ האזור סביב Lefko Suites</h2>
          <ul className="faros-menu-list" dir="rtl">
            <li>🏨 Lefko Suites</li>
            <li>🌊 חוף הים • 286 מ׳</li>
            <li>🛒 Masoutis • 362 מ׳</li>
            <li>🍽️ Faros • 385 מ׳</li>
            <li>🍦 Amorato • 409 מ׳</li>
            <li>🚶 מרכז חניוטי • אזור Amorato ו־Faros</li>
          </ul>
        </div>

        <div className="faros-info" dir="rtl">
          <h2 className="faros-section-heading">פרטים שימושיים</h2>
          <ul className="faros-info-list">
            <li>
              <span>📍 כתובת: Hanioti, Chalkidiki 63085, Greece</span>
            </li>
            <li>
              <span>🅿️ חניה: חניה פרטית לאורחי המלון</span>
            </li>
            <li>
              <span>🌐 אתר: <a href="https://lefkosuites.gr" target="_blank" rel="noreferrer">lefkosuites.gr</a></span>
            </li>
            <li>
              <span>📞 טלפון: <a className="lefko-ltr" href="tel:+302374053515">+30 23740 53515</a></span>
            </li>
            <li>
              <a className="lefko-link" href="https://waze.com/ul?ll=39.999130,23.578625&navigate=yes" target="_blank" rel="noreferrer">🚗 פתח ב־Waze</a>
            </li>
            <li>
              <span>💡 מיקום מצוין: כמה דקות מהחוף, מהטיילת ומהמרכז של חניוטי.</span>
            </li>
          </ul>
        </div>
      </section>

      <nav className="lefko-actions" aria-label="Lefko Suites navigation">
        <Link className="lefko-button lefko-button-back" to="/day1">
          ⬅️ חזרה ליום 1
        </Link>
        <Link className="lefko-button lefko-button-next" to="/faros">
          ➡️ המשך ל-Faros
        </Link>
      </nav>
    </main>
  );
}

export default LefkoSuites;