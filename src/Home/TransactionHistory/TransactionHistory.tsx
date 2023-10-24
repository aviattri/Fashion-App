import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import { Box, Header, Text, makeStyles } from "../../Components";
import { HomeNavigationProps } from "../../Components/Navigation";
import Graph, { DataPoint } from "./Graph/Graph";
import Transaction from "./Transaction";
import { ScrollView } from "react-native-gesture-handler";
import TopCurve from "./TopCurve";

const footerHeight = Dimensions.get("window").width / 3;
const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  scrollView: {
    paddingBottom: footerHeight,
  },
}));

const startDate = new Date("2023-09-01").getTime();
const numberOfMonths = 6;

const data: DataPoint[] = [
  {
    date: new Date("2023-09-01").getTime(),
    value: 139.51,
    color: "primary",
    id: 151422,
  },
  {
    date: new Date("2023-11-01").getTime(),
    value: 231.44,
    color: "graph1",
    id: 241122,
  },

  {
    date: new Date("2024-01-01").getTime(),
    value: 193.22,
    color: "graph2",
    id: 818222,
  },
];

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<"TransactionHistory">) => {
  const styles = useStyles();
  return (
    <Box flex={1} backgroundColor="background">
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
        <Graph
          data={data}
          numberOfMonths={numberOfMonths}
          startDate={startDate}
        />
        {/* Transactions */}
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {data.map((transaction) => (
            <Transaction key={transaction?.id} transaction={transaction} />
          ))}
        </ScrollView>
      </Box>
      {/* Footer */}
      <TopCurve {...{ footerHeight }} />
      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        height={footerHeight}
      >
        <Image
          style={styles.footer}
          source={require("../../../assets/pattern3.png")}
        />
      </Box>
    </Box>
  );
};

export default TransactionHistory;
