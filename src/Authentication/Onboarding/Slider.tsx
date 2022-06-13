import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  ImageRequireSource,
} from "react-native";
import { Text } from "../../Components";
const { width, height } = Dimensions.get("window");
export const SLIDER_HIEHGT = 0.61 * height;

interface SliderProps {
  label: String;
  right?: boolean;
  picture: {
    src: ImageRequireSource;
    width: number;
    height: number;
  };
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

  picture: {},
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
        <Text variant={"hero"}>{label}</Text>
      </View>
    </View>
  );
};

export default Slider;
