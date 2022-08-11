import { View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Box, Text } from "./Theme";
import Button from "./Button";
import SocialLogin from "./SocialLogin";

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
        <TouchableWithoutFeedback {...{ onPress }}>
          <Text variant={"button"} color="white">
            <Text variant={"button"}>{`${title}`}</Text>
            <Text variant={"button"} color="primary">
              {`${action}`}
            </Text>
          </Text>
        </TouchableWithoutFeedback>
      </Box>
    </View>
  );
};

export default Footer;
