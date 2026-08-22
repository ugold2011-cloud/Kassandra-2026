import { Link } from "react-router-dom";

import amoratoMain from "../../assets/images/amorato/amorato-main.jpg";
import amoratoIcecream from "../../assets/images/amorato/amorato-icecream.jpg";
import amoratoNight from "../../assets/images/amorato/amorato-night.jpg";

function Amorato() {
  return (
    <main className="amorato-page">
      <style>{`
        .amorato-page {
          --amorato-ink: #153247;
          --amorato-deep: #0c2738;
          --amorato-sky: #63c7ff;
          --amorato-soft: #eef9ff;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--amorato-ink);
          font-family: inherit;
        }

        .amorato-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(13, 54, 77, 0.2);
        }

        .amorato-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(180deg, rgba(5, 28, 42, 0.06) 22%, rgba(5, 28, 42, 0.8) 100%);
        }

        .amorato-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .amorato-hero:hover img {
          transform: scale(1.04);
        }

        .amorato-hero-content {
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

        .amorato-kicker {
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

        .amorato-title {
          margin: 0;
          color: #fff;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .amorato-award {
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

        .amorato-gallery {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 26px 0;
        }

        .amorato-gallery-item {
          overflow: hidden;
          height: 230px;
          border-radius: 22px;
          box-shadow: 0 12px 28px rgba(14, 51, 73, 0.12);
        }

        .amorato-gallery-item img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 500ms ease;
        }

        .amorato-gallery-item:hover img {
          transform: scale(1.06);
        }

        .amorato-details {
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

        .amorato-card {
          padding: 4px 0;
        }

        .amorato-section-heading {
          margin: 0 0 16px;
          color: var(--amorato-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .amorato-list,
        .amorato-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .amorato-list li,
        .amorato-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .amorato-list li {
          font-weight: 650;
        }

        .amorato-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(58, 142, 183, 0.22);
          text-align: right;
        }

        .amorato-info-list li {
          font-size: 0.94rem;
        }

        .amorato-info-list span,
        .amorato-info-list a {
          overflow-wrap: anywhere;
        }

        .amorato-ltr {
          direction: ltr;
          unicode-bidi: bidi-override;
          display: inline-block;
        }

        .amorato-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 260px;
          max-width: calc(100% - 32px);
          min-height: 52px;
          padding: 0 20px;
          border-radius: 16px;
          margin-left: auto;
          margin-right: auto;
          white-space: nowrap;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          text-decoration: none;
          font-weight: 800;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .amorato-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 30px rgba(79, 70, 229, 0.38);
        }

        .amorato-actions {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 12px;
          width: calc(100% - 32px);
          max-width: 360px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 28px;
        }

        .amorato-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          min-width: 0;
          width: auto;
          min-height: 52px;
          padding: 0 10px;
          border-radius: 16px;
          font-size: 15px;
          white-space: nowrap;
          text-decoration: none;
          font-weight: 800;
          transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease;
        }

        .amorato-button:hover {
          transform: translateY(-3px);
        }

        .amorato-button:active {
          transform: translateY(-1px);
        }

        .amorato-button-back {
          background: #ffffff;
          border: 1px solid #dbe2ea;
          color: #1f2937;
        }

        .amorato-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          border: 1px solid transparent;
          color: #ffffff;
        }

        .amorato-button-next:hover {
          box-shadow: 0 16px 30px rgba(79, 70, 229, 0.38);
        }

        @media (max-width: 760px) {
          .amorato-page {
            padding-bottom: 32px;
          }

          .amorato-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .amorato-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .amorato-award {
            white-space: normal;
          }

          .amorato-gallery {
            gap: 12px;
            margin: 18px 0;
          }

          .amorato-gallery-item {
            height: 160px;
            border-radius: 17px;
          }

          .amorato-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .amorato-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(58, 142, 183, 0.22);
            border-left: 0;
          }

          .amorato-actions {
            flex-direction: column-reverse;
          }

          .amorato-button {
            width: 100%;
          }
        }
        @media (max-width: 640px) {
          .amorato-actions {
            flex-direction: row;
          }

          .amorato-button {
            flex: 1;
            width: auto;
          }
        }
      `}</style>

      <section className="amorato-hero">
        <img src={amoratoMain} alt="Amorato" />
        <div className="amorato-hero-content">
          <div>
            <p className="amorato-kicker">🍦 Hanioti, Greece</p>
            <h1 className="amorato-title">Amorato</h1>
          </div>
          <p className="amorato-award">🥇 BEST ICE CREAM</p>
        </div>
      </section>

      <section className="amorato-gallery" aria-label="Amorato highlights">
        <div className="amorato-gallery-item">
          <img src={amoratoIcecream} alt="Ice Cream" />
        </div>
        <div className="amorato-gallery-item">
          <img src={amoratoNight} alt="Amorato Night" />
        </div>
      </section>

      <section className="amorato-details">
        <div className="amorato-card">
          <h2 className="amorato-section-heading">🍨 טעמים מומלצים</h2>
          <ul className="amorato-list" dir="rtl">
            <li>🍦 גלידת פיסטוק.</li>
            <li>🍫 גלידת שוקולד.</li>
            <li>🍓 גלידת תות.</li>
          </ul>
        </div>

        <div className="amorato-card amorato-info" dir="rtl">
          <h2 className="amorato-section-heading">פרטים שימושיים</h2>
          <ul className="amorato-info-list">
            <li>
              <span>📍 כתובת: Hanioti, Chalkidiki, Greece</span>
            </li>
            <li>
              <span>🕒 שעות פעילות: <span className="amorato-ltr">11:00–01:00</span></span>
            </li>
            <li>
              <span>📞 טלפון: <span className="amorato-ltr">+30 23744 01080</span></span>
            </li>
            <li>
              <a
                className="amorato-link"
                href="https://waze.com/ul?ll=40.001060,23.574493&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
              >
                🚗 פתח ב־Waze
              </a>
            </li>
            <li>
              <span>💡 מומלץ לקינוח אחרי ארוחת הערב.</span>
            </li>
          </ul>
        </div>
      </section>

      <nav className="amorato-actions" aria-label="Amorato navigation">
        <Link className="amorato-button amorato-button-back" to="/faros">
          ⬅️ חזרה ל־Faros
        </Link>
        <Link
          className="amorato-button amorato-button-next"
          to="/hanioti-promenade"
        >
          🚶 המשך לטיילת חניוטי
        </Link>
      </nav>
    </main>
  );
}

export default Amorato;