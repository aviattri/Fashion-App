import { View, StyleSheet, Dimensions, Text } from "react-native";
import React from "react";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Animated, { divide, multiply } from "react-native-reanimated";
import Slider, { SLIDER_HIEHGT } from "./Slider";
import Subslider from "./Subslider";
import Dot from "./Dot";

const { width } = Dimensions.get("window");
const BORDER_RADIUS = 75;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDER_HIEHGT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: "rgba(100, 200,300, 0.05)",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});

const slides = [
  {
    label: "Relaxed",
    title: "Find Perfect Fits",
    description: `Confused about your outfit? Dont't worry! Find the best outfit here!`,
    picture: require("../../../assets/1.png"),
    color: "#BFEAF5",
  },
  {
    label: "Smooth",
    title: "GET LATEST BRANDS",
    description: `hating the clothers in your wardrobe? Explore hundreds of outift ideas`,
    picture: require("../../../assets/2.png"),
    color: "#BEECC4",
  },
  {
    label: "Clean",
    title: "Your Style only",
    description: `Create your individual & unique style and look amazing everyday`,
    picture: require("../../../assets/3.png"),
    color: "#FFE4D9",
  },
  {
    label: "Flunky",
    title: "Look Fresh Everday",
    description: `Discover the latest trends in fashion and explore your personality`,
    picture: require("../../../assets/4.png"),
    color: "#FFDDDD",
  },
];

const Onboarding = () => {
  const scroll = React.useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((item) => item.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {/* Splash Screens */}
          {slides.map(({ label, picture }, index) => (
            <Slider {...{ label, picture }} key={index} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor,
          }}
        />
        <Animated.View style={[styles.footerContent]}>
          {/* Pagination */}
          <View style={styles.pagination}>
            {slides.map((_, i) => (
              <Dot key={i} currentIndex={divide(x, width)} {...{ i }} />
            ))}
          </View>
          {/* Footer */}
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ title, description }, index) => (
              <Subslider
                key={index}
                onPress={() => {
                  if (scroll.current) {
                    scroll.current
                      .getNode()
                      .scrollTo({ x: width * (index + 1), animated: true });
                  }
                }}
                last={index === slides.length - 1}
                {...{ title, description, x }}
              />
            ))}
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
