import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import React, { forwardRef, RefObject } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { useTheme, Box } from "../Theme";
import RoundedIcons from "../RoundedIcons";

interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched: boolean;
  error?: string;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ icon, touched, error, ...props }, ref) => {
    const theme = useTheme();
    const reColor = !touched ? "text" : error ? "danger" : "primary";
    const color = theme.colors[reColor];
    const SIZE = theme.borderRadii.m * 2.5;

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
          <Icon
            name={icon}
            {...{ color }}
            size={16}
            style={{ textAlign: "center" }}
          />
        </Box>
        <Box flex={1}>
          <RNTextInput
            underlineColorAndroid="transparent"
            placeholderTextColor={color}
            {...props}
            {...{ ref }}
          />
        </Box>
        {touched && (
          <RoundedIcons
            name={!error ? "check" : "x"}
            size={SIZE}
            backgroundColor={!error ? "primary" : "danger"}
            color="white"
          />
        )}
      </Box>
    );
  }
);

export default TextInput;
