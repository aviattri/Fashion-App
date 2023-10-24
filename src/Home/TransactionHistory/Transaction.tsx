import React from "react";
import { DataPoint } from "./Graph";
import { Box, Text } from "../../Components";
import { BorderlessButton } from "react-native-gesture-handler";
import moment from "moment";

interface TransactionProps {
  transaction: DataPoint;
}

const Transaction = ({ transaction }: TransactionProps) => {
  return (
    // Container
    <Box
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      marginTop="l"
    >
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
        <Text color="info">{`$${transaction?.value} - ${moment(
          transaction.date
        ).format("DD MMMM YYYY")}`}</Text>
      </Box>
      {/* User Action */}
      <Box width={100} alignItems="center">
        <BorderlessButton onPress={() => console.log("see more")}>
          <Text
            variant="title3"
            fontSize={14}
            color="secondary"
          >{`See  More`}</Text>
        </BorderlessButton>
      </Box>
    </Box>
  );
};

export default Transaction;
