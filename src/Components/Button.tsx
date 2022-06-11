import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Theme, Text } from "./Theme";
import { useTheme } from "@shopify/restyle";

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
}

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "primary" ? theme.colors.primary : theme.colors.grey;
  const color = variant === "primary" ? theme.colors.white : theme.colors.body;

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant={"button"} style={{ color: color }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  variant: "default",
};

export default Button;
