"use client";

export default function AnimatedMap() {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "0px",
      }}
    >
      {/* Vidéo en arrière-plan */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(50%)", // rend la vidéo plus sombre
        }}
      >
        <source src="/videos/vd1.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>

      {/* Overlay texte */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#f1f2eaff",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Traduction Internationale
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
          Votre texte scanné, analysé et traduit automatiquement à travers le monde.
        </p>
      </div>
    </div>
  );
}
