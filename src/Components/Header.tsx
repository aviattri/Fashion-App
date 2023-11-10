import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RoundedIconButton from "./RoundedIconButton";
import { Box, Text } from "./Theme";
import { View } from "react-native";

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  right?: {
    icon: string;
    onPress: () => void;
  };
  dark: boolean;
}

const Header = ({ title, left, right, dark }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "background" : "secondary";
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
        name={left?.icon}
        iconRatio={0.4}
        size={44}
        onPress={left.onPress}
        align={"center"}
        {...{ color }}
      />
      <Text variant="header" {...{ color }}>
        {title.toUpperCase()}
      </Text>
      {/* Right Icon */}
      {right ? (
        <RoundedIconButton
          name={right?.icon}
          size={44}
          iconRatio={0.4}
          onPress={right.onPress}
          align={"center"}
          {...{ color }}
        />
      ) : (
        <View style={{ width: 44 }}></View>
      )}
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};

export default Header;
