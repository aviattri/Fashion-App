import React from "react";
import { Box, Text } from "../../Components";

interface LineItemProps {
  label: string;
  value: number;
}
const LineItems = ({ label, value }: LineItemProps) => {
  return (
    <Box
      flexDirection="row"
      justifyContent={"space-between"}
      paddingVertical={"m"}
    >
      <Box>
        <Text color={"background"} variant={"title3"}>
          {label}
        </Text>
      </Box>
      <Box>
        <Text color={"primary"}>{`$${value}`}</Text>
      </Box>
    </Box>
  );
};

export default LineItems;
