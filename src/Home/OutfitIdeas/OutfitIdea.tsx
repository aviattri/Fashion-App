import React from "react";
import { Box } from "../../Components";
import Header from "../../Components/Header";
import { HomeNavigationProps } from "../../Components/Navigation";
import Background from "./Background";

const OutfitIdea = ({ navigation }: HomeNavigationProps<"OutfitIdeas">) => {
  return (
    <Box flex={1} backgroundColor="white">
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
      {/* Outfit Screen 
        // `overlay` positioned 
        // ListView compoenent 
        // Cards compoenent
      */}
      {/* Background component 
        // `absolutely` positioned 
      */}
      <Box flex={1}>
        <Background />
      </Box>
    </Box>
  );
};

export default OutfitIdea;
