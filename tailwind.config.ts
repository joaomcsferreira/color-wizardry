import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mysticOrchid: "#8642F4",
        azureDream: "#1574F3",
        skySerenade: "#0B95E9",
        aquaBreeze: "#0B9ED2",
        tealTranquil: "#13AEBC",
        emeraldWhisper: "#00C9B7",
        obsidian: "#181A1B",
        gainsboro: "#9E9E9E",
        white: "#fff",
      },
      backgroundImage: {
        blueVioletAurora:
          "linear-gradient(45deg, #8642F4, #1574F3, #0B95E9, #0B9ED2, #13AEBC, #00C9B7);",
      },
      gridTemplateColumns: {
        3070: "30% 70%",
      },
    },
  },
  plugins: [],
}
export default config
