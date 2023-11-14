import { Pressable } from "react-native";
import React from "react";
import { Box } from "../../Components";
import { BoxProps } from "@shopify/restyle";
import Theme from "../../Components/Theme";

interface CardLayoutProps {
  children: React.ReactNode;
  onPress: () => void;
  backgroundColor: BoxProps<typeof Theme>["backgroundColor"];
}

export const CardLayout = ({
  onPress,
  backgroundColor,
  children,
}: CardLayoutProps) => {
  return (
    <Pressable onPress={onPress}>
      {/* Card Container */}
      <Box
        padding="m"
        marginLeft={"m"}
        borderRadius={"m"}
        width={120}
        height={160}
        backgroundColor={backgroundColor}
      >
        {children}
      </Box>
    </Pressable>
  );
};
