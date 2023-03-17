import Animated, {
  add,
  block,
  call,
  cond,
  eq,
  set,
  spring,
  startClock,
  stopClock,
} from "react-native-reanimated";
import { State } from "react-native-gesture-handler";
import { snapPoint, useClock, useValue } from "react-native-redash";

interface WithSpringParams {
  value: Animated.Node<number>;
  velocity: Animated.Node<number>;
  state: Animated.Node<State>;
  snapPoints: number[];
  onSnap?: (values: readonly number[]) => void;
}

export const useSpring = ({
  value,
  velocity,
  state: gestureState,
  snapPoints,
  onSnap,
}: WithSpringParams) => {
  const offSet = useValue(0);
  const clock = useClock();
  const state = {
    position: useValue(0),
    finished: useValue(0),
    time: useValue(0),
    velocity: useValue(0),
  };

  //default configiration
  const config = {
    toValue: useValue(0),
    damping: 6,
    mass: 1,
    stiffness: 64,
    // These three will be the animation values as they are going to be changed
    // depeding on where we snape
    overshootClamping: useValue(0),
    restSpeedThreshold: useValue(0.01),
    RestDisplacementThreshold: useValue(0.01),
  };

  return block([
    //ANIMATIONS BEGIN
    cond(eq(gestureState, State.BEGAN), [
      set(state.position, add(offSet, value)),
      stopClock(clock),
      set(state.finished, 0),
      set(state.time, 0),
    ]),
    // ANIMATIONS ACTIVE
    cond(eq(gestureState, State.ACTIVE), [
      set(state.position, add(offSet, value)),
      set(state.velocity, velocity),
      set(
        config.toValue,
        snapPoint(state.position, state.velocity, snapPoints)
      ),
      cond(
        eq(config.toValue, 0),
        [
          set(config.overshootClamping, 0),
          set(config.restSpeedThreshold, 0.01),
          set(config.RestDisplacementThreshold, 0.01),
        ],
        //if we snap to left or right
        [
          set(config.overshootClamping, 1),
          set(config.restSpeedThreshold, 100),
          set(config.RestDisplacementThreshold, 100),
        ]
      ),
    ]),
    // ANIMATIONS END
    cond(eq(gestureState, State.END), [
      startClock(clock),
      spring(clock, state, config),
      cond(state.finished, [onSnap && call([state.position], onSnap)]),
    ]),

    state.position,
  ]);
};
