import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import React from "react";

interface DotProps {
  i: number;
  currentIndex: Animated.SharedValue<number>;
}
const Dot = ({ i, currentIndex }: DotProps) => {
  const style = useAnimatedStyle(() => {
    const opacity = interpolate(
      currentIndex.value,
      [i - 1, i, i + 1],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );
    const scale = interpolate(
      currentIndex.value,
      [i - 1, i, i + 1],
      [1, 1.25, 1],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      backgroundColor: "#2CB92B",
      width: 8,
      height: 8,
      borderRadius: 4,
      margin: 4,
      transform: [{ scale }],
    };
  });
  return <Animated.View style={style}></Animated.View>;
};

export default Dot;
