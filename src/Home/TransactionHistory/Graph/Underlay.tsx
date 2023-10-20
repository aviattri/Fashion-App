import { StyleSheet } from "react-native";
import React from "react";
import { Box, useTheme, Text } from "../../../Components";
import { lerp } from "./Scale";
import moment from "moment";

interface UnderlayProps {
  minY: number;
  maxY: number;
  step: number;
  startDate: number;
  numberOfMonths: number;
}
export const MARGIN = "xl";
export const ROW_HEIGHT = 16;

const formatter = Intl.DateTimeFormat("en", { month: "short" });

const Underlay = ({
  minY,
  maxY,
  step,
  startDate,
  numberOfMonths,
}: UnderlayProps) => {
  const theme = useTheme();
  const minDate = moment(startDate);

  const datesModified = new Array(numberOfMonths)
    .fill(0)
    .map((_, i) => moment(minDate.clone().add(i, "month")));

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
        {datesModified.map((date, index) => (
          <Box width={step}>
            <Text key={index} color="darkGrey" textAlign="center">
              {date.format("MMM")}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Underlay;
