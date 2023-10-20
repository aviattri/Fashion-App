import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Box, useTheme, Theme } from "../../../Components/Theme";
import Underlay, { MARGIN } from "./Underlay";
import { lerp } from "./Scale";
import moment from "moment";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;

export interface DataPoint {
  date: number;
  value: number;
  color: keyof Theme["colors"];
  id: number;
}

interface GraphProps {
  data: DataPoint[];
  startDate: number;
  numberOfMonths: number;
}

const Graph = ({ data, startDate, numberOfMonths }: GraphProps) => {
  const theme = useTheme();
  const canvaWidth = wWidth - theme.spacing.m * 2;
  const canvaHeight = canvaWidth * aspectRatio;

  const width = canvaWidth - theme.spacing[MARGIN];
  const height = canvaHeight - theme.spacing[MARGIN] / canvaWidth;

  const step = width / numberOfMonths;

  //we need all values to calc mean and max to interpolate in points
  const values = data.map((p) => p.value);
  const dates = data.map((p) => p.date);

  const minX = Math.min(...dates);
  const maxX = Math.max(...dates);

  const minY = Math.min(...values);
  const maxY = Math.max(...values);

  return (
    // Canva Container
    <Box marginTop="xl" paddingBottom={MARGIN} paddingLeft={MARGIN}>
      {/* Underlay to display dates */}
      <Underlay
        minY={minY}
        maxY={maxY}
        startDate={startDate}
        numberOfMonths={numberOfMonths}
        step={step}
      />
      <Box width={width} height={height}>
        {data.map((point) => {
          console.log("color val", point.color);
          const i = new Date(point.date - startDate).getMonth();
          return (
            <Box
              key={point.date}
              position="absolute"
              left={i * step}
              bottom={0}
              width={step}
              height={lerp(0, height, point.value / height)}
            >
              <Box
                position={"absolute"}
                top={0}
                bottom={0}
                opacity={0.1}
                left={theme.spacing.m}
                right={theme.spacing.m}
                backgroundColor={point.color}
                borderTopLeftRadius="m"
                borderTopRightRadius="m"
              />
              <Box
                position={"absolute"}
                top={0}
                bottom={0}
                height={32}
                left={theme.spacing.m}
                right={theme.spacing.m}
                backgroundColor={point.color}
                borderRadius="m"
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Graph;
