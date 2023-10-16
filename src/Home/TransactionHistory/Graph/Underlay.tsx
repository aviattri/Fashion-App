import { StyleSheet } from "react-native";
import React from "react";
import { Box, useTheme, Text } from "../../../Components";
import { lerp } from "./Scale";

interface UnderlayProps {
  dates: number[];
  minY: number;
  maxY: number;
  step: number;
}

const formatter = Intl.DateTimeFormat("en", { month: "short" });

const Underlay = ({ dates, minY, maxY, step }: UnderlayProps) => {
  console.log("dates", dates);
  const theme = useTheme();

  return (
    <Box style={StyleSheet.absoluteFill}>
      {/* Y-Scale */}
      <Box flex={1}>
        {[0, 0.33, 0.66, 1].map((t) => {
          return (
            <Box key={t} flexDirection="row" alignItems="center">
              {/* Linear interpolation */}
              <Box width={theme.spacing.l}>
                <Text textAlign="right">{Math.round(lerp(minY, maxY, t))}</Text>
              </Box>
              {/* X-axis Lines */}
              <Box flex={1} height={1} backgroundColor="grey" />
            </Box>
          );
        })}
      </Box>
      {/* X-Scale */}
      <Box
        marginLeft="l"
        alignItems="center"
        height={theme.spacing.l}
        flexDirection="row"
      >
        {dates.map((date, index) => (
          <Box width={step}>
            <Text key={index} color="darkGrey" textAlign="center">
              {formatter.format(new Date(date))}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Underlay;
