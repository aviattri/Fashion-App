import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Box, useTheme, Theme } from "../../Components/Theme";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;

export interface DataPoint {
  date: number;
  value: number;
  color: keyof Theme["colors"];
}

interface GraphProps {
  data: DataPoint[];
}

const lerp = (v0: number, v1: number, t: number) => {
  return (1 - t) * v0 + t * v1;
};

const Graph = ({ data }: GraphProps) => {
  const theme = useTheme();
  const width = wWidth - theme.spacing.m * 2;
  const height = width * aspectRatio;

  const step = width / data.length;

  //we need all values to calc mean and max to interpolate in points
  const values = data.filter((p) => p.value);
  const dates = data.filter((p) => p.date);

  const minX = Math.min(...dates);
  const maxX = Math.max(...dates);

  const minY = Math.min(...values);
  const maxY = Math.max(...values);

  return (
    <Box width={width} height={height}>
      {data.map((point, i) => {
        console.log("color val", point.color);
        if (point.value === 0) {
          return null;
        }
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
  );
};

export default Graph;
