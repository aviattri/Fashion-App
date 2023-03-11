import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import { HomeRoutes } from "../Components/Navigation";

import DrawerContent, { DRAWER_WIDTH } from "./Drawer";
import OutfitIdeas from "./OutfitIdeas";

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

// Thu 3pm
// https://youtu.be/Cd4vG_A-5EE?list=PLkOyNuxGl9jyhndcnbFcgNM81fZak7Rbw&t=1195
// working on the overlay image at the bottom
