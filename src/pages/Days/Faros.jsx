import { Link } from "react-router-dom";

import farosMain from "../../assets/images/faros/faros-main.jpg";
import farosFish from "../../assets/images/faros/faros-fish.jpg";
import farosKishua from "../../assets/images/faros/faros-kishua.jpg";

function Faros() {
  const featureImages = [
    { src: farosFish, alt: "Fish" },
    { src: farosKishua, alt: "Kishua" },
  ];

  return (
    <main className="faros-page">
      <style>{`
        .faros-page {
          --faros-ink: #153247;
          --faros-deep: #0c2738;
          --faros-sky: #63c7ff;
          --faros-soft: #eef9ff;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--faros-ink);
          font-family: inherit;
        }

        .faros-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(13, 54, 77, 0.2);
        }

        .faros-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(180deg, rgba(5, 28, 42, 0.06) 22%, rgba(5, 28, 42, 0.8) 100%);
        }

        .faros-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .faros-hero:hover img { transform: scale(1.04); }

        .faros-hero-content {
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

        .faros-kicker {
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

        .faros-title {
          margin: 0;
          color: #fff;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .faros-award {
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

        .faros-gallery {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 26px 0;
        }

        .faros-gallery-item {
          overflow: hidden;
          height: 230px;
          border-radius: 22px;
          box-shadow: 0 12px 28px rgba(14, 51, 73, 0.12);
        }

        .faros-gallery-item img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 500ms ease;
        }

        .faros-gallery-item:hover img { transform: scale(1.06); }

        .faros-details {
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
          color: var(--faros-deep);
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

        .faros-menu-list li { font-weight: 650; }

        .faros-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(58, 142, 183, 0.22);
          text-align: right;
        }

        .faros-info-list li { font-size: 0.94rem; }
        .faros-info-list span { overflow-wrap: anywhere; }
        .faros-ltr { direction: ltr; unicode-bidi: bidi-override; display: inline-block; }

        .faros-actions {
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

        .faros-button {
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

        .faros-button:hover { transform: translateY(-3px); }
        .faros-button:active { transform: translateY(-1px); }
        .faros-button-back { border: 1px solid #dbe2ea; background: #ffffff; color: #1f2937; box-shadow: none; }
        .faros-button-next { background: linear-gradient(135deg, #7c3aed, #4f46e5); border: 1px solid transparent; color: #ffffff; box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28); }
        .faros-button-next:hover { box-shadow: 0 16px 30px rgba(79, 70, 229, 0.38); }

        .faros-waze {
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

        .faros-waze:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 30px rgba(79, 70, 229, 0.38);
        }

        @media (max-width: 640px) {
          .faros-page { padding-bottom: 32px; }
          .faros-hero { min-height: 410px; border-radius: 25px; }
          .faros-hero-content { align-items: flex-start; flex-direction: column; }
          .faros-award { white-space: normal; }
          .faros-gallery { gap: 12px; margin: 18px 0; }
          .faros-gallery-item { height: 160px; border-radius: 17px; }
          .faros-details { grid-template-columns: 1fr; border-radius: 22px; }
          .faros-info { padding: 20px 0 0; border-top: 1px solid rgba(58, 142, 183, 0.22); border-left: 0; }
          .faros-actions { flex-direction: row; }
          .faros-button { flex: 1; }
        }
      `}</style>

      <section className="faros-hero">
        <img src={farosMain} alt="Faros Fish Restaurant" />
        <div className="faros-hero-content">
          <div>
            <p className="faros-kicker">🐟 Hanioti, Greece</p>
            <h1 className="faros-title">Faros Fish<br />Restaurant</h1>
          </div>
          <p className="faros-award">🥇 BEST OF THE BEST</p>
        </div>
      </section>

      <section className="faros-gallery" aria-label="Faros highlights">
        {featureImages.map((image) => (
          <div className="faros-gallery-item" key={image.alt}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </section>

      <section className="faros-details">
        <div>
          <h2 className="faros-section-heading">🍽️ מנות מומלצות</h2>
          <ul className="faros-menu-list" dir="rtl">
            <li>🐟 דג טרי על הגריל.</li>
            <li>🐠 ברבוניות מטוגנות.</li>
            <li>🥒 קישואים מטוגנים עם מטבל.</li>
          </ul>
        </div>

        <div className="faros-info" dir="rtl">
          <h2 className="faros-section-heading">פרטים שימושיים</h2>
          <ul className="faros-info-list">
            <li><span>📍 כתובת: Unnamed Rd, Chaniotis 63085, Greece</span></li>
            <li><span>📞 טלפון: <span className="faros-ltr">+30 2374 051276</span></span></li>
            <li><span>🕕 שעות פתיחה: <span className="faros-ltr">13:00–23:30</span></span></li>
            <li>
              <a
                className="faros-waze"
                href="waze://?ll=39.999876,23.574140&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
              >
                🚗 פתח ב־Waze
              </a>
            </li>
            <li><span>💡 מומלץ להגיע בין <span className="faros-ltr">19:00–20:00</span></span></li>
          </ul>
        </div>
      </section>

      <nav className="faros-actions" aria-label="Day 1 navigation">
        <Link className="faros-button faros-button-back" to="/day1">⬅️ חזרה ליום 1</Link>
        <Link className="faros-button faros-button-next" to="/amorato">➡️ המשך ל-Amorato</Link>
      </nav>
    </main>
  );
}

export default Faros;
