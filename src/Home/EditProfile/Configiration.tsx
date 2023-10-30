import { View, ScrollView } from "react-native";
import React from "react";
import { Box, Text } from "../../Components";
import CheckboxGroup from "./CheckboxGroup";

const outfits = [
  {
    value: "men",
    label: "For Men",
  },
  {
    value: "woman",
    label: "For Women",
  },
  {
    value: "both",
    label: "For Both",
  },
];
const preferredBrands = [
  {
    value: "addidas",
    label: "Addidas",
  },
  {
    value: "nike",
    label: "Nike",
  },
  {
    value: "converse",
    label: "Converse",
  },
  {
    value: "tommy-hilfiger",
    label: "Tommy Hilfiger",
  },
  {
    value: "billionaire-boy-club",
    label: "Billionaire Boy Club",
  },
  {
    value: "jordan",
    label: "Jordan",
  },
  {
    value: "le-coq-sportif",
    label: "Le Coq Sportif",
  },
  {
    value: "see-all",
    label: "See All",
  },
];

const Configiration = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        margin: 20,
      }}
    >
      {/* single choice checkbox group option */}
      <Box padding={"m"}>
        {/* Question Label */}
        <Text variant={"body"} textAlign={"left"}>
          {`What kind of outfit do you usually wear?`}
        </Text>
      </Box>
      <CheckboxGroup options={outfits} />

      {/* single choice checkbox group option */}
      <Box padding={"m"}>
        {/* Question Label */}
        <Text textAlign={"left"} variant={"body"}>{`My Preferred Brands`}</Text>
      </Box>
      <CheckboxGroup options={preferredBrands} />
    </ScrollView>
  );
};

export default Configiration;
