import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Box, useTheme } from "../../Components";

interface BackgroundProps {}

const Background = () => {
  const theme = useTheme();
  return (
    // Absolute positioned box with three sub boxes
    <View style={StyleSheet.absoluteFill}>
      <Box flex={1 / 3} backgroundColor="lightBlue">
        {/* Overlayed Box with curved bottom right border*/}
        <Box flex={1} backgroundColor="white" borderBottomRightRadius="xl" />
      </Box>
      <Box flex={1 / 3}>
        {/* Primary Flex Box */}
        <Box flex={1} backgroundColor="white" />
        {/* Secondary Flex Box */}
        <Box flex={1} backgroundColor="secondary" />
        {/* Overlayed Image */}
        <Image
          source={require("../../../assets/background.png")}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderTopLeftRadius: theme.borderRadii.xl,
            borderBottomRightRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
      <Box flex={1 / 3} backgroundColor="lightBlue">
        {/* primary Flex Box */}
        <Box flex={1} backgroundColor="secondary" borderTopLeftRadius="xl" />
      </Box>
    </View>
  );
};

export default Background;