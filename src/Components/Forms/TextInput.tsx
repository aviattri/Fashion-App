import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { useTheme, Box } from "../Theme";

interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched: boolean;
  error?: string;
}

const TextInput = ({ icon, touched, error, ...props }: TextInputProps) => {
  const theme = useTheme();
  const reColor = !touched ? "text" : error ? "danger" : "primary";
  const color = theme.colors[reColor];
  const SIZE = theme.borderRadii.m * 2;

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      height={44}
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
      paddingHorizontal="s"
    >
      <Box padding="s">
        <Icon name={icon} alignItems="center" {...{ color }} size={16} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          {...props}
        />
      </Box>
      {touched && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          alignItems="center"
          backgroundColor={!error ? "primary" : "danger"}
        >
          <Icon name={!error ? "check" : "x"} color="white" size={16} />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
