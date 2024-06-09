import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          satoshi: { value: "var(--font-satoshi)" },
        },
        colors: {
          primary: { value: "#1ED760", description: "Spotify Green" },
          fgPrimary: { value: "#E0E0E0" },
          fgSecondary: { value: "#898989" },
          fgTertiary: { value: "#323232" },
          fgLightSecondary: { value: "#6E6E6E" },
          fgLightPrimary: { value: "#1A1A1A" },
          bgSecondary: { value: "#202020" },
          bgPrimary: { value: "#111111" },
          bgMain: { value: "#060606" },
          bgLightMain: { value: "#F0F0F0" },
        },
      },
    },
  },

  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
