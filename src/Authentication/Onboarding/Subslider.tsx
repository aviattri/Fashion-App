import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../../Components/Button";
import { Text } from "../../Components/Theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    color: "#0C0D34",
    textAlign: "center",
    paddingHorizontal: 24,
    marginBottom: 40,
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
      <Text variant={"title2"} style={styles.title}>
        {title}
      </Text>
      <Text variant={"body"} style={styles.description}>
        {description}
      </Text>
      <Button
        label={last ? "Let's get Started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};

export default Subslider;
