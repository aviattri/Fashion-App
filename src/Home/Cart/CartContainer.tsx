import React, { ReactNode } from "react";
import { Box } from "../../Components";
import { Dimensions, View } from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import theme, { aspectRatio } from "../../Components/Theme";
import { PanGestureHandler } from "react-native-gesture-handler";
import { clamp, snapPoint } from "react-native-redash";

const { width } = Dimensions.get("window");
const height = 682 * aspectRatio;
const minHeight = 228 * aspectRatio;
const snapPoints = [-(height - minHeight), 0];

interface CartContainerProps {
  children: ReactNode;
}
export const CartContainer = ({ children }: CartContainerProps) => {
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler<{ y?: number }>({
    //To keep track of current position
    onStart: (event, ctx) => {
      ctx.y = translateY.value;
    },
    onActive: ({ translationY }, ctx) => {
      translateY.value = clamp(
        ctx.y + translationY,
        snapPoints[0],
        snapPoints[1]
      );
    },
    onEnd: ({ velocityY }) => {
      const dest = snapPoint(translateY.value, velocityY, snapPoints);
      translateY.value = withSpring(dest);
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Box flex={1} backgroundColor={"secondary"}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
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
            animatedStyle,
          ]}
        >
          {children}
          {/* A independent region(View) to swipe up */}
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: theme.borderRadii.xl,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {/* Swip-able Indicator */}
            <View
              style={{
                height: 5 * aspectRatio,
                backgroundColor: theme.colors.background2,
                width: 60 * aspectRatio,
                borderRadius: 2.5 * aspectRatio,
                marginBottom: theme.spacing.m,
              }}
            />
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};
