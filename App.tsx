import * as React from "react";
import {
  assets as AuthenticationAssets,
  AuthenticationNavigator,
} from "./src/Authentication";
import { LoadAssets, theme } from "./src/Components";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";

const assets = [...AuthenticationAssets];

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SFPro-Display-Bold.ttf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SFPro-Display-Semibold.ttf"),
  "SFProDisplay-Regular": require("./assets/fonts/SFPro-Display-Regular.ttf"),
  "SFProDisplay-Medium": require("./assets/fonts/SFPro-Display-Medium.ttf"),
};

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider {...{ theme }}>
        <LoadAssets {...{ fonts, assets }}>
          <AuthenticationNavigator />
        </LoadAssets>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
