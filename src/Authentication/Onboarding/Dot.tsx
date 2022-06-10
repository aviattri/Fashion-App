import Animated, {
  Extrapolate,
  interpolateNode,
} from "react-native-reanimated";
import React from "react";

interface DotProps {
  i: number;
  currentIndex: Animated.Node<number>;
}
const Dot = ({ i, currentIndex }: DotProps) => {
  const opacity = interpolateNode(currentIndex, {
    inputRange: [i - 1, i, i + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolateNode(currentIndex, {
    inputRange: [i - 1, i, i + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View
      style={{
        opacity,
        backgroundColor: "#2CB92B",
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
        transform: [{ scale }],
      }}
    ></Animated.View>
  );
};

export default Dot;
