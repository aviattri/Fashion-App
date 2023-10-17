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
export const MARGIN = "xl";
export const ROW_HEIGHT = 16;

const formatter = Intl.DateTimeFormat("en", { month: "short" });

const Underlay = ({ dates, minY, maxY, step }: UnderlayProps) => {
  console.log("dates", dates);
  const theme = useTheme();

  return (
    <Box style={StyleSheet.absoluteFill}>
      {/* Y-Scale */}
      <Box flex={1} justifyContent="space-between">
        {[1, 0.66, 0.33, 0].map((t) => {
          return (
            <Box
              key={t}
              flexDirection="row"
              alignItems="center"
              height={ROW_HEIGHT}
              style={{
                top: t === 0 ? ROW_HEIGHT / 2 : t === 1 ? -ROW_HEIGHT / 2 : 0,
              }}
            >
              {/* Linear interpolation */}
              <Box width={theme.spacing[MARGIN]} paddingRight="s">
                <Text textAlign="right" color="darkGrey">
                  {Math.round(lerp(minY, maxY, t))}
                </Text>
              </Box>
              {/* X-axis Lines */}
              <Box flex={1} height={1} backgroundColor="grey" />
            </Box>
          );
        })}
      </Box>
      {/* X-Scale */}
      <Box
        marginLeft={MARGIN}
        alignItems="center"
        height={theme.spacing[MARGIN]}
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
