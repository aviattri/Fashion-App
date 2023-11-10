import { View, Text } from "react-native";
import React from "react";
import { Box } from "../../Components";
import { palette } from "../../Components/Theme";

interface ItemProps {}

const Item = ({ Item }: ItemProps) => {
  return (
    <Box padding={"m"} flexDirection={"row"}>
      <Box
        width={120}
        height={120}
        borderRadius={"m"}
        style={{ backgroundColor: palette.orange }}
      />
    </Box>
  );
};

export default Item;
