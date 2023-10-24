import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Theme } from "./Theme";
import { Text } from "../Components";
export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"] | undefined;
  iconRatio: number;
  align: "center" | "flex-start" | "flex-end";
}

const RoundedIcons = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
  align,
}: RoundedIconProps) => {
  const iconSize = size * iconRatio;

  return (
    <Box
      height={size}
      width={size}
      alignItems={align}
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
  align: "center",
};

export default RoundedIcons;
