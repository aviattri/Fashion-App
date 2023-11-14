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

export const CARD_HEIGHT = 160;

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
        height={CARD_HEIGHT}
        backgroundColor={backgroundColor}
      >
        {children}
      </Box>
    </Pressable>
  );
};
