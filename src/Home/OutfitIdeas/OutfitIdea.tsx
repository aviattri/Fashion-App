import React from "react";
import { Box } from "../../Components";
import Header from "../../Components/Header";
import { HomeNavigationProps } from "../../Components/Navigation";
import Background from "./Background";
import Card from "./Card";

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
      {/* ListView compoenent  */}
      {/* Background component */}
      <Box flex={1}>
        {/* `absolutely` positioned  */}
        <Background />
        {/* Cards compoenent
             -> The color, scale, and the translation of the card depends on its position
        */}
        <Card position={1} />
        <Card position={0.5} />
        <Card position={0} />
      </Box>
    </Box>
  );
};

export default OutfitIdea;
