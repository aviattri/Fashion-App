import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Box, RoundedIconButton, useTheme } from "../../Components";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Text, aspectRatio } from "../../Components/Theme";
import { snapPoint } from "react-native-redash";
import { LinearGradient } from "expo-linear-gradient";

interface SwipeableRowProps {
  children: React.ReactNode;
  onDelete: () => void;
}
const { width } = Dimensions.get("window");
const finalDestination = width;
const editWidth = 85 * aspectRatio;
const snapPoints = [-editWidth, 0, finalDestination];

const SwipeableRow = ({ children, onDelete }: SwipeableRowProps) => {
  const theme = useTheme();
  // We will have translate on the Xaxis
  const translateX = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<{ x: number }>({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: (event, ctx) => {
      const translationX = (ctx.x + event?.translationX) as number;
      translateX.value = translationX;
    },

    onEnd: (event) => {
      const velocityX = (event?.velocityX as number) ?? 0;
      const dest = snapPoint(translateX.value, velocityX, snapPoints);

      translateX.value = withSpring(
        dest,
        { overshootClamping: true },
        () => {
          if (dest === finalDestination) {
            runOnJS(onDelete)();
          }
        }
      );
    },
  });

  const style = useAnimatedStyle(() => ({
    backgroundColor: theme.palette.white,
    transform: [{ translateX: translateX.value }],
  }));

  const deleteStyle = useAnimatedStyle(() => ({
    opacity: translateX.value > 0 ? 1 : 0,
  }));

  const editStyle = useAnimatedStyle(() => ({
    opacity: translateX.value > 0 ? 0 : 1,
  }));
  return (
    <View>
      {/* Delete Foreground */}
      <Animated.View style={[StyleSheet.absoluteFill, deleteStyle]}>
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={[theme.colors.danger, theme.colors.background]}
          start={[0, 0.5]}
          end={[1, 0.5]}
        />
        <Box
          justifyContent={"space-evenly"}
          alignItems={"center"}
          width={editWidth}
          flex={1}
        >
          <Text color="background" variant={"header"}>
            {`Delete`}
          </Text>
        </Box>
      </Animated.View>

      {/* Edit Foreground */}
      <Animated.View style={[StyleSheet.absoluteFill, editStyle]}>
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={[theme.colors.editCart, theme.colors.background]}
          start={[1, 0.5]}
          end={[0.7, 0.5]}
        />
        {/* Actions for the Cart Inventory*/}
        <Box
          justifyContent={"space-evenly"}
          alignItems={"center"}
          width={editWidth}
          alignSelf={"flex-end"}
          flex={1}
        >
          <RoundedIconButton
            onPress={() => null}
            name="plus"
            size={24}
            color="background"
            backgroundColor="primary"
            iconRatio={0.7}
          />
          <RoundedIconButton
            onPress={() => null}
            name="minus"
            size={24}
            color="background"
            backgroundColor="danger"
            iconRatio={0.7}
          />
        </Box>
      </Animated.View>

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        {/* Note- First and unique Child of PanGestureHandler is an
       Animated  View */}
        <Animated.View style={style}>
          {/* Foreground */}
          {children}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default SwipeableRow;
