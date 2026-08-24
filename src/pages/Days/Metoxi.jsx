import { Link } from "react-router-dom";
import heroImage from "../../assets/images/Metoxi/Metoxi-main.jpeg";
import food1 from "../../assets/images/Metoxi/Metoxi-food01.jpg";
import food2 from "../../assets/images/Metoxi/Metoxi-food02.jpg";
import food3 from "../../assets/images/Metoxi/Metoxi-food03.jpg";

function Metoxi() {
  return (
    <main className="metoxi-page">
      <style>{`
        .metoxi-page {
          --metoxi-ink: #153247;
          --metoxi-deep: #0c2738;
          max-width: 1080px;
          margin: 0 auto;
          padding: clamp(16px, 3vw, 36px) clamp(16px, 4vw, 42px) 48px;
          color: var(--metoxi-ink);
          font-family: inherit;
        }

        .metoxi-hero {
          position: relative;
          min-height: clamp(360px, 55vw, 520px);
          overflow: hidden;
          border-radius: 32px;
          isolation: isolate;
          box-shadow: 0 24px 60px rgba(13, 54, 77, 0.2);
        }

        .metoxi-hero::after {
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

        .metoxi-hero img {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          object-fit: cover;
          transition: transform 700ms ease;
        }

        .metoxi-hero:hover img {
          transform: scale(1.04);
        }

        .metoxi-hero-content {
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

        .metoxi-kicker {
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

        .metoxi-title {
          margin: 0;
          color: #fff;
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 800;
        }

        .metoxi-award {
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

        .metoxi-details {
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

        .metoxi-section-heading {
          margin: 0 0 16px;
          color: var(--metoxi-deep);
          font-size: clamp(1.25rem, 2.4vw, 1.55rem);
          line-height: 1.25;
        }

        .metoxi-menu-list,
        .metoxi-info-list {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .metoxi-menu-list li,
        .metoxi-info-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.67);
          line-height: 1.55;
        }

        .metoxi-menu-list li {
          font-weight: 650;
        }

        .metoxi-info {
          padding: 4px 0 4px 20px;
          border-left: 1px solid rgba(58, 142, 183, 0.22);
          text-align: right;
        }

        .metoxi-info-list li {
          font-size: 0.94rem;
        }

        .metoxi-time {
          direction: ltr;
          unicode-bidi: isolate;
          display: inline-block;
        }

        .metoxi-important {
          font-weight: 800;
          color: #9a3412;
        }

        .metoxi-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          width: calc(100% - 32px);
          max-width: 360px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 28px;
        }

        .metoxi-button {
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

        .metoxi-button:hover {
          transform: translateY(-3px);
        }

        .metoxi-button-back {
          border-color: #c8e5f2;
          background: #fff;
          color: var(--metoxi-ink);
          box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
        }

        .metoxi-button-next {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
        }

        @media (max-width: 760px) {
          .metoxi-page {
            padding-bottom: 32px;
          }

          .metoxi-hero {
            min-height: 410px;
            border-radius: 25px;
          }

          .metoxi-hero-content {
            align-items: flex-start;
            flex-direction: column;
          }

          .metoxi-award {
            white-space: normal;
          }

          .metoxi-details {
            grid-template-columns: 1fr;
            border-radius: 22px;
          }

          .metoxi-info {
            padding: 20px 0 0;
            border-top: 1px solid rgba(58, 142, 183, 0.22);
            border-left: 0;
          }

           .metoxi-actions .metoxi-button {
             width: auto;
           }

           .metoxi-gallery {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .metoxi-gallery img {
            height: 220px;
          }
        }

         .metoxi-button-waze {
           background: linear-gradient(135deg, #7c3aed, #4f46e5);
           color: #fff;
           box-shadow: 0 12px 24px rgba(79, 70, 229, 0.28);
           width: 260px;
           max-width: calc(100% - 32px);
           min-height: 52px;
           margin-left: auto;
           margin-right: auto;
           padding: 0 20px;
           border-radius: 16px;
         }

         .metoxi-google-maps-button {
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
           color: var(--metoxi-ink);
           box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
           transition: transform 220ms ease, box-shadow 220ms ease;
           white-space: nowrap;
         }

         .metoxi-google-maps-button:hover {
           transform: translateY(-3px);
           box-shadow: 0 12px 24px rgba(14, 57, 80, 0.16);
         }

         .metoxi-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 20px;
        }

        .metoxi-gallery img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(14, 57, 80, 0.12);
          transition: transform 220ms ease;
        }

        .metoxi-gallery img:hover {
          transform: translateY(-4px);
        }
      `}</style>

      <section className="metoxi-hero">
        <img src={heroImage} alt="Metoxi Restaurant" />

        <div className="metoxi-hero-content">
          <div>
            <p className="metoxi-kicker">
              🥩 Kassandreia, Greece
            </p>
            <h1 className="metoxi-title">Metoxi</h1>
          </div>

          <p className="metoxi-award">
            🥇 BEST OF THE BEST
          </p>
        </div>
      </section>

      <section className="metoxi-gallery" aria-label="Metoxi Restaurant gallery">
        <img src={food1} alt="Metoxi food 1" />
        <img src={food2} alt="Metoxi food 2" />
        <img src={food3} alt="Metoxi food 3" />
      </section>

      <section className="metoxi-details">
        <div>
          <h2 className="metoxi-section-heading">
            🥩 ארוחת בשרים
          </h2>

           <ul className="metoxi-menu-list" dir="rtl">
             <li>🥩 סטייקים ונתחי בשר פרימיום</li>
             <li>🐑 צלעות כבש</li>
             <li>🔥 בשרים צלויים</li>
           </ul>
        </div>

        <div className="metoxi-info" dir="rtl">
          <h2 className="metoxi-section-heading">
            פרטים שימושיים
          </h2>

          <ul className="metoxi-info-list">
            <li>
              <span>
                📍 אזור: Kassandreia / כביש Kassandreia–Sani
              </span>
            </li>

            <li>
              <span>
                🕗 זמן מומלץ:{" "}
                <span className="metoxi-time">
                  20:00–20:30
                </span>
              </span>
            </li>

             <li>
               <span>
                 📞 מומלץ להזמין מראש שולחן ל־4
               </span>
             </li>
           </ul>
        </div>
      </section>

      <div
        style={{
          textAlign: "center",
          marginTop: 28,
          marginBottom: 16,
        }}
      >
        <a
          className="metoxi-button metoxi-button-waze"
          href="https://waze.com/ul?ll=40.065431945141874,23.392231757671798&navigate=yes"
        >
          🚗 Waze ל-Metoxi
        </a>

        <a
          className="metoxi-google-maps-button"
          href="https://www.google.com/maps/dir/?api=1&destination=40.065431945141874,23.392231757671798"
        >
          🗺️ Google Maps ל-Metoxi
        </a>
      </div>

      <nav
        className="metoxi-actions"
        aria-label="Metoxi Restaurant navigation"
      >
        <Link
          className="metoxi-button metoxi-button-back"
          to="/day2"
        >
          ⬅️ חזרה ליום 2
        </Link>

        <Link
          className="metoxi-button metoxi-button-next"
          to="/givizinis"
        >
          המשך<br />Givizinis
        </Link>
      </nav>
    </main>
  );
}

export default Metoxi;