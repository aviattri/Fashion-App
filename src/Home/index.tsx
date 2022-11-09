import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import { HomeRoutes } from "../Components/Navigation";
import OutfitIdeas from "./OutfitIdeas";

const Drawer = createDrawerNavigator<HomeRoutes>();

export const HomeNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
  </Drawer.Navigator>
);
