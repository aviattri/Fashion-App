import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RoundedIconButton from "./RoundedIconButton";
import { Box, Text } from "./Theme";

interface HeaderProps {
  left: {
    icon: String;
    onPress: () => void;
  };
  title: String;
  right: {
    icon: String;
    onPress: () => void;
  };
}

const Header = ({ title, left, right }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box
      flexDirection="row"
      style={{ marginTop: insets.top }}
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="m"
    >
      {/* Left Icon */}
      <RoundedIconButton
        name="x"
        color="white"
        size={24}
        backgroundColor="secondary"
        onPress={() => left.onPress}
      />
      <Text color="white" variant="header">
        {title.toUpperCase()}
      </Text>
      {/* Right Icon */}
      <RoundedIconButton
        name="shopping-bag"
        color="white"
        size={24}
        backgroundColor="secondary"
        onPress={() => right.onPress}
      />
    </Box>
  );
};

export default Header;
