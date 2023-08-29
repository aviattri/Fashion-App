import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Box } from "../../Components/Theme";
import Header from "../../Components/Header";
import { HomeNavigationProps } from "../../Components/Navigation";
import Footer from "./Footer";

interface FavouriteOutfits {}

const FavouriteOutfits = ({
  navigation,
}: HomeNavigationProps<"FavouriteOutfits">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Outfit Ideas"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <ScrollView />
      <Footer />
    </Box>
  );
};

export default FavouriteOutfits;
