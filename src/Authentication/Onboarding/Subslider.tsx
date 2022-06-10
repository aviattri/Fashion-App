import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../Components/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "SFProText-Semibold",
    fontSize: 24,
    color: "#0C0D34",
    textAlign: "center",
    lineHeight: 30,
    marginBottom: 12,
  },
  description: {
    fontFamily: "SFProText-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#0C0D34",
    textAlign: "center",
    padding: 24,
    marginBottom: 24,
  },
});

interface SubsliderProps {
  title: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const Subslider = ({ title, description, last, onPress }: SubsliderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get Started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};

export default Subslider;
