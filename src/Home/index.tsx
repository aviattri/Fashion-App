import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import { HomeRoutes } from "../Components/Navigation";

import DrawerContent, { DRAWER_WIDTH } from "./Drawer";
import OutfitIdeas from "./OutfitIdeas";

// Import Assets in bunch
export { assets } from "./Drawer";

const Drawer = createDrawerNavigator<HomeRoutes>();

export const HomeNavigator = () => (
  <Drawer.Navigator
    drawerContent={DrawerContent}
    drawerStyle={{
      width: DRAWER_WIDTH,
    }}
  >
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
  </Drawer.Navigator>
);
