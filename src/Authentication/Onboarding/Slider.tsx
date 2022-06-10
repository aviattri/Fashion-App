import { View, Text, Dimensions, StyleSheet, Image } from "react-native";

const { width, height } = Dimensions.get("window");
export const SLIDER_HIEHGT = 0.61 * height;
const BORDER_RADIUS = 75;

interface SliderProps {
  label: String;
  right?: boolean;
  picture: number;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    overflow: "hidden",
  },
  title: {
    fontSize: 80,
    fontFamily: "SFProText-Bold",
    color: "white",
    textAlign: "center",
    //for it work smoothly on android ; we use line height
    lineHeight: 80,
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 50,
    ...StyleSheet.absoluteFillObject,
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    borderBottomRightRadius: BORDER_RADIUS,
    height: undefined,
    width: undefined,
  },
});

const Slider = ({ label, right, picture }: SliderProps) => {
  const transform = [
    {
      translateY: (SLIDER_HIEHGT - 100) / 2,
    },
    {
      translateX: right ? width / 2 - 50 : -width / 2 + 50,
    },
    {
      rotate: right ? "-90deg" : "90deg",
    },
  ];

  return (
    <View style={{ width }}>
      <View style={styles.overlay}>
        <Image source={picture} resizeMode="contain" style={styles.picture} />
      </View>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  );
};

export default Slider;
