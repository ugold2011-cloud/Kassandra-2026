import { Link } from "react-router-dom";

import encoreMain from "../../assets/images/EncoreBeachBar/EncoreBeachBar-main.jpeg";
import encoreBeach from "../../assets/images/EncoreBeachBar/EncoreBeachBar-beach.jpeg";

function EncoreBeachBar() {
  const galleryImages = [encoreBeach];

  return (
    <main className="encore-page">
      <style>{`
        .encore-page {
          --encore-ink: #153247;
          --encore-deep: #0c2738;
          --encore-sky: #63c7ff;
          --encore-soft: #eef9ff;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--encore-ink);
          font-family: inherit;
        }

        .encore-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(13, 54, 77, 0.2);
        }

        .encore-hero::after {
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

        .encore-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .encore-hero:hover img {
          transform: scale(1.04);
        }

        .encore-hero-content {
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

        .encore-kicker {
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

         .encore-title {
           margin: 0;
           font-size: clamp(2.4rem, 6vw, 4.5rem);
           line-height: 0.95;
           letter-spacing: -0.055em;
           font-weight: 800;
           color: #ffffff;
         }

        .encore-award {
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

        .encore-gallery {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin: 26px 0;
        }

        .encore-gallery-item {
          overflow: hidden;
          height: 260px;
          border-radius: 22px;
          box-shadow: 0 12px 28px rgba(14, 51, 73, 0.12);
        }

        .encore-gallery-item img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 500ms ease;
        }

        .encore-gallery-item:hover img {
          transform: scale(1.06);
        }

        .encore-details {
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

        .encore-section-heading {
          margin: 0 0 16px;
          color: var(--encore-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .encore-menu-list,
        .encore-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .encore-menu-list li,
        .encore-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .encore-menu-list li {
          font-weight: 650;
        }

        .encore-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(58, 142, 183, 0.22);
          text-align: right;
        }

        .encore-info-list li {
          font-size: 0.94rem;
        }

        .encore-info-list span,
        .encore-info-list a {
          overflow-wrap: anywhere;
        }

        .encore-link {
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

         .encore-link:hover {
           transform: translateY(-3px);
           box-shadow: 0 16px 30px rgba(79, 70, 229, 0.38);
         }

         .encore-waze {
           display: inline-flex;
           align-items: center;
           justify-content: center;
           width: 260px;
           max-width: calc(100% - 32px);
           min-height: 52px;
           padding: 0 16px;
           border-radius: 999px;
           background: linear-gradient(135deg, #7c3aed, #4f46e5);
           color: #fff;
           text-decoration: none;
           font-weight: 800;
           font-size: 0.96rem;
           box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
           transition: transform 220ms ease, box-shadow 220ms ease;
         }

         .encore-waze:hover {
           transform: translateY(-3px);
           box-shadow: 0 16px 30px rgba(79, 70, 229, 0.38);
         }

         .encore-actions {
           display: flex;
           justify-content: center;
           gap: 12px;
           max-width: 360px;
           margin: 28px auto 0;
           overflow: hidden;
         }

        .encore-button {
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

        .encore-button:hover {
          transform: translateY(-3px);
        }

        .encore-button-back {
          border-color: #c8e5f2;
          background: #fff;
          color: var(--encore-ink);
          box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
        }

        .encore-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        @media (max-width: 760px) {
          .encore-page {
            padding-bottom: 32px;
          }

          .encore-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .encore-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .encore-award {
            white-space: normal;
          }

          .encore-gallery {
            grid-template-columns: 1fr;
            gap: 12px;
            margin: 18px 0;
          }

          .encore-gallery-item {
            height: 210px;
            border-radius: 17px;
          }

          .encore-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .encore-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(58, 142, 183, 0.22);
            border-left: 0;
          }


        }
      `}</style>

      <section className="encore-hero">
        <img
          src={encoreMain}
          alt="Encore Beach Bar"
        />

        <div className="encore-hero-content">
          <div>
            <p className="encore-kicker">
              🏖️ Aigaiopelagitika / Possidi, Greece
            </p>

            <h1 className="encore-title">
              Encore Beach Bar
            </h1>
          </div>

          <p className="encore-award">
            🏖️ BEACH DAY
          </p>
        </div>
      </section>

      <section
        className="encore-gallery"
        aria-label="Encore Beach Bar beach"
      >
        {galleryImages.map((image, index) => (
          <div
            className="encore-gallery-item"
            key={`${image}-${index}`}
          >
            <img
              src={image}
              alt={`Encore Beach Bar ${index + 1}`}
            />
          </div>
        ))}
      </section>

      <section className="encore-details">
        <div>
          <h2 className="encore-section-heading">
            🏖️ יום רחצה רגוע
          </h2>

            <ul className="encore-menu-list" dir="rtl">
              <li>🏖️ חוף מאורגן ומנוח</li>
              <li>☀️ מיטות שמש ותריסים</li>
              <li>🚗 גישה נוחה וחניה קלה</li>
              <li>🥤 משקאות ומזון קל</li>
              <li>😌 אווירה רגועה ליום 4</li>
            </ul>
        </div>

        <div className="encore-info" dir="rtl">
          <h2 className="encore-section-heading">
            פרטים שימושיים
          </h2>

          <ul className="encore-info-list">
            <li>
              <span>
                📍 אזור: Aigaiopelagitika / Possidi, חלקידיקי, יוון
              </span>
            </li>

            <li>
              <span>
                🏖️ סוג מקום: חוף מאורגן
              </span>
            </li>

            <li>
              <span>
                🚗 חניה: זמינה ונוחה
              </span>
            </li>
          </ul>
        </div>
       </section>

       <div style={{ textAlign: "center", marginTop: "28px" }}>
         <a
           className="encore-waze"
           href="https://waze.com/ul?ll=39.97760719717463,23.3733326&navigate=yes"
         >
           🚗 Waze ל-Encore Beach Bar
         </a>
       </div>

       <nav
         className="encore-actions"
         aria-label="Encore Beach Bar navigation"
       >
        <Link
          className="encore-button encore-button-back"
          to="/dramis"
        >
          חזרה ל-Dramis
        </Link>

        <Link
          className="encore-button encore-button-next"
          to="/apagio"
        >
          המשך ל-Apagio
        </Link>
      </nav>
    </main>
  );
}

export default EncoreBeachBar;
