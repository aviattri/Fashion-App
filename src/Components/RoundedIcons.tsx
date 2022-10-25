import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Theme } from "./Theme";
import { Text } from "../Components";
export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
}

const RoundedIcons = ({
  name,
  size,
  color,
  backgroundColor,
}: RoundedIconProps) => {
  const iconSize = size * 0.7;

  return (
    <Box
      height={size}
      width={size}
      alignItems="center"
      justifyContent="center"
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor }}
    >
      <Text
        variant="primary"
        style={{ width: iconSize, height: iconSize }}
        {...{ color }}
      >
        <Icon size={iconSize} {...{ name }} />
      </Text>
    </Box>
  );
};

export default RoundedIcons;
