import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import { CartContainer } from "./CartContainer";
import Header from "../../Components/Header";
import { HomeNavigationProps } from "../../Components/Navigation";
import { Box } from "../../Components";
import { ScrollView } from "react-native-gesture-handler";
import Item from "./Item";
import Svg, { Path } from "react-native-svg";
import { Text, aspectRatio, useTheme } from "../../Components/Theme";
import Checkout from "./Checkout";

const { width } = Dimensions.get("window");
const height = 100 * aspectRatio;

//TODO:  investigate how to construct the path to SVG Shape
const d = "M 0 0 A 50 50 0 0 0 50 50 H 325 A 50 50 0 0 1 375 100 V 0 Z";

const defaultItems = [
  {
    id: 1,
    size: "M, L",
    description: "Short Sleeve organic Top",
    price: "$29.99",
    total: "x2",
  },
  {
    id: 2,
    size: "M, L",
    description: "Short Sleeve organic Top",
    price: "$29.99",
    total: "x2",
  },
  {
    id: 3,
    size: "M, L",
    description: "Short Sleeve organic Top",
    price: "$29.99",
    total: "x2",
  },
  {
    id: 4,
    size: "M, L",
    description: "Short Sleeve organic Top",
    price: "$29.99",
    total: "x2",
  },
];

const Cart = ({ navigation }: HomeNavigationProps<"Cart">) => {
  const [items, setItems] = React.useState(defaultItems);

  const theme = useTheme();
  return (
    <CartContainer CheckoutComponent={Checkout}>
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

      <Box flex={1}>
        <ScrollView
          style={{
            borderBottomLeftRadius: theme.borderRadii.xl,
            borderBottomRightRadius: theme.borderRadii.xl,
          }}
          contentContainerStyle={{
            paddingVertical: 50 * aspectRatio,
          }}
          showsVerticalScrollIndicator={false}
        >
          {items.map((item, index) => (
            <Item
              key={item?.id}
              onDelete={() => {
                items.splice(index, 1);
                setItems(items.concat());
              }}
            />
          ))}
        </ScrollView>
        {/* Header SVG Shape */}
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height,
          }}
        >
          <Svg style={StyleSheet.absoluteFill} viewBox="0 0 375 100">
            <Path d={d} fill={theme.colors.primary} />
          </Svg>
          {/* Overlay Text */}
          <Text variant="title2" color="background">
            {`3 Items Added`}
          </Text>
        </Box>
      </Box>
    </CartContainer>
  );
};

export default Cart;
