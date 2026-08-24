import { Link } from "react-router-dom";
import heroImage from "../../assets/images/PefkochoriShopping/PefkochoriShopping-main.jpg";

function PefkochoriShopping() {
  return (
    <main className="shopping-page">
      <style>{`
        .shopping-page {
          --shopping-ink: #153247;
          --shopping-deep: #0c2738;
          --shopping-sky: #63c7ff;
          --shopping-soft: #eef9ff;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--shopping-ink);
          font-family: inherit;
        }

        .shopping-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(13, 54, 77, 0.2);
        }

        .shopping-hero::after {
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

        .shopping-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .shopping-hero:hover img {
          transform: scale(1.04);
        }

        .shopping-hero-content {
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

        .shopping-kicker {
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

        .shopping-title {
          margin: 0;
          color: #fff;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .shopping-award {
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

        .shopping-details {
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
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .shopping-section-heading {
          margin: 0 0 16px;
          color: var(--shopping-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .shopping-main-list,
        .shopping-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .shopping-main-list li,
        .shopping-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .shopping-main-list li {
          font-weight: 650;
        }

        .shopping-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(58, 142, 183, 0.22);
          text-align: right;
        }

        .shopping-info-list li {
          font-size: 0.94rem;
        }

        .shopping-waze {
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

        .shopping-waze:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 30px rgba(79, 70, 229, 0.38);
        }

        .shopping-google-maps-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          width: 260px;
          max-width: calc(100% - 32px);
          margin-left: auto;
          margin-right: auto;
          padding: 0 20px;
          border: 1px solid #dbe2ea;
          border-radius: 16px;
          text-decoration: none;
          font-size: 0.96rem;
          font-weight: 700;
          background: #fff;
          color: var(--shopping-ink);
          box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
          transition: transform 220ms ease, box-shadow 220ms ease;
          white-space: nowrap;
        }

        .shopping-google-maps-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(14, 57, 80, 0.16);
        }

        .shopping-actions {
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

        .shopping-button {
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
          transition:
            transform 220ms ease,
            box-shadow 220ms ease,
            background 220ms ease;
          white-space: nowrap;
        }

        .shopping-button:hover {
          transform: translateY(-3px);
        }

        .shopping-button-back {
          border: 1px solid #dbe2ea;
          background: #ffffff;
          color: #1f2937;
          box-shadow: none;
        }

        .shopping-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          border: 1px solid transparent;
          color: #ffffff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
          white-space: normal;
        }

        @media (max-width: 760px) {
          .shopping-page {
            padding-bottom: 32px;
          }

          .shopping-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .shopping-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .shopping-award {
            white-space: normal;
          }

          .shopping-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .shopping-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(58, 142, 183, 0.22);
            border-left: 0;
          }

          .shopping-actions {
            flex-direction: row;
          }

          .shopping-button {
            flex: 1;
          }
        }
      `}</style>

      <section className="shopping-hero">
        <img
          src={heroImage}
          alt="Shopping and Browsing in Pefkochori"
        />

        <div className="shopping-hero-content">
          <div>
            <p className="shopping-kicker">
              👗 Pefkochori, Greece
            </p>

            <h1 className="shopping-title">
              Shopping & Browsing
            </h1>
          </div>
        </div>
      </section>

      <section className="shopping-details">
        <div>
          <h2 className="shopping-section-heading">
            👗 שופינג ושיטוט חופשי בפפקוחורי
          </h2>

          <ul className="shopping-main-list" dir="rtl">
            <li>⏱️ משך מתוכנן: כ־30–45 דקות</li>
            <li>🚶 שיטוט רגוע באזור המסחרי המרכזי של פפקוחורי</li>
            <li>📍 הפעילות מתבצעת בסמוך לאזור ארוחת הבוקר</li>
            <li>🗺️ אין מסלול הליכה קבוע מראש</li>
            <li>🏬 אין חנות חובה או יעד קניות קבוע</li>
            <li>👀 נכנסים רק למקומות שנראים מעניינים בדרך</li>
          </ul>
        </div>

        <div className="shopping-info" dir="rtl">
          <h2 className="shopping-section-heading">
            פרטים שימושיים
          </h2>

          <ul className="shopping-info-list">
            <li>
              <span>
                📍 אזור: מרכז פפקוחורי (Pefkochori), חלקידיקי, יוון
              </span>
            </li>

            <li>
              <span>
                🛍️ סוג פעילות: שיטוט וקניות חופשיות
              </span>
            </li>

            <li>
              <span>
                ⏱️ זמן מומלץ: 30–45 דקות
              </span>
            </li>

            <li>
              <span>
                🍳 מתי: מיד לאחר ארוחת הבוקר
              </span>
            </li>

          </ul>

          <a
            className="shopping-waze"
            href="https://waze.com/ul?ll=39.98810934763342,23.618748261907566&navigate=yes"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚗 Waze לחניה באזור הקניות
          </a>

          <a
            className="shopping-google-maps-button"
            href="https://www.google.com/maps/dir/?api=1&destination=39.98810934763342,23.618748261907566"
          >
            🗺️ Google Maps לחניה באזור הקניות
          </a>
        </div>
      </section>

      <nav
        className="shopping-actions"
        aria-label="Pefkochori Shopping navigation"
      >
        <Link
          className="shopping-button shopping-button-back"
          to="/day2"
        >
          ⬅️ חזרה ליום 2
        </Link>

          <Link
            className="shopping-button shopping-button-next"
            to="/glarokavos-beach"
          >
            המשך
            <br />
            Glarokavos Beach
          </Link>
      </nav>
    </main>
  );
}

export default PefkochoriShopping;