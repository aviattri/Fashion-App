import { View, ScrollView } from "react-native";
import React from "react";
import { Box, Text } from "../../Components";
import CheckboxGroup from "./CheckboxGroup";

import TextInput from "../../Components/Forms/TextInput";

const gender = [
  {
    value: "men",
    label: "For Men",
  },
  {
    value: "woman",
    label: "For Women",
  },
];

const PersonalInfo = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        margin: 20,
      }}
    >
      <Box padding={"m"}>
        <Text textAlign={"left"} variant={"body"} marginBottom="m">
          {`Account information`}
        </Text>
        {/* Question Field 1 */}
        <Box marginBottom="m">
          <TextInput
            icon="user"
            placeholder="Enter your Email"
            autoCapitalize="none"
            autoComplete="name"
          />
        </Box>
        {/* Question Field 2 */}
        <Box marginBottom="m">
          <TextInput
            icon="lock"
            placeholder="Enter your Password"
            autoCapitalize="none"
            autoComplete="password"
            secureTextEntry
          />
        </Box>
        {/* Question Field 3 */}
        <Box marginBottom="m">
          <TextInput
            icon="map-pin"
            placeholder="Address"
            autoCapitalize="none"
            autoComplete="street-address"
          />
        </Box>
        {/*  multiple choice checkbox group option */}
        <CheckboxGroup options={gender} radio />
      </Box>
    </ScrollView>
  );
};

export default PersonalInfo;
