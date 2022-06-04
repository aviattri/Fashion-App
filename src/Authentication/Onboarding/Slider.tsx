import { View, Text, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
export const SLIDER_HIEHGT = 0.61 * height;

interface SliderProps {
  label: String;
  right?: boolean;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
});

const Slider = ({ label, right }: SliderProps) => {
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
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  );
};

export default Slider;
