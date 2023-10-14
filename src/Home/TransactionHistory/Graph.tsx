import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Box, useTheme } from "../../Components";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;

interface Point {
  date: number;
  value: number;
  color: keyof Theme["colors"];
}

interface GraphProps {
  data: Point[];
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
            <View
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: theme.spacing.m,
                right: theme.spacing.m,
                backgroundColor: theme.colors.primaryLight,
                borderTopLeftRadius: theme.borderRadii.m,
                borderTopRightRadius: theme.borderRadii.m,
              }}
            />
            <View
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                height: 32,
                left: theme.spacing.m,
                right: theme.spacing.m,
                backgroundColor: theme.colors.primary,
                borderRadius: theme.borderRadii.m,
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default Graph;
