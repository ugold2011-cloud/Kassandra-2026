import { Link } from "react-router-dom";
import heroImage from "../../assets/images/KassandreiaMarket/KassandreiaMarket-main.avif";

function KassandreiaMarket() {
  return (
    <main className="market-page">
      <style>{`
        .market-page {
          --market-ink: #153247;
          --market-deep: #0c2738;
          --market-sky: #63c7ff;
          --market-soft: #eef9ff;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--market-ink);
          font-family: inherit;
        }

        .market-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(13, 54, 77, 0.2);
        }

        .market-hero::after {
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

        .market-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .market-hero:hover img {
          transform: scale(1.04);
        }

        .market-hero-content {
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

        .market-kicker {
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

        .market-title {
          margin: 0;
          color: #fff;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .market-status {
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

        .market-details {
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

        .market-section-heading {
          margin: 0 0 16px;
          color: var(--market-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .market-main-list,
        .market-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .market-main-list li,
        .market-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .market-main-list li {
          font-weight: 650;
        }

        .market-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(58, 142, 183, 0.22);
          text-align: right;
        }

        .market-info-list li {
          font-size: 0.94rem;
        }

        .market-important {
          font-weight: 800;
          color: #9a3412;
        }

        .market-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 28px;
          width: calc(100% - 32px);
          max-width: 360px;
          margin-left: auto;
          margin-right: auto;
        }

        .market-button {
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

        .market-button:hover {
          transform: translateY(-3px);
        }

        .market-button-back {
          border-color: #c8e5f2;
          background: #fff;
          color: var(--market-ink);
          box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
        }

        .market-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        .market-waze-button {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        @media (max-width: 760px) {
          .market-page {
            padding-bottom: 32px;
          }

          .market-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .market-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .market-status {
            white-space: normal;
          }

          .market-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .market-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(58, 142, 183, 0.22);
            border-left: 0;
          }

          .market-actions .market-button {
            flex: 1 1 0;
            min-width: 0;
          }
        }
      `}</style>

      <section className="market-hero">
        <img
          src={heroImage}
          alt="Kassandreia Tuesday Market"
        />

        <div className="market-hero-content">
          <div>
            <p className="market-kicker">
              🛍️ Kassandreia, Greece
            </p>

            <h1 className="market-title">
              Tuesday Market
            </h1>
          </div>

          <p className="market-status">
            OPTIONAL
          </p>
        </div>
      </section>

      <section className="market-details">
        <div>
          <h2 className="market-section-heading">
            🛍️ השוק השבועי של קאסנדריה
          </h2>

          <ul className="market-main-list" dir="rtl">
            <li className="market-important">
              ⏰ מומלץ להגיע עד 13:00
            </li>

            <li>
              📅 יום השוק: יום שלישי
            </li>

            <li>
              🕗 שעות פעילות טיפוסיות: כ־08:00–14:00
            </li>

            <li>
              🍅 פירות, ירקות, עשבי תיבול, זיתים ותוצרת מקומית
            </li>

            <li>
              👕 בגדים, נעליים, כלי בית ומוצרי שוק נוספים
            </li>

            <li>
              🇬🇷 שוק שבועי מקומי אמיתי — לא שוק שמיועד רק לתיירים
            </li>

            <li>
              💶 מומלץ להחזיק מעט מזומן — ייתכן שסוחרים קטנים לא יקבלו כרטיס
            </li>
          </ul>
        </div>

        <div className="market-info" dir="rtl">
          <h2 className="market-section-heading">
            פרטים שימושיים
          </h2>

          <ul className="market-info-list">
            <li>
              <span>
                📍 מיקום: Kassandreia
              </span>
            </li>

            <li>
              <span>
                🚗 חניה: חניה ציבורית / אזורי חניה ציבוריים זמינים
              </span>
            </li>

            <li>
              <span>
                🅿️ חניה מועדפת – שטח חניה ללא תשלום, כ-100 מטר מנקודת השוק.
              </span>
            </li>

            <li>
              <span>
                🅿️ חניה חלופית – שטח חניה ללא תשלום, כ-280 מטר מנקודת השוק.
              </span>
            </li>

            <li>
              <span>
                🔄 התחנה אופציונלית לחלוטין — אם לא רוצים, מדלגים וממשיכים את יום 2 כרגיל
              </span>
            </li>
          </ul>
        </div>
      </section>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          marginBottom: "16px",
        }}
      >
        <a
          className="market-button market-waze-button"
          href="waze://?ll=40.049519213937984,23.4133189576718&navigate=yes"
        >
          🚗 Waze – חניה מועדפת
        </a>

        <a
          className="market-button market-waze-button"
          href="waze://?ll=40.05185956940188,23.4149876576718&navigate=yes"
        >
          🚗 Waze – חניה חלופית
        </a>
      </div>

      <nav
        className="market-actions"
        aria-label="Kassandreia Tuesday Market navigation"
      >
        <Link
          className="market-button market-button-back"
          to="/day2"
        >
          ⬅️ חזרה ליום 2
        </Link>

        <Link
          className="market-button market-button-next"
          to="/metoxi"
        >
          המשך<br />Metoxi
        </Link>
      </nav>
    </main>
  );
}

export default KassandreiaMarket;