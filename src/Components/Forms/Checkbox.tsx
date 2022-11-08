import React from "react";
import { Box, Text } from "../Theme";
import { Feather as Icon } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, onChange, checked }: CheckboxProps) => {
  return (
    <BorderlessButton
      onPress={() => onChange()}
      style={{ justifyContent: "center" }}
    >
      <Box flexDirection="row" alignItems="center">
        <Box
          marginRight="m"
          height={20}
          width={20}
          borderRadius="s"
          backgroundColor={checked ? "primary" : "white"}
          borderWidth={1}
          borderColor="primary"
          justifyContent="center"
          alignItems="center"
        >
          {checked && <Icon name="check" />}
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </BorderlessButton>
  );
};

export default Checkbox;
