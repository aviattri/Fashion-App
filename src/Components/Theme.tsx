import React, { ReactNode } from "react";
import { Dimensions, ImageStyle, TextStyle, ViewStyle } from "react-native";

import {
  createBox,
  createText,
  useTheme as useReTheme,
  ThemeProvider as ReStyleThemeProvider,
} from "@shopify/restyle";

const { width } = Dimensions.get("window");
export const aspectRatio = width / 375;

export const palette = {
  white: "white",
  orange: "#FFA500",
  yellow: "#FFFF00",
  pink: "#FFC0CB",
  violet: "#EE82EE",
  // green: "#008000",
  purple: "#800080",
  lightBlue: "#BFEAF5",
  green: "#2CB9B0",
  red: "#FF0058",
};

const theme = {
  colors: {
    primary: palette.green,
    secondary: "#0C0D34",
    danger: "#FF0058",
    text: "rgba(12,13,52, 0.7)",
    background: palette.white,
    background2: "#F4F0EF",
    info: "#808080",
    textContrast: palette.white,
    primaryLight: "#E7F9F7",
    editCart: palette.lightBlue,
    graph1: palette.orange,
    graph2: palette.red,
    drawer1: palette.orange,
    drawer2: palette.yellow,
    drawer3: palette.pink,
    drawer4: palette.violet,

    title: "#0C0D34",
    body: "rgba(12,13,52, 0.7)",
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
      color: "background",
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
    title3: {
      fontSize: 16,
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
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  palette: {
    white: "white",
    orange: "#FFA500",
    yellow: "#FFFF00",
    pink: "#FFC0CB",
    violet: "#EE82EE",
    // green: "#008000",
    purple: "#800080",
    lightBlue: "#BFEAF5",
    green: "#2CB9B0",
    red: "#FF0058",
  },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <ReStyleThemeProvider {...{ theme }}>{children}</ReStyleThemeProvider>
);
export const Text = createText<Theme>();
export const Box = createBox<Theme>();

export type Theme = typeof theme;
export default theme;
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export const makeStyles =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
  };
