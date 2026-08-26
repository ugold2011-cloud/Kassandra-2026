import "./InstallIphone.css";
import { Link } from "react-router-dom";

function InstallIphone() {
  const steps = [
    {
      text: "פתחו את הקישור של Kassandra ב־Safari.",
      visual: "step1",
    },
    {
      text: "לחצו על כפתור השיתוף ב־Safari.",
      visual: "step2",
    },
    {
      text: 'בתפריט שנפתח, גללו ובחרו: "הוסף למסך הבית"',
      visual: "step3",
    },
    {
      text: 'ודאו שהאפשרות: "פתח כיישום אינטרנט" מופעלת.',
      visual: "step4",
    },
    {
      text: 'לחצו: "הוסף"',
      visual: "step5",
    },
  ];

  return (
    <main className="install-iphone-page">
      <header className="install-iphone-header">
        <h1 className="install-iphone-title">התקנת Kassandra באייפון</h1>
        <p className="install-iphone-subtitle">
          ההתקנה מתבצעת דרך Safari ואורכת פחות מדקה.
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
                        <div className="app-icon safari-icon">
                          <span className="app-icon-symbol">🧭</span>
                        </div>
                        <div className="app-icon link-icon">
                          <span className="app-icon-symbol">🔗</span>
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
                  <div className="safari-mockup">
                    <div className="safari-bar">
                      <div className="safari-url" />
                      <div className="safari-actions">
                        <div className="share-highlight">
                          <span className="share-icon">⎋</span>
                        </div>
                      </div>
                    </div>
                    <div className="safari-content" />
                    <div className="safari-toolbar">
                      <div className="toolbar-item" />
                      <div className="toolbar-item" />
                      <div className="toolbar-item share-toolbar-item">
                        <span className="share-icon">⎋</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {step.visual === "step3" && (
                <div className="visual visual-step3">
                  <div className="share-menu-mockup">
                    <div className="share-menu-title">שיתוף</div>
                    <div className="share-menu-row">
                      <div className="share-menu-item">
                        <span className="share-menu-icon">📋</span>
                        <span>העתק</span>
                      </div>
                      <div className="share-menu-item">
                        <span className="share-menu-icon">🔖</span>
                        <span>סימניות</span>
                      </div>
                    </div>
                    <div className="share-menu-row">
                      <div className="share-menu-item highlighted">
                        <span className="share-menu-icon">➕</span>
                        <span>הוסף למסך הבית</span>
                      </div>
                      <div className="share-menu-item">
                        <span className="share-menu-icon">📤</span>
                        <span>שלח</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {step.visual === "step4" && (
                <div className="visual visual-step4">
                  <div className="dialog-mockup">
                    <div className="dialog-title">הוסף למסך הבית</div>
                    <div className="dialog-body">
                      <div className="dialog-icon">🧭</div>
                      <div className="dialog-name">Kassandra-2026</div>
                    </div>
                    <div className="dialog-option">
                      <span>פתח כיישום אינטרנט</span>
                      <div className="toggle">
                        <div className="toggle-knob" />
                      </div>
                    </div>
                    <div className="dialog-actions">
                      <div className="dialog-button cancel">ביטול</div>
                      <div className="dialog-button confirm">הוסף</div>
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

      <div className="install-result">
        <p>
          לאחר ההוספה, האייקון של Kassandra יופיע במסך הבית ויפתח כמו אפליקציה.
        </p>
      </div>

      <div className="install-actions">
        <Link className="install-back-button" to="/">
          חזרה
        </Link>
        <Link className="install-open-button" to="/">
          פתח את Kassandra
        </Link>
      </div>
    </main>
  );
}

export default InstallIphone;
