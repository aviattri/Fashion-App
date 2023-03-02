import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Animated, {
  divide,
  Extrapolate,
  interpolateNode,
  multiply,
} from "react-native-reanimated";
import Slider, { SLIDER_HIEHGT } from "./Slider";
import Subslider from "./Subslider";
import Dot from "./Dot";
import { useTheme } from "../../Components";
import {
  AuthNavigationProps,
  Routes,
  StackNavigationProps,
} from "../../Components/Navigation";
import { Theme, makeStyles } from "../../Components/Theme";

const { width } = Dimensions.get("window");

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDER_HIEHGT,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: "rgba(100, 200,300, 0.05)",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  underlay: {
    justifyContent: "flex-end",
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
    overflow: "hidden",
  },
}));

const slides = [
  {
    label: "Relaxed",
    title: "Find Perfect Fits",
    description: `Confused about your outfit? Dont't worry! Find the best outfit here!`,
    picture: {
      src: require("../../../assets/1.png"),
      width: 2513,
      height: 3583,
    },
    color: "#BFEAF5",
  },
  {
    label: "Smooth",
    title: "GET LATEST BRANDS",
    description: `hating the clothers in your wardrobe? Explore hundreds of outift ideas`,
    picture: {
      src: require("../../../assets/2.png"),
      width: 2791,
      height: 3744,
    },
    color: "#BEECC4",
  },
  {
    label: "Clean",
    title: "Your Style only",
    description: `Create your individual & unique style and look amazing everyday`,
    picture: {
      src: require("../../../assets/3.png"),
      width: 2788,
      height: 3244,
    },
    color: "#FFE4D9",
  },
  {
    label: "Flunky",
    title: "Look Fresh Everday",
    description: `Discover the latest trends in fashion and explore your personality`,
    picture: {
      src: require("../../../assets/4.png"),
      width: 1757,
      height: 2551,
    },
    color: "#FFDDDD",
  },
];

export const assets = slides.map((slide) => slide.picture.src);

const Onboarding = ({ navigation }: AuthNavigationProps<"Onboarding">) => {
  const styles = useStyles();
  const theme = useTheme();
  const scroll = React.useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((item) => item.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {/* Scroll View Background */}
        {slides.map((slide, index) => {
          const opacity = interpolateNode(x, {
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View
              style={[
                styles.underlay,
                { borderBottomRightRadius: theme.borderRadii.xl },
                { opacity },
              ]}
            >
              <Image
                source={slide.picture.src}
                style={{
                  width: width - 75,
                  height:
                    ((width - 75) * slide.picture.height) / slide.picture.width,
                }}
              />
            </Animated.View>
          );
        })}

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
            {slides.map(({ title, description }, index) => {
              const last = index === slides.length - 1;
              return (
                <Subslider
                  key={index}
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                    } else {
                      scroll.current
                        ?.getNode()
                        .scrollTo({ x: width * (index + 1), animated: true });
                    }
                  }}
                  {...{ title, description, x, last }}
                />
              );
            })}
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
