import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Theme } from "./Theme";
import { Text } from "../Components";
export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  iconRatio: number;
}

const RoundedIcons = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
}: RoundedIconProps) => {
  const iconSize = size * iconRatio;

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

RoundedIcons.defaultProps = {
  iconSize: 0.7,
};

export default RoundedIcons;
