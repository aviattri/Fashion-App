import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import Category from "./Category";

const categories = [
  {
    id: "newIn",
    title: "New In",
    color: "#FFE8E9",
  },
  {
    id: "summer",
    title: "Summer",
    color: "#F1E0FF",
  },
  {
    id: "summer",
    title: "Summer",
    color: "#F1E0FF",
  },
  {
    id: "activewear",
    title: "Activewear",
    color: "#BFEAF5",
  },
  {
    id: "outlet",
    title: "Outlet",
    color: "#F1E0FF",
  },
  {
    id: "accesories",
    title: "Accesories",
    color: "#FFE8E9",
  },
];

const Categories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <Category key={category?.id} category={category} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
