import React from "react";
import { Box, Header, Text } from "../../Components";
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
      {/* Transaction Header  */}
      <Box
        padding="m"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        {/* Shopping Stats */}
        <Box alignItems="flex-start">
          <Text variant="header" color="secondary" opacity={0.3}>
            {`TOTAL SPENT`}
          </Text>
          <Text variant="title1">{`$699, 99`}</Text>
        </Box>
        {/* Button */}
        <Box backgroundColor="primaryLight" borderRadius="m" padding="s">
          <Text>All Time</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default TransactionHistory;
