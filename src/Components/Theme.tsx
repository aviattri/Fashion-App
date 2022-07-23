import { createBox, createText } from "@shopify/restyle";

const theme = {
  colors: {
    primary: "#2CB9B0",
    secondary: "#0C0D34",
    title: "#0C0D34",
    body: "rgba(12,13,52, 0.7)",
    white: "white",
    grey: "rgba(12, 13,52, 0.05)",
    slideGray: "#F4F0EF",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  breakpoints: {},
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "SFProDisplay-Bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Regular",
      color: "body",
    },
    button: {
      fontSize: 15,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Regular",
    },
  },
};
export const Text = createText<Theme>();
export const Box = createBox<Theme>();

export type Theme = typeof theme;
export default theme;
