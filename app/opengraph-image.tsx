import { ImageResponse } from "next/og";
import { explanation } from "@/data/portfolio";

export const alt = "Rafi Uddin, Data & AI Analyst";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const ups = explanation.factors.filter((f) => f.direction === "up").slice(0, 4);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f3f4f6", color: "#0f1b2d", padding: 72, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#4b5566" }}>Rafi Uddin, Data & AI Analyst</div>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05, marginTop: 16, maxWidth: 980 }}>
            I check the data before anyone trusts it, then explain what it says.
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {ups.map((f, i) => (
            <div key={f.id} style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ width: 300, fontSize: 24 }}>{f.feature}</div>
              <div style={{ marginLeft: i * 80, width: f.weight * 520, height: 30, background: "#ff0051" }} />
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
