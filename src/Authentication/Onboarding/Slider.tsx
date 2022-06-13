import { View, Dimensions, StyleSheet, Image } from "react-native";
import { Text, theme } from "../../Components";
const { width, height } = Dimensions.get("window");
export const SLIDER_HIEHGT = 0.61 * height;

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
    borderBottomRightRadius: theme.borderRadii.xl,
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
        <Text variant={"hero"}>{label}</Text>
      </View>
    </View>
  );
};

export default Slider;
