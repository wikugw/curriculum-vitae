import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

// The preview image shown when the link is shared (LinkedIn, Slack, WhatsApp...).
// Generated once at build time.

export const alt = `${profile.fullName}, ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#ffffff",
        color: "#16171a",
      }}
    >
      <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: "-0.02em" }}>
        {profile.fullName}
      </div>
      <div style={{ marginTop: 16, fontSize: 40, color: "#5b5f66" }}>{profile.headline}</div>
      <div style={{ marginTop: 48, fontSize: 28, color: "#1f4fd1" }}>{profile.location}</div>
    </div>,
    size,
  );
}
