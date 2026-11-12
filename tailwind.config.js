/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0f12", // 짙은 먹색
        card: "#15181e",       // 바탕보다 한 톤 밝은 카드 배경
        cardBorder: "#272c35", // 옅은 카드 테두리 선
        limeAccent: {
          DEFAULT: "#a3e635",  // 밝은 연두색 강조색
          hover: "#bef264",
          muted: "rgba(163, 230, 53, 0.12)",
        },
        textLight: "#f4f4f5",  // 밝은 회색 본문
        textMuted: "#a1a1aa",  // 은은한 회색
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
