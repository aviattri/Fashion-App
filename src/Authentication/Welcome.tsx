import { View, Image, Dimensions } from "react-native";
import React from "react";
import { Box, useTheme, Text } from "../Components/Theme";
import Button from "../Components/Button";
import {
  AuthNavigationProps,
  Routes,
  StackNavigationProps,
} from "../Components/Navigation";
import { BorderlessButton } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const picture = {
  src: require("../../assets/5.png"),
  width: 3383,
  height: 5074,
};
export const assets = [picture.src];

const Welcome = ({ navigation }: AuthNavigationProps<"Welcome">) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="background">
      {/* Banner */}
      <Box
        flex={1}
        borderBottomEndRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      {/* Info Button */}
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="background"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          flex={1}
          padding="xl"
        >
          <Text variant="title2">{`Let's get started`}</Text>
          <Text
            variant="body"
            textAlign="center"
          >{`Login to your account below or signup for an amazing experince`}</Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            label="Join us it's free"
            onPress={() => navigation.navigate("SignUp")}
          />
          <BorderlessButton
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text variant="button" color="secondary">
              Forgot Password
            </Text>
          </BorderlessButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
