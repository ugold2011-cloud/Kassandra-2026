import { useEffect, useRef } from "react";

const soundtracks = [
  {
    title: "Greek Road Trip",
    subtitle: "The best Greek road trip soundtrack.",
    flag: "🇬🇷",
    url: "https://www.youtube.com/results?search_query=Greek+Music",
    accent: "#4f8cff",
    glow: "rgba(59, 130, 246, 0.42)",
  },
  {
    title: "Russian Road Trip",
    subtitle: "השירים הרוסיים האהובים לנסיעה",
    flag: "🇷🇺",
    url: "https://www.youtube.com/results?search_query=Russian+Music",
    accent: "#9a6bff",
    glow: "rgba(139, 92, 246, 0.42)",
  },
  {
    title: "Israeli Hits",
    subtitle: "The best Israeli songs for the road.",
    flag: "🇮🇱",
    url: "https://www.youtube.com/results?search_query=Israeli+Music",
    accent: "#ff8b4b",
    glow: "rgba(249, 115, 22, 0.38)",
  },
];

function MusicModal({ onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const openPlaylist = (url) => {
    const playlistWindow = window.open(url, "_blank", "noopener,noreferrer");

    if (playlistWindow) {
      playlistWindow.opener = null;
    }
  };

  return (
    <div className="music-modal-overlay" onClick={onClose}>
      <div
        aria-labelledby="music-modal-title"
        aria-modal="true"
        className="music-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <style>{`
          .music-modal-overlay {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            overflow-y: auto;
            background: rgba(8, 12, 28, 0.72);
            backdrop-filter: blur(12px);
          }

          .music-modal {
            width: min(100%, 540px);
            padding: clamp(24px, 5vw, 36px);
            border: 1px solid rgba(255, 255, 255, 0.72);
            border-radius: 28px;
            background: linear-gradient(145deg, rgba(255,255,255,.98), rgba(244,247,255,.94));
            box-shadow: 0 28px 80px rgba(4, 10, 32, .38), inset 0 1px 0 rgba(255,255,255,.9);
            color: #14213d;
            text-align: left;
          }

          .music-modal__eyebrow {
            margin: 0 0 7px;
            color: #69758e;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: .14em;
            text-transform: uppercase;
          }

          .music-modal__title {
            margin: 0 0 25px;
            color: #19264a;
            font-size: clamp(27px, 6vw, 35px);
            font-weight: 800;
            letter-spacing: -.045em;
            line-height: 1.06;
          }

          .music-modal__list {
            display: grid;
            gap: 14px;
            margin-bottom: 24px;
          }

          .music-modal__card {
            position: relative;
            display: flex;
            align-items: center;
            gap: 16px;
            width: 100%;
            min-height: 112px;
            padding: 16px 17px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, .82);
            border-radius: 24px;
            background: linear-gradient(125deg, rgba(255,255,255,.93), rgba(245,248,255,.74));
            box-shadow: 0 12px 25px rgba(29, 46, 91, .10), inset 0 1px 0 rgba(255,255,255,.95);
            color: #15213e;
            cursor: pointer;
            text-align: left;
            transition: transform .2s ease, box-shadow .2s ease;
          }

          .music-modal__card::after {
            position: absolute;
            top: -50px;
            right: -30px;
            width: 128px;
            height: 128px;
            border-radius: 50%;
            background: var(--playlist-glow);
            content: "";
            filter: blur(20px);
            opacity: .55;
          }

          .music-modal__card:hover {
            transform: translateY(-3px);
            box-shadow: 0 18px 32px rgba(29, 46, 91, .16), 0 0 0 3px var(--playlist-glow);
          }

          .music-modal__card:focus-visible,
          .music-modal__close:focus-visible {
            outline: 3px solid #3b82f6;
            outline-offset: 3px;
          }

          .music-modal__flag {
            z-index: 1;
            display: grid;
            flex: 0 0 58px;
            width: 58px;
            height: 58px;
            place-items: center;
            border-radius: 19px;
            background: rgba(255, 255, 255, .7);
            box-shadow: 0 7px 16px rgba(27, 44, 85, .10);
            font-size: 33px;
          }

          .music-modal__copy { z-index: 1; flex: 1; min-width: 0; }
          .music-modal__playlist-title { display: block; margin-bottom: 5px; font-size: 18px; font-weight: 800; letter-spacing: -.025em; }
          .music-modal__subtitle { display: block; color: #66728b; font-size: 13px; font-weight: 600; line-height: 1.35; }
          .music-modal__play { z-index: 1; display: grid; flex: 0 0 47px; width: 47px; height: 47px; place-items: center; border-radius: 50%; background: var(--playlist-accent); box-shadow: 0 8px 17px var(--playlist-glow); color: #fff; font-size: 17px; transition: transform .2s ease; }
          .music-modal__card:hover .music-modal__play { transform: scale(1.08); }

          .music-modal__close {
            width: 100%;
            padding: 14px;
            border: 1px solid rgba(93, 108, 140, .16);
            border-radius: 15px;
            background: rgba(255, 255, 255, .72);
            color: #53617b;
            cursor: pointer;
            font-size: 15px;
            font-weight: 750;
            transition: background .2s ease, color .2s ease;
          }
          .music-modal__close:hover { background: #edf1fa; color: #182546; }

          @media (max-width: 420px) {
            .music-modal-overlay { padding: 12px; align-items: flex-start; }
            .music-modal { margin: 12px 0; border-radius: 24px; }
            .music-modal__card { gap: 12px; min-height: 102px; padding: 14px; }
            .music-modal__flag { flex-basis: 50px; width: 50px; height: 50px; font-size: 29px; }
            .music-modal__playlist-title { font-size: 16px; }
            .music-modal__subtitle { font-size: 12px; }
            .music-modal__play { flex-basis: 43px; width: 43px; height: 43px; }
          }
        `}</style>

        <p className="music-modal__eyebrow">Kassandra 2026</p>
        <h2 className="music-modal__title" id="music-modal-title">
          Choose your soundtrack
        </h2>

        <div className="music-modal__list">
          {soundtracks.map(({ title, subtitle, flag, url, accent, glow }) => (
            <button
              className="music-modal__card"
              key={title}
              onClick={() => openPlaylist(url)}
              style={{ "--playlist-accent": accent, "--playlist-glow": glow }}
              type="button"
            >
              <span aria-hidden="true" className="music-modal__flag">{flag}</span>
              <span className="music-modal__copy">
                <span className="music-modal__playlist-title">{title}</span>
                <span className="music-modal__subtitle" dir={title === "Russian Road Trip" ? "rtl" : undefined}>{subtitle}</span>
              </span>
              <span aria-hidden="true" className="music-modal__play">▶</span>
            </button>
          ))}
        </div>

        <button className="music-modal__close" onClick={onClose} ref={closeButtonRef} type="button">
          Close
        </button>
      </div>
    </div>
  );
}

export default MusicModal;
