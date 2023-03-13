import React from "react";
import { Box } from "../../Components";
import Header from "../../Components/Header";

const OutfitIdea = () => {
  return (
    <Box>
      {/* Header Component */}
      <Header
        title="Outfit Ideas"
        left={{
          icon: "menu",
          onPress: () => console.log("pressed"),
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
