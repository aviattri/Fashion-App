import React from "react";
import { Box, Header } from "../../Components";
import { HomeNavigationProps } from "../../Components/Navigation";

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<"TransactionHistory">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "share", onPress: () => console.log("share") }}
        title={"Transaction Histroy"}
      />
    </Box>
  );
};

export default TransactionHistory;
