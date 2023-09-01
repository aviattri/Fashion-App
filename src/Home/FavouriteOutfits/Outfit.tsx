import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Box } from "../../Components/Theme";

interface OutfitProps {
  outfit: { color: string; aspectRatio: number; id: number };
  width: number;
}

const Outfit = ({
  outfit: { color: backgroundColor, aspectRatio },
  width,
}: OutfitProps) => {
  return (
    <Box
      borderRadius="m"
      marginBottom="m"
      style={{ backgroundColor, width, height: width * aspectRatio }}
    ></Box>
  );
};

export default Outfit;
