import React from "react";
import { Box, Text } from "../../Components";
import { Dimensions } from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import theme from "../../Components/Theme";
import { PanGestureHandler } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");
const height = (682 * width) / 375;

const Cart = () => {
  const translateY = useSharedValue(1);
  console.log(translateY.value);
  // const onGestureEvent = useAnimatedGestureHandler({
  //   onActive: ({ translationY }) => {
  //     translateY.value = translationY;
  //   },
  // });
  // animated style to translate

  // const style = useAnimatedStyle(() => ({
  //   transform: [{ translateY: translateY.value }],
  // }));

  return (
    <Box flex={1} backgroundColor={"secondary"}>
      <PanGestureHandler>
        <Animated.View
          style={[
            {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height,
              backgroundColor: "white",
              borderBottomLeftRadius: theme.borderRadii.xl,
              borderBottomRightRadius: theme.borderRadii.xl,
            },
          ]}
        />
      </PanGestureHandler>
    </Box>
  );
};

export default Cart;
