import { View, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import theme from "../../Components/Theme";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    resizeMode: "repeat",
  },
});
const viewBox = {
  width: 375,
  height: 100,
};

const d = "M 0 0 H 375 A 50 50 0 0 1 325 50 H 50 A 50 50 0 0 0 0 100";

const height = (100 * width) / viewBox.width;

interface ContentFooterProps {
  children: React.ReactNode;
}

const ContentFooter = ({ children }: ContentFooterProps) => {
  return (
    <>
      <Image
        style={styles.background}
        source={require("../../../assets/pattern2.png")}
      />
      {children}

      <Svg
        width={width}
        height={height}
        viewBox={[0, 0, viewBox.width, viewBox.height].join("  ")}
      >
        <Path fill={theme.colors.background} d={d} />
      </Svg>
    </>
  );
};

export default ContentFooter;
