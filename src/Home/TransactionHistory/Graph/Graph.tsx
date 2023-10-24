import { View, Text, Dimensions } from "react-native";
import React, { useLayoutEffect, useRef } from "react";
import { Box, useTheme, Theme } from "../../../Components/Theme";
import Underlay, { MARGIN } from "./Underlay";
import { lerp } from "./Scale";
import moment from "moment";
import {
  Transition,
  Transitioning,
  TransitioningView,
} from "react-native-reanimated";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;

const transition = (
  <Transition.Together>
    <Transition.In
      type="slide-bottom"
      durationMs={650}
      interpolation="easeInOut"
    />
  </Transition.Together>
);

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
  const ref = useRef<TransitioningView>(null);
  useLayoutEffect(() => {
    //gaurented to be executed before the first render
    ref.current?.animateNextTransition();
  }, []);
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
      <Transitioning.View
        style={{ width, height, overflow: "hidden" }}
        ref={ref}
        transition={transition}
      >
        {data.map((point) => {
          const i = Math.round(
            moment.duration(moment(point.date).diff(startDate)).asMonths()
          );

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
      </Transitioning.View>
    </Box>
  );
};

export default Graph;
