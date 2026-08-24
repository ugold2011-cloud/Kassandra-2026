import { Link, useLocation } from "react-router-dom";
import "./Day.css";

import lefkoMain from "../../assets/images/lefko/lefko-evening.jpg";
import lefkoRoom from "../../assets/images/lefko/lefko-room.jpg";
import lefkoBalcony from "../../assets/images/lefko/lefko-balcony.jpg";
import lefkoEvening from "../../assets/images/lefko/lefko-main.jpg";

function LefkoSuites() {
  const galleryImages = [lefkoRoom, lefkoBalcony, lefkoEvening];
  const location = useLocation();

  const fromDay2 = location.state?.fromDay === 2;

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
          direction: rtl;
          text-align: right;
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
          color: #fff;
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

        .lefko-content {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .lefko-heading {
          margin: 0;
          font-size: clamp(1.6rem, 3.2vw, 2.1rem);
          font-weight: 800;
          color: var(--lefko-deep);
          text-align: center;
          letter-spacing: -0.03em;
        }

        .lefko-address {
          text-align: center;
          font-size: 0.95rem;
          color: var(--lefko-ink);
          opacity: 0.85;
        }

        .lefko-info-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .lefko-info-link {
          color: #4f46e5;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
        }

        .lefko-info-link:hover {
          text-decoration: underline;
        }

        .lefko-ltr {
          direction: ltr;
          unicode-bidi: embed;
        }

        .lefko-parking {
          text-align: center;
          font-size: 0.9rem;
          color: var(--lefko-ink);
          opacity: 0.8;
        }

        .lefko-waze {
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

        .lefko-waze:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 30px rgba(79, 70, 229, 0.38);
        }

        .lefko-google-maps-button {
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
          color: var(--lefko-ink);
          box-shadow: 0 8px 18px rgba(14, 57, 80, 0.08);
          transition: transform 220ms ease, box-shadow 220ms ease;
          white-space: nowrap;
        }

        .lefko-google-maps-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(14, 57, 80, 0.16);
        }

        .lefko-masoutis {
          text-align: center;
          font-size: 0.95rem;
          color: var(--lefko-ink);
          padding: 10px 0;
        }

        .lefko-actions {
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

        .lefko-button {
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

        .lefko-button:hover {
          transform: translateY(-3px);
        }

        .lefko-button:active {
          transform: translateY(-1px);
        }

        .lefko-button-back {
          border: 1px solid #dbe2ea;
          background: #ffffff;
          color: var(--lefko-ink);
          box-shadow: none;
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

          .lefko-actions {
            flex-direction: row;
          }

          .lefko-button {
            flex: 1;
          }

          .lefko-info-row {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>

      <section className="lefko-hero">
        <img src={lefkoMain} alt="Lefko Suites" />

        <div className="lefko-hero-content">
          <div>
            <p className="lefko-kicker">🏨 Hanioti, Greece</p>
            <h1 className="lefko-title">Lefko Suites</h1>
          </div>

          <p className="lefko-award">🥇 BEST OF THE BEST</p>
        </div>
      </section>

      <section
        className="lefko-gallery"
        aria-label="Lefko Suites highlights"
      >
        {galleryImages.map((image, index) => (
          <div
            className="lefko-gallery-item"
            key={`${image}-${index}`}
          >
            <img src={image} alt={`Lefko ${index + 1}`} />
          </div>
        ))}
      </section>

      <section className="lefko-content">
        <h2 className="lefko-heading">Lefko Suites</h2>

        <p className="lefko-address">
          📍 Hanioti, Chalkidiki 63085, Greece
        </p>

        <div className="lefko-info-row">
          <a
            className="lefko-info-link"
            href="https://lefkosuites.gr"
            target="_blank"
            rel="noreferrer"
          >
            🌐 אתר
          </a>

          <a
            className="lefko-info-link lefko-ltr"
            href="tel:+302374053515"
          >
            📞 +30 23740 53515
          </a>
        </div>

        <p className="lefko-parking">
          🅿️ חניה פרטית לאורחי המלון
        </p>

        <a
          className="lefko-waze"
          href="https://waze.com/ul?ll=39.999171,23.578604&navigate=yes"
          target="_blank"
          rel="noreferrer"
        >
          פתח ב-Waze — <bdi dir="ltr">Lefko Suites</bdi>
        </a>

        <a
          className="lefko-google-maps-button"
          href="https://www.google.com/maps/dir/?api=1&destination=39.999171,23.578604"
        >
          🗺️ Google Maps — <bdi dir="ltr">Lefko Suites</bdi>
        </a>

        <p className="lefko-masoutis">
          🛒 Masoutis — חנות מזון קרובה
        </p>

        <a
          className="lefko-waze"
          href="https://waze.com/ul?ll=39.997454,23.575559&navigate=yes"
          target="_blank"
          rel="noreferrer"
        >
          פתח ב-Waze — <bdi dir="ltr">Masoutis</bdi>
        </a>
      </section>

      <nav
        className="lefko-actions"
        aria-label="Lefko Suites navigation"
      >
        <Link
          className="lefko-button lefko-button-back"
          to="/day1"
        >
          חזרה ליום 1
        </Link>

        {fromDay2 ? (
          <Link
            className="lefko-button lefko-button-next"
            to="/day2"
          >
            המשך ליום 2
          </Link>
        ) : (
          <Link
            className="lefko-button lefko-button-next"
            to="/faros"
          >
            המשך ל-<bdi dir="ltr">Faros</bdi>
          </Link>
        )}
      </nav>
    </main>
  );
}

export default LefkoSuites;
