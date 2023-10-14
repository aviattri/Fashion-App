import React from "react";
import { Box, Header, Text } from "../../Components";
import { HomeNavigationProps } from "../../Components/Navigation";
import Graph from "./Graph";

const data = [
  {
    date: new Date("2023-09-01").getTime(),
    value: 0,
  },
  {
    date: new Date("2023-10-01").getTime(),
    value: 0,
  },
  {
    date: new Date("2023-11-01").getTime(),
    value: 139.51,
  },
  {
    date: new Date("2023-12-01").getTime(),
    value: 231.44,
  },
  {
    date: new Date("2024-01-01").getTime(),
    value: 0,
  },
  {
    date: new Date("2024-02-01").getTime(),
    value: 193.22,
  },
  {
    date: new Date("2023-03-01").getTime(),
    value: 0,
  },
];
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

      {/* User Total Spent Details  */}
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
      {/* User Shopping Stats   */}
      <Box padding="m">
        <Graph data={data} />
      </Box>
    </Box>
  );
};

export default TransactionHistory;
