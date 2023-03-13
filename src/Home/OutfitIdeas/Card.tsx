import { Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import Animated, { add } from "react-native-reanimated";
import { Box } from "../../Components";
import {
  mix,
  mixColor,
  usePanGestureHandler,
  withSpring,
} from "react-native-redash";
import theme from "../../Components/Theme";
import { PanGestureHandler } from "react-native-gesture-handler";

interface CardProps {
  position: number;
}

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.8;
const height = width * (425 / 294);
const borderRadius = 24;

const Card = ({ position }: CardProps) => {
  // Anyone following RN-Fashion by William and stuck at part 12, with mixColor()

  // The Animated.Adaptable type is used to represent a value that can either
  // be an Animated.Value or a number, but it is not assignable to the position
  //  property in the style object.

  // If you want to animate the position of the Animated.View
  // component, you need to create an Animated.Value and use it
  //  as the position value. Here's an example of how you can animate
  //  the position using an Animated.Value:

  const [pos] = useState(new Animated.Value(position));

  const backgroundColor = mixColor(pos, "#C9E9F7", "#74BCB8");

  const scale = mix(position, 1, 0.9);

  const { gestureHandler, translation, velocity, state } =
    usePanGestureHandler();

  const translateYOffset = mix(position, 0, -50);

  const translateX = withSpring({
    value: translation.x,
    velocity: velocity.y,
    state,
    snapPoints: [-width, 0, width],
  });

  const translateY = add(
    translateYOffset,
    withSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [0],
    })
  );

  return (
    <Box
      style={StyleSheet.absoluteFill}
      justifyContent="center"
      alignItems="center"
    >
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor: backgroundColor,
            width,
            height,
            borderRadius,
            transform: [{ translateY }, { scale }, { translateX }],
          }}
        />
      </PanGestureHandler>
    </Box>
  );
};

export default Card;
