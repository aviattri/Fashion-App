import React from "react";
import { DataPoint } from "./Graph";
import { Box, Text } from "../../Components";

interface TransactionProps {
  transaction: DataPoint;
}

const Transaction = ({ transaction }: TransactionProps) => {
  return (
    //    Container
    <Box flex={1} flexDirection="row" justifyContent="space-between" margin="s">
      {/* Details */}
      <Box flexDirection="column" alignItems="flex-start">
        <Box flexDirection="row" alignItems="center">
          <Box
            backgroundColor={transaction?.color}
            marginRight="s"
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
            }}
          />
          <Text variant="title3">{`#${transaction?.id}`}</Text>
        </Box>
        <Text color="secondary">{`$${transaction?.value} - ${new Date(
          transaction?.date
        ).toLocaleDateString()}`}</Text>
      </Box>
      {/* User Action */}
      <Box>
        <Text color="secondary">{`See  More`}</Text>
      </Box>
    </Box>
  );
};

export default Transaction;
