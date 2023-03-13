import React from "react";
import { Box } from "../../Components";
import Header from "../../Components/Header";
import { HomeNavigationProps } from "../../Components/Navigation";

const OutfitIdea = ({ navigation }: HomeNavigationProps<"OutfitIdeas">) => {
  return (
    <Box>
      {/* Header Component */}
      <Header
        title="Outfit Ideas"
        left={{
          icon: "menu",
          onPress: () => navigation.openDrawer(),
        }}
        right={{
          icon: "shopping-bag",
          onPress: () => console.log("pressed"),
        }}
      />
    </Box>
  );
};

export default OutfitIdea;
