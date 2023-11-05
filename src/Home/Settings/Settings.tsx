import React from "react";
import { Box, Header } from "../../Components";
import { HomeNavigationProps } from "../../Components/Navigation";
import Notification from "./Notification";

const Settings = ({ navigation }: HomeNavigationProps<"Settings">) => {
  return (
    <Box flex={1} backgroundColor="background">
      <Header
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "share", onPress: () => console.log("share") }}
        title={"Notifications"}
      />
      {/* Content */}
      <Box padding={"m"} flex={1}>
        {/* Setting 1*/}
        <Notification
          title="Outfit Ideas"
          description="Recive Daily Notifications"
        />
        {/* Setting 2*/}
        <Notification
          title="Discounts & Sales"
          description="Buy the stuff you love for the less"
        />
        {/* Setting 3*/}
        <Notification
          title="Stock Notifications"
          description="If the product you ❤️ comes back in stock"
        />
        {/* Setting 3*/}
        <Notification
          title="New Stuff"
          description="Hear it first, Wear it First"
        />
      </Box>
    </Box>
  );
};

export default Settings;
