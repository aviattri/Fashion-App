import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  contaienr: {
    borderRadius: 30,
    width: 245,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "SFProText-Semibold",
  },
});
interface ButtonProps {
  label: string;
  variant: "default" | "primary";
  onPress: () => void;
}

const Button = ({ label, variant, onPress }: ButtonProps) => {
  const backgroundColor =
    variant === "primary" ? "#2CB9B0" : "rgba(12, 13,52, 0.05)";

  const color = variant === "primary" ? "white" : "#0C0D34";
  return (
    <TouchableOpacity
      style={[styles.contaienr, { backgroundColor: backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={[styles.buttonText, { color: color }]}>{label}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  variant: "default",
};

export default Button;
