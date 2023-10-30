import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, Theme } from "./Theme";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    width: 245,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface ButtonProps {
  label: string;
  variant: "default" | "primary";
  onPress: () => void;
  style?: RectButtonProps["style"];
}

const Button = ({ label, variant, onPress, style }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "primary" ? theme.colors.primary : theme.colors.background2;
  const color =
    variant === "primary" ? theme.colors.background : theme.colors.secondary;

  return (
    <RectButton
      style={[styles.container, style, { backgroundColor: backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant={"button"} style={{ color: color }}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = {
  variant: "default",
};

export default Button;
