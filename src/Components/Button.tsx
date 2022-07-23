import { TouchableOpacity, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
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
  variant: "default" | "primary" | "transparent";
  onPress: () => void;
  children?: ReactNode;
}

const Button = ({ label, variant, onPress, children }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "primary"
      ? theme.colors.primary
      : variant === "transparent"
      ? "transparent"
      : theme.colors.grey;
  const color =
    variant === "primary" ? theme.colors.white : theme.colors.secondary;

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: backgroundColor }]}
      {...{ onPress }}
    >
      {children ? (
        children
      ) : (
        <Text variant={"button"} style={{ color: color }}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  variant: "default",
};

export default Button;
