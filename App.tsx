import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Onboarding, Welcome } from "./src/Authentication";
import { LoadAssets, theme } from "./src/Components";
import { ThemeProvider } from "@shopify/restyle";
const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SFPro-Display-Bold.ttf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SFPro-Display-Semibold.ttf"),
  "SFProDisplay-Regular": require("./assets/fonts/SFPro-Display-Regular.ttf"),
  "SFProDisplay-Medium": require("./assets/fonts/SFPro-Display-Medium.ttf"),
};

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <AuthenticationNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
}
