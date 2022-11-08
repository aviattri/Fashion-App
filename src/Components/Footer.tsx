import { View } from "react-native";
import React from "react";
import { Box, Text } from "./Theme";
import SocialLogin from "./SocialLogin";
import { BorderlessButton } from "react-native-gesture-handler";

interface FooterProps {
  title: string;
  onPress: () => void;
  action: string;
}

const Footer = ({ title, onPress, action }: FooterProps) => {
  return (
    <View>
      <SocialLogin />
      <Box alignItems="center" marginTop="m">
        <BorderlessButton {...{ onPress }}>
          <Text variant={"button"} color="white">
            <Text variant={"button"}>{`${title}`}</Text>
            <Text variant={"button"} color="primary">
              {`${action}`}
            </Text>
          </Text>
        </BorderlessButton>
      </Box>
    </View>
  );
};

export default Footer;
