import { View, ScrollView } from "react-native";
import React from "react";
import { Box, Text } from "../../Components";
import CheckboxGroup from "./CheckboxGroup";
import RoundedCheckboxGroup from "./RoundedCheckboxGroup";

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
const size = [
  {
    value: "s",
  },
  {
    value: "m",
  },
  {
    value: "l",
  },
  {
    value: "xl",
  },
  {
    value: "xll",
  },
];
const colors = [
  {
    value: "#0C0D34",
  },
  {
    value: "#FF0058",
  },
  {
    value: "#50B9DE",
  },
  {
    value: "#00D99A",
  },
  {
    value: "#FE5E33",
  },
];

const Configiration = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        margin: 20,
      }}
    >
      <Box padding={"m"}>
        {/* Question Label 1 */}
        <Text variant={"body"} textAlign={"left"}>
          {`What kind of outfit do you usually wear?`}
        </Text>
        {/* single choice checkbox group option */}
        <CheckboxGroup options={outfits} radio />

        {/* Question Label 2 */}
        <Text textAlign={"left"} variant={"body"}>
          {`What is your clothing size?`}
        </Text>
        {/* multiple choice checkbox group option */}
        <RoundedCheckboxGroup options={size} />

        {/* Question Label 3 */}
        <Text textAlign={"left"} variant={"body"}>
          {`My preferred clothing colors`}
        </Text>
        {/* multiple choice checkbox group option */}
        <RoundedCheckboxGroup options={colors} valueIsColor />

        {/* Question Label 4 */}
        <Text textAlign={"left"} variant={"body"}>
          {`My Preferred Brands`}
        </Text>
        {/*  multiple choice checkbox group option */}
        <CheckboxGroup options={preferredBrands} />
      </Box>
    </ScrollView>
  );
};

export default Configiration;
