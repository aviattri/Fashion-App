import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useValue, interpolateColor, onScrollEvent } from "react-native-redash";
import Animated from "react-native-reanimated";
import Slider, { SLIDER_HIEHGT } from "./Slider";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDER_HIEHGT,
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
});

const Onboarding = () => {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: [0, width, width * 2, width * 3],
    outputRange: ["#BFEAF5", "#BEECC4", "#FFE4D9", "#FFDDDD"],
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          bounces={false}
          {...{ onScroll }}
        >
          <Slider label={"Relaxed"} />
          <Slider label={"Smooth"} right />
          <Slider label={"Clean"} />
          <Slider label={"Flunky"} right />
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor,
          }}
        />
        <View
          style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 75 }}
        />
      </View>
    </View>
  );
};

export default Onboarding;
