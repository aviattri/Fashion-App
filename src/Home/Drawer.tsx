import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";
import { Box } from "../Components/Theme";

const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;
const Drawer = (props: DrawerContentComponentProps<DrawerContentOptions>) => {
  console.log({ props });
  return (
    <Box flex={1}>
      {/* Top Design */}
      <Box flex={0.2} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
        />
      </Box>
      {/* Top-Design-Bottom-Left-Curve */}
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box flex={1} backgroundColor="primary" />
        {/* White OverlAY */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
        />
      </Box>
      {/* Bottom Design */}
      {/* Image */}
      <Box {...{ width, height }}>
        <Image
          source={require("../../assets/pattern1.png")}
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderTopLeftRadius="xl"
        />
      </Box>
    </Box>
  );
};

export default Drawer;
