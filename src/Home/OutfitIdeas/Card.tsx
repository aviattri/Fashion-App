import React from "react";
import { Dimensions, StyleSheet, ImageRequireSource } from "react-native";

import { PanGestureHandler } from "react-native-gesture-handler";
import { mix, mixColor, usePanGestureHandler } from "react-native-redash";

import Animated, {
  Extrapolate,
  add,
  interpolateNode,
} from "react-native-reanimated";

import { useSpring } from "./Animations";
import { Box } from "../../Components";

interface CardProps {
  position: Animated.Node<number>;
  onSwipe: () => void;
  source: ImageRequireSource;
  step: number;
}

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.8;
const height = width * (425 / 294);
const borderRadius = 24;

const Card = ({ position, onSwipe, source, step }: CardProps) => {
  // Anyone following RN-Fashion by William and stuck at part 12, with mixColor()

  // The Animated.Adaptable type is used to represent a value that can either
  // be an Animated.Value or a number, but it is not assignable to the position
  // property in the style object.

  // If you want to animate the position of the Animated.View
  // component, you need to create an Animated.Value and use it
  // as the position value. Here's an example of how you can animate
  // the position using an Animated.Value:

  // ** Previous approach with mixing backgroundColor using Aninmated.Value
  // const [pos] = useState(new Animated.Value(position));
  // const backgroundColor = mixColor(pos, "#C9E9F7", "#74BCB8");

  // ** Current approach with Animated.Node
  const backgroundColor = mixColor(position, "#C9E9F7", "#74BCB8");

  const scale = mix(position, 1, 0.9);

  const imageScale = interpolateNode(position, {
    inputRange: [0, step],
    outputRange: [1, 0.8],
    extrapolate: Extrapolate.CLAMP,
  });

  const { gestureHandler, translation, velocity, state } =
    usePanGestureHandler();

  const translateYOffset = mix(position, 0, -50);

  const translateX = useSpring({
    value: translation.x,
    velocity: velocity.y,
    state,
    snapPoints: [-wWidth, 0, width],
    //if there is atleast 1 card in the queue than swipe
    onSnap: ([x]) => x !== 0 && onSwipe(),
  });

  const translateY = add(
    translateYOffset,
    useSpring({
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
            backgroundColor,
            width,
            height,
            borderRadius,
            transform: [{ translateY }, { scale }, { translateX }],
            overflow: "hidden",
          }}
        >
          <Animated.Image
            {...{ source }}
            style={{
              ...StyleSheet.absoluteFillObject,
              width: undefined,
              height: undefined,
              resizeMode: "contain",
              transform: [{ scale: imageScale }],
            }}
          />
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default Card;
