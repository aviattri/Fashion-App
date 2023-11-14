import React from "react";
import { Box } from "../../Components";
import { Text, palette, useTheme } from "../../Components/Theme";
import SwipeableRow from "./SwipeableRow";

interface ItemProps {
  onDelete: () => void;
}

const Item = ({ onDelete }: ItemProps) => {
  const theme = useTheme();
  const height = 120 + theme.spacing.m * 2;

  return (
    <SwipeableRow onDelete={onDelete} height={height}>
      <Box padding={"m"} flexDirection={"row"}>
        <Box
          width={120}
          height={120}
          borderRadius={"m"}
          style={{ backgroundColor: "#BFEAF5" }}
        />
        {/* Information */}
        <Box
          flex={1}
          alignItems={"flex-start"}
          justifyContent={"center"}
          padding={"m"}
        >
          <Text variant={"header"}>{`Size M, L `}</Text>
          <Text variant={"title3"}>{`Short Sleeve organic Top`}</Text>
          <Text
            variant={"title3"}
            marginBottom={"s"}
            color={"primary"}
          >{`$29.99`}</Text>
        </Box>
        {/* Num. of Items */}
        <Box justifyContent={"center"}>
          <Box
            backgroundColor={"secondary"}
            style={{
              borderRadius: 12,
              justifyContent: "center",
              width: 24,
              height: 24,
            }}
          >
            <Text variant={"header"} color={"background"}>{`x2`}</Text>
          </Box>
        </Box>
      </Box>
    </SwipeableRow>
  );
};

export default Item;
