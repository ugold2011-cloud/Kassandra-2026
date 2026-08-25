import { Link } from "react-router-dom";
import "./InstallAndroid.css";

function InstallAndroid() {
  const steps = [
    {
      text: 'פתח ב-Google Chrome את הקישור ל-Kassandra שקיבלת ב-WhatsApp.',
      visual: "step1",
    },
    {
      text: "לחץ על ⋮ בתחתית המסך.",
      visual: "step2",
    },
    {
      text: 'בחר: "התקן כיישום אינטרנט"',
      visual: "step3",
    },
    {
      text: 'לחץ: "התקן"',
      visual: "step4",
    },
    {
      text: "פתח את Kassandra מהאייקון שנוסף לטלפון. ✅",
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
          הפעל את Kassandra כאייקון ייעודי בטלפון בכמה צעדים simples.
        </p>
      </header>

      <section className="install-steps" aria-label="Ofanen habaa le-Kassandra">
        {steps.map((step, index) => (
          <article className="install-step" key={index}>
            <div className="install-step-header">
              <span className="install-step-number">{index + 1}</span>
              <p className="install-step-text">{step.text}</p>
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
                    <div className="browser-content" />
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
                        התקן כיישום אינטרנט
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {step.visual === "step4" && (
                <div className="visual visual-step4">
                  <div className="dialog-mockup">
                    <div className="dialog-title">התקן אפליקציה?</div>
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
