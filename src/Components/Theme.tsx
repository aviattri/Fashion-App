import {
  createBox,
  createText,
  useTheme as useReTheme,
} from "@shopify/restyle";

import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export const theme = {
  colors: {
    primary: "#2CB9B0",
    secondary: "#0C0D34",
    primaryLight: "#E7F9F7",
    title: "#0C0D34",
    body: "rgba(12,13,52, 0.7)",
    text: "rgba(12,13,52, 0.7)",
    white: "white",
    grey: "rgba(12, 13,52, 0.05)",
    slideGray: "#F4F0EF",
    darkGrey: "#8A8D90",
    lightGrey: "#FAFAFA",
    danger: "#FF0058",
    orange: "#FFA500",
    yellow: "#FFFF00",
    pink: "#FFC0CB",
    violet: "#EE82EE",
    green: "#008000",
    purple: "#800080",
    lightBlue: "#BFEAF5",
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
    defaults: {
      fontSize: 13,
      fontFamily: "SFProDisplay-Regular",
      textAlign: "center",
      color: "primary",
    },
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
    primary: {
      color: "primary",
      textAlign: "center",
    },
    header: {
      fontSize: 12,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
  },
};
export const Text = createText<Theme>();
export const Box = createBox<Theme>();

export type Theme = typeof theme;
export default theme;
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
  };
