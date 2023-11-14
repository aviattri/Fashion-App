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
import {
  GestureEvent,
  PanGestureHandler,
} from "react-native-gesture-handler";
import { clamp, snapPoint } from "react-native-redash";

const { width } = Dimensions.get("window");
const height = 682 * aspectRatio;
const minHeight = 228 * aspectRatio;
const snapPoints = [-(height - minHeight), 0];

interface CartContainerProps {
  children: ReactNode;
  CheckoutComponent: React.FC<{ minHeight: number }>;
}
type GestureContent = {
  y?: number;
};

export const CartContainer = ({
  children,
  CheckoutComponent,
}: CartContainerProps) => {
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler<
    GestureEvent<Record<string, unknown>>,
    GestureContent
  >({
    //To keep track of current position
    onStart: (event, ctx) => {
      ctx.y = translateY.value;
    },
    onActive: (event, ctx) => {
      const translationY = event?.translationY as number;

      translateY.value = clamp(
        (ctx.y ?? 0) + translationY,
        snapPoints[0],
        snapPoints[1]
      );
    },
    onEnd: (event) => {
      const velocityY = event?.velocityY as number;

      const dest = snapPoint(translateY.value, velocityY, snapPoints);
      translateY.value = withSpring(dest, { overshootClamping: true });
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Box flex={1}>
      {/* Children to display background layer (checkout) */}
      {<CheckoutComponent minHeight={minHeight} />}
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
