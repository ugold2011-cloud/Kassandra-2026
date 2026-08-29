import { Link } from "react-router-dom";
import "./InstallAndroid.css";

function InstallAndroid() {
  const steps = [
    {
      text: 'לחץ על הכפתור למעלה: 🚀 "פתח את Kassandra להתקנה".',
      visual: "step1",
    },
    {
      text: "דף הבית של Kassandra ייפתח עם המפה ו-8 כפתורי ימים — זה המסך הנכון! ✅",
      visual: "step2",
      note: "⚠️ זה הצפוי! ההתקנה עדיין לא הסתיימה. המשך משם לשלבים הבאים באמצעות תפריט הכרום.",
    },
    {
      text: 'לחץ על ⋮ (שלוש נקודות) בפינה הימנית העליונה של כרום.',
      visual: "step3",
    },
    {
      text: 'בחר: "התקנה ויצירת קיצור דרך"',
      visual: "step3",
    },
    {
      text: 'בפאנל שנפתח בתחתית המסך — בחר ב-"התקנה" (עם אייקון Kassandra).',
      visual: "step9",
      note: "❌ אל תבחר ב-'יצירת קיצור דרך'.",
    },
    {
      text: 'בתיבת האימות "התקנת האפליקציה" — לחץ "התקן" עבור Kassandra-2026.',
      visual: "step4",
    },
    {
      text: 'המתן עד שיופיע הודעת כרום: "האפליקציה הותקנה".',
      visual: "step7",
    },
    {
      text: "לחץ על אייקון Kassandra במסך הבית — האפליקציה תפתח לבד, בלי כתובת כרום. ✅",
      visual: "step5",
    },
  ];

  return (
    <main className="install-android-page">
      <header className="install-android-header">
        <h1 className="install-android-title">
          התקנת Kassandra — Samsung / Android
        </h1>
        <p className="install-android-subtitle">
          הפעל את Kassandra כאייקון ייעודי בטלפון בכמה צעדים פשוטים.
        </p>
      </header>

      <a
        href="https://ugold2011-cloud.github.io/Kassandra-2026/"
        style={{
          display: 'inline-block',
          margin: '16px 0',
          padding: '12px 24px',
          backgroundColor: '#6D3A8A',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '16px',
          fontWeight: 800,
          fontSize: '1rem',
        }}
      >
        🚀 פתח את Kassandra להתקנה
      </a>

      <section className="install-steps" aria-label="Ofanen habaa le-Kassandra">
        {steps.map((step, index) => (
          <article className="install-step" key={index}>
            <div className="install-step-header">
              <span className="install-step-number">{index + 1}</span>
              <p className="install-step-text">{step.text}</p>
              {step.note && (
                <p className="install-step-note">{step.note}</p>
              )}
            </div>
            <div className="install-step-visual">
              {step.visual === "step1" && (
                <div className="visual visual-step1">
                  <div className="phone-frame">
                    <div className="phone-notch" />
                    <div className="phone-screen">
                      <div className="app-row">
                        <div className="app-icon whatsapp-icon">
                          <span className="app-icon-symbol">💬</span>
                        </div>
                        <div className="app-icon chrome-icon">
                          <span className="app-icon-symbol">🌐</span>
                        </div>
                      </div>
                      <div className="link-bubble">
                        <span className="link-text">קישור ל-Kassandra</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {step.visual === "step2" && (
                <div className="visual visual-step2">
                  <div className="browser-mockup">
                    <div className="browser-bar">
                      <div className="browser-url" />
                    </div>
                    <div className="browser-content">
                      <div className="map-preview">
                        <div className="map-label">🗺️ מפת Kassandra</div>
                        <div className="day-buttons">
                          <span className="day-btn">יום 1</span>
                          <span className="day-btn">יום 2</span>
                          <span className="day-btn">יום 3</span>
                          <span className="day-btn">יום 4</span>
                          <span className="day-btn">יום 5</span>
                          <span className="day-btn">יום 6</span>
                          <span className="day-btn">יום 7</span>
                          <span className="day-btn">יום 8</span>
                        </div>
                      </div>
                    </div>
                    <div className="browser-bottom">
                      <div className="menu-highlight">
                        <span className="menu-dots">⋮</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {step.visual === "step3" && (
                <div className="visual visual-step3">
                  <div className="browser-mockup small">
                    <div className="browser-bar">
                      <div className="browser-url" />
                    </div>
                    <div className="menu-popup">
                      <div className="menu-item">דף חדש</div>
                      <div className="menu-item">היסטוריה</div>
                      <div className="menu-item highlighted">
                        התקנה ויצירת קיצור דרך
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {step.visual === "step4" && (
                <div className="visual visual-step4">
                  <div className="dialog-mockup">
                    <div className="dialog-title">התקנת האפליקציה</div>
                    <div className="dialog-body">
                      <div className="dialog-icon">📱</div>
                      <div className="dialog-name">Kassandra-2026</div>
                    </div>
                    <div className="dialog-actions">
                      <div className="dialog-button cancel">ביטול</div>
                      <div className="dialog-button confirm">
                        התקן
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {step.visual === "step5" && (
                <div className="visual visual-step5">
                  <div className="phone-frame">
                    <div className="phone-notch" />
                    <div className="home-screen">
                      <div className="tap-indicator">👇</div>
                      <div className="home-app-icon highlighted">
                        <span className="home-icon-symbol">🧭</span>
                        <span className="home-icon-label">Kassandra</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {step.visual === "step7" && (
                <div className="visual">
                  <div
                    style={{
                      textAlign: 'center',
                      color: '#6D3A8A',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                    }}
                  >
                    המתן...<br />האפליקציה הותקנה
                  </div>
                </div>
              )}
              {step.visual === "step9" && (
                <div className="visual visual-step9">
                  <div className="browser-mockup small">
                    <div className="browser-bar">
                      <div className="browser-url" />
                    </div>
                    <div className="bottom-panel">
                      <div className="bottom-panel-item highlighted">
                        <span className="panel-icon">📱</span>
                        <span>התקנה</span>
                      </div>
                      <div className="bottom-panel-item">
                        <span className="panel-icon">🔗</span>
                        <span>יצירת קיצור דרך</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      <div className="install-actions">
        <Link className="install-back-button" to="/">
          חזרה
        </Link>
      </div>
    </main>
  );
}

export default InstallAndroid;
