import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "56px",
          background:
            "linear-gradient(145deg, rgba(8,17,38,1) 0%, rgba(18,51,120,1) 58%, rgba(26,79,189,0.95) 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.08)",
              padding: "10px 16px",
              fontSize: 24,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#7eb6ff",
              alignSelf: "flex-start",
            }}
          >
            SwissPro Allround Service GmbH
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                fontSize: 72,
                lineHeight: 1,
                fontWeight: 700,
                letterSpacing: "-0.06em",
                textTransform: "uppercase",
                maxWidth: 900,
              }}
            >
              Reinigung, Umzug und Renovation in Winterthur
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.5,
                maxWidth: 820,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              Professionell. Termingerecht. Aus einer Hand.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 14,
              fontSize: 24,
              color: "rgba(255,255,255,0.84)",
            }}
          >
            <div>Winterthur</div>
            <div>•</div>
            <div>Zürich</div>
            <div>•</div>
            <div>Ostschweiz</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
