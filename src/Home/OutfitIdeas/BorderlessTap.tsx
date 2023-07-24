import { View, Text } from "react-native";
import React from "react";
import { State, TapGestureHandler } from "react-native-gesture-handler";
import {
  useClock,
  useGestureHandler,
  useTapGestureHandler,
} from "react-native-redash";
import Animated, {
  add,
  and,
  call,
  clockRunning,
  cond,
  eq,
  greaterThan,
  not,
  set,
  startClock,
  stopClock,
  useCode,
  useValue,
} from "react-native-reanimated";

interface BorderTapProps {
  onPress: () => void;
  children: ReactNode;
}

const BorderlessTap = ({ children, onPress }: BorderTapProps) => {
  // We need a  clock here to trigger the opacity change
  // after notify the onPress Tap

  const clock = useClock();
  const start = useValue(0);

  const { gestureHandler, state } = useTapGestureHandler();
  const opacity = useValue(0);

  useCode(
    () => [
      cond(and(not(clockRunning(clock)), eq(state, State.BEGAN)), [
        startClock(clock),
        set(start, clock),
      ]),
      cond(eq(state, State.END), [call([], onPress), stopClock(clock)]),
      set(
        opacity,
        cond(
          and(greaterThan(clock, add(start, 100)), clockRunning(clock)),
          0.5,
          1
        )
      ),
    ],
    []
  );

  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View style={{ opacity }}>{children}</Animated.View>
    </TapGestureHandler>
  );
};

export default BorderlessTap;
