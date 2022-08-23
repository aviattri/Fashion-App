import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Text } from "../Components";

import { TouchableOpacity } from "react-native-gesture-handler";

interface ClosedButtonProps {
  onPress: () => void;
}

const SIZE = 60;

const ClosedButton = ({ onPress }: ClosedButtonProps) => {
  return (
    <TouchableOpacity {...{ onPress }}>
      <Box
        style={{
          height: SIZE,
          width: SIZE,
          borderRadius: SIZE / 2,
        }}
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
      >
        <Text variant="title1" color="secondary" textAlign="center">
          <Icon name="x" size={45} />
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default ClosedButton;
