import * as React from "react";
import {
  assets as AuthenticationAssets,
  AuthenticationNavigator,
} from "./src/Authentication";
import { LoadAssets } from "./src/Components";
import { ThemeProvider } from "./src/Components/Theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeNavigator, assets as HomeAssets } from "./src/Home";
import { AppRoutes } from "./src/Components/Navigation";
const assets = [...AuthenticationAssets, ...HomeAssets];

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SFPro-Display-Bold.ttf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SFPro-Display-Semibold.ttf"),
  "SFProDisplay-Regular": require("./assets/fonts/SFPro-Display-Regular.ttf"),
  "SFProDisplay-Medium": require("./assets/fonts/SFPro-Display-Medium.ttf"),
};

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <LoadAssets {...{ fonts, assets }}>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
            />
            <AppStack.Screen name="Home" component={HomeNavigator} />
          </AppStack.Navigator>
        </LoadAssets>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
