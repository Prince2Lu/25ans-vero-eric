import React from "react";
import couplePhoto from "./assets/nous.png";

/**
 * 25 ANS DE MARIAGE — Véronique & Eric
 * Dimanche 27 septembre
 *
 * Design : "Noces d'argent"
 * Un fil d'argent relie les trois temps de la journée, comme un collier
 * dont chaque perle marque un moment — l'église, l'apéro, l'étang.
 *
 * À FAIRE avant mise en ligne :
 *  - Remplacer les photos (rechercher "PHOTO:" ci-dessous)
 *  - Coller le plan d'accès (rechercher "PLAN D'ACCÈS")
 *  - Vérifier l'adresse complète de l'étang Schwendiman
 */

const tokens = {
  ink: "#23262B",
  inkSoft: "#4A4E55",
  ivory: "#F6F2E9",
  ivoryDeep: "#EFE9DB",
  silver: "#AEB4BB",
  silverLight: "#D9DCDF",
  wine: "#6E2A38",
  gold: "#B9AE8F",
};

const ACCESS_STEPS = [
  {
    label: "Depuis Metz",
    text: "Prenez l'A4 en direction de Forbach / Sarrebruck. Environ 56 min, 78 km.",
  },
  {
    label: "À la sortie d'autoroute",
    text: "Suivez la direction Hambach.",
  },
  {
    label: "En entrant dans Hambach",
    text: "Sur la rue nationale, passez l'église sur votre droite, puis continuez jusqu'à la rue Saint-Hubert.",
  },
  {
    label: "Rue Saint-Hubert",
    text: "Ne tournez pas à droite : continuez tout droit jusqu'au bout de la rue.",
  },
  {
    label: "Sur place",
    text: "Des panneaux seront posés pour indiquer la direction jusqu'au bout de la rue.",
  },
];

const EVENTS = [
  {
    time: "10:00",
    title: "Service divin",
    place: "Église Néo-Apostolique",
    desc: "Une messe pour dire merci, entourés de ceux qui comptent.",
  },
  {
    time: "11:15",
    title: "Apéritif",
    place: "À l'église",
    desc: "Un verre ensemble, juste après le service.",
  },
  {
    time: "12:30",
    title: "Repas",
    place: "Étang de la famille Schwendiman — Hambach",
    desc: "En famille et entre amis, tout l'après-midi.",
  },
];

function Ornament({ style }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={style}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" fill="none" stroke={tokens.gold} strokeWidth="1" />
      <circle cx="12" cy="12" r="1.4" fill={tokens.gold} />
    </svg>
  );
}

export default function AnniversaireMariage() {
  return (
    <div style={{ background: tokens.ivory, color: tokens.ink, fontFamily: "'Jost', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Jost:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }
        .serif { font-family: 'Cormorant Garamond', serif; }
        .eyebrow {
          font-family: 'Jost', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.28em;
          font-size: 0.7rem;
          font-weight: 500;
          color: ${tokens.inkSoft};
        }
        .thread-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, ${tokens.silver} 8%, ${tokens.silver} 92%, transparent);
          transform: translateX(-50%);
        }
        @media (max-width: 768px) {
          .thread-line { left: 28px; }
        }
        .bead {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: ${tokens.ivory};
          border: 1.5px solid ${tokens.silver};
          box-shadow: 0 0 0 6px ${tokens.ivory};
        }
        .fade-up {
          animation: fadeUp 0.9s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .fade-up { animation: none; }
        }
        a.cta:focus-visible, button:focus-visible {
          outline: 2px solid ${tokens.wine};
          outline-offset: 3px;
        }
      `}</style>

      {/* ---------- HERO ---------- */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "6rem 1.5rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* halo argenté discret derrière le nombre */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "38%",
            left: "50%",
            width: "560px",
            height: "560px",
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, ${tokens.silverLight} 0%, transparent 70%)`,
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />

        <p className="eyebrow fade-up" style={{ marginBottom: "1.75rem" }}>
          Noces d'argent
        </p>

        <div
          className="serif fade-up"
          style={{
            fontSize: "clamp(6rem, 22vw, 13rem)",
            lineHeight: 0.85,
            fontWeight: 500,
            fontStyle: "italic",
            background: `linear-gradient(180deg, ${tokens.ink} 0%, ${tokens.silver} 60%, ${tokens.gold} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            position: "relative",
            zIndex: 1,
          }}
        >
          25
        </div>

        <img
          src={couplePhoto}
          alt="Véronique et Eric"
          className="fade-up"
          style={{
            width: "clamp(150px, 26vw, 230px)",
            height: "auto",
            marginTop: "clamp(-3.5rem, -7vw, -1.5rem)",
            marginBottom: "0.5rem",
            position: "relative",
            zIndex: 2,
            filter: "drop-shadow(0 18px 30px rgba(35, 38, 43, 0.25))",
          }}
        />

        <p
          className="serif fade-up"
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
            marginTop: "0.5rem",
            marginBottom: "2rem",
            color: tokens.inkSoft,
            fontStyle: "italic",
          }}
        >
          ans de mariage
        </p>

        <h1
          className="serif fade-up"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 500,
            margin: 0,
            letterSpacing: "0.01em",
          }}
        >
          Véronique <span style={{ color: tokens.silver }}>&amp;</span> Eric
        </h1>

        <div
          className="fade-up"
          style={{
            marginTop: "1.75rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span style={{ width: 28, height: 1, background: tokens.silver }} />
          <p className="eyebrow" style={{ letterSpacing: "0.2em" }}>
            Dimanche 27 septembre
          </p>
          <span style={{ width: 28, height: 1, background: tokens.silver }} />
        </div>
      </section>

      {/* ---------- PROGRAMME — fil d'argent ---------- */}
      <section
        style={{
          position: "relative",
          maxWidth: "820px",
          margin: "0 auto",
          padding: "2rem 1.5rem 6rem",
        }}
      >
        <div className="thread-line" aria-hidden="true" />

        <p
          className="eyebrow"
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          Le déroulé de la journée
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "4.5rem" }}>
          {EVENTS.map((ev, i) => {
            const alignRight = i % 2 === 0;
            return (
              <div
                key={ev.title}
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: alignRight ? "flex-end" : "flex-start",
                }}
              >
                {/* bead on the thread */}
                <div
                  className="bead"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "0.4rem",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                  }}
                />
                <div
                  style={{
                    width: "calc(50% - 2.5rem)",
                    textAlign: alignRight ? "right" : "left",
                  }}
                >
                  <p
                    className="serif"
                    style={{
                      fontSize: "2.2rem",
                      fontStyle: "italic",
                      color: tokens.wine,
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    {ev.time}
                  </p>
                  <h3
                    className="serif"
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 500,
                      margin: "0.4rem 0 0.15rem",
                    }}
                  >
                    {ev.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      color: tokens.inkSoft,
                    }}
                  >
                    {ev.place}
                  </p>
                  <p
                    style={{
                      margin: "0.5rem 0 0",
                      fontSize: "0.9rem",
                      color: tokens.inkSoft,
                      maxWidth: "22rem",
                      marginLeft: alignRight ? "auto" : 0,
                    }}
                  >
                    {ev.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- ACCÈS ---------- */}
      <section
        style={{
          background: tokens.ink,
          color: tokens.ivory,
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p className="eyebrow" style={{ color: tokens.silverLight, marginBottom: "1rem" }}>
            Pour nous rejoindre
          </p>
          <h2 className="serif" style={{ fontSize: "2rem", fontWeight: 500, margin: "0 0 0.5rem" }}>
            Étang de la famille Schwendiman
          </h2>
          <p style={{ color: tokens.silverLight, margin: "0 0 0.5rem" }}>
            Hambach {/* TODO: compléter l'adresse complète si besoin */}
          </p>
          <p
            style={{
              color: tokens.silver,
              fontSize: "0.8rem",
              letterSpacing: "0.05em",
              margin: "0 0 3rem",
            }}
          >
            49°04'14.63"N&nbsp;&nbsp;7°02'01.41"E
          </p>

          <div
            style={{
              textAlign: "left",
              maxWidth: "560px",
              margin: "0 auto",
              borderLeft: `1px solid ${tokens.silver}`,
              paddingLeft: "1.75rem",
            }}
          >
            {ACCESS_STEPS.map((step, i) => (
              <div
                key={step.label}
                style={{
                  position: "relative",
                  paddingBottom: i === ACCESS_STEPS.length - 1 ? 0 : "1.9rem",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-1.95rem",
                    top: "0.15rem",
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    background: tokens.ink,
                    border: `1.5px solid ${tokens.gold}`,
                  }}
                />
                <p
                  className="eyebrow"
                  style={{ color: tokens.gold, marginBottom: "0.3rem" }}
                >
                  {step.label}
                </p>
                <p
                  style={{
                    margin: 0,
                    color: tokens.silverLight,
                    fontSize: "0.95rem",
                    lineHeight: 1.5,
                  }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              marginTop: "3rem",
              fontSize: "0.85rem",
              color: tokens.silver,
            }}
          >
            Une question sur la route ? Appelez Eric au{" "}
            <span style={{ color: tokens.ivory }}>06 74 36 56 16</span>.
          </p>
        </div>
      </section>

      {/* ---------- GALERIE (placeholder) ---------- */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "1000px", margin: "0 auto" }}>
        <p className="eyebrow" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          25 ans en images
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "0.75rem",
          }}
        >
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              style={{
                aspectRatio: "3 / 4",
                background: tokens.ivoryDeep,
                border: `1px solid ${tokens.silverLight}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: tokens.inkSoft,
                fontSize: "0.75rem",
              }}
            >
              {/* PHOTO {n} : remplacer par <img src="..." /> */}
              Photo {n}
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FOOTER — le fil se referme en anneau ---------- */}
      <footer
        style={{
          textAlign: "center",
          padding: "5rem 1.5rem 4rem",
          background: tokens.ivoryDeep,
        }}
      >
        <Ornament style={{ marginBottom: "1.25rem" }} />
        <p className="serif" style={{ fontSize: "1.3rem", fontStyle: "italic", margin: 0 }}>
          Merci de partager ce moment avec nous.
        </p>
        <p className="eyebrow" style={{ marginTop: "1rem" }}>
          Véronique &amp; Eric — 27 septembre
        </p>
      </footer>
    </div>
  );
}
