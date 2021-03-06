import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../Components/Navigation";
import Onboarding, { assets as onBoardingAssets } from "./Onboarding";
import Welcome, { assets as welcomeAssets } from "./Welcome";
import Login from "./Login";

export const assets = [...onBoardingAssets, ...welcomeAssets];

const AuthenticationStack = createStackNavigator<Routes>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};
