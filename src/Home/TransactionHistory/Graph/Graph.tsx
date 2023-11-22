import { View, Dimensions } from "react-native";
import React from "react";
import { Box, useTheme, Theme } from "../../../Components/Theme";
import Underlay, { MARGIN } from "./Underlay";
import { lerp } from "./Scale";
import moment from "moment";
import { useIsFocused } from "@react-navigation/native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;
const AnimatedBox = Animated.createAnimatedComponent(Box);

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
  const isFocused = useIsFocused();
  // We can attach an animation value to change the isFocused State
  const canvaWidth = wWidth - theme.spacing.m * 2;
  const canvaHeight = canvaWidth * aspectRatio;

  const width = canvaWidth - theme.spacing[MARGIN];
  const height = canvaHeight - theme.spacing[MARGIN] / canvaWidth;

  const step = width / numberOfMonths;
  //we need all values to calc mean and max to interpolate in points
  const values = data.map((p) => p.value);

  const minY = Math.min(...values);
  const maxY = Math.max(...values);

  // Create a shared value for each data point
  const animations = data.map(() => useSharedValue(0));

  // Trigger the animations when the component is focused
  React.useEffect(() => {
    if (isFocused) {
      animations.forEach((anim) => {
        anim.value = withTiming(1, { duration: 650 });
      });
    } else {
      // Reset animation when screen goes out of focus
      animations.forEach((anim) => {
        anim.value = 0;
      });
    }
  }, [isFocused]);

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
      <View style={{ width, height, overflow: "hidden" }}>
        {data.map((point, index) => {
          const i = Math.round(
            moment.duration(moment(point.date).diff(startDate)).asMonths()
          );
          const totalHeight = lerp(0, height, point.value / maxY);

          const animatedStyle = useAnimatedStyle(() => {
            return {
              height: interpolate(
                animations[index].value,
                [0, 1],
                [0, totalHeight]
              ),
              transform: [
                {
                  translateY: interpolate(
                    animations[index].value,
                    [0, 1],
                    [totalHeight / 2, 0]
                  ),
                },
              ],
            };
          });

          return (
            <AnimatedBox
              key={point.id}
              position="absolute"
              left={i * step}
              bottom={0}
              width={step}
              style={animatedStyle}
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
            </AnimatedBox>
          );
        })}
      </View>
    </Box>
  );
};

export default Graph;
