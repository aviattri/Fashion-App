import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import { CartContainer } from "./CartContainer";
import Header from "../../Components/Header";
import { HomeNavigationProps } from "../../Components/Navigation";
import { Box } from "../../Components";
import { ScrollView } from "react-native-gesture-handler";
import Item from "./Item";
import Svg, { Path } from "react-native-svg";
import theme, { Text, aspectRatio, useTheme } from "../../Components/Theme";

const { width } = Dimensions.get("window");
const height = 100 * aspectRatio;

//TODO:  investigate how to construct the path to SVG Shape
const d = "M 0 0 A 50 50 0 0 0 50 50 H 325 A 50 50 0 0 1 375 100 V 0 Z";

const Cart = ({ navigation }: HomeNavigationProps<"Cart">) => {
  const theme = useTheme();
  return (
    <CartContainer>
      <Box backgroundColor={"primary"}>
        <Header
          dark
          left={{
            icon: "arrow-left",
            onPress: () => navigation.goBack(),
          }}
          title={"Shopping Cart"}
        />
      </Box>
      {/* Header SVG Shape */}
      <Box width={width} height={height}>
        <Svg style={StyleSheet.absoluteFill} viewBox="0 0 375 100">
          <Path d={d} fill={theme.colors.primary} />
        </Svg>
        {/* Overlay Text */}
        <Text variant="title2" color="background">
          {`3 Items Added`}
        </Text>
      </Box>
      <ScrollView>
        <Item />
      </ScrollView>
    </CartContainer>
  );
};

export default Cart;
