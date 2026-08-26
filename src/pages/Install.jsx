import { Link } from "react-router-dom";
import "./Install.css";

function Install() {
  return (
    <main className="install-page">
      <header className="install-header">
        <h1 className="install-title">התקנת Kassandra</h1>
        <p className="install-subtitle">בחר את סוג המכשיר שלך</p>
      </header>

      <div className="install-cards">
        <Link className="install-card" to="/install-android">
          <span className="install-card-icon">📱</span>
          <span className="install-card-title">Samsung / Android</span>
        </Link>

        <Link className="install-card" to="/install-iphone">
          <span className="install-card-icon">🍎</span>
          <span className="install-card-title">iPhone</span>
        </Link>
      </div>
    </main>
  );
}

export default Install;
