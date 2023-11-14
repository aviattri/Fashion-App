import React from "react";
import { CardLayout } from "./CardLayout";
import { Box } from "../../Components";
import { Feather as Icon } from "@expo/vector-icons";
import theme from "../../Components/Theme";

const AddCard = () => {
  return (
    <CardLayout onPress={() => null} backgroundColor={"secondary"}>
      <Box
        flex={1}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"m"}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        }}
      >
        <Icon color={theme.palette.white} name="plus" size={32} />
      </Box>
    </CardLayout>
  );
};

export default AddCard;
