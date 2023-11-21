import { View, StyleSheet } from "react-native";
import React from "react";
import { Box, Text } from "../../Components";
import { BorderlessButton } from "react-native-gesture-handler";

const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;

interface CategoryProps {
  category: {
    id: string;
    color: string;
    title: string;
  };
}

const Category = ({
  category: { color: backgroundColor, title },
}: CategoryProps) => {
  const [selected, setSelected] = React.useState(false);

  return (
    // an alternative way of upda ting state using the
    //   functional form of setState (or the useState hook, in this case),
    //    which takes a callback function as an argument.
    //    This callback function receives the previous state as its argument,
    //     ensuring that you are always updating the state based on the most recent value
    <BorderlessButton onPress={() => setSelected((prev) => !prev)}>
      <Box marginLeft="m" marginTop="s" alignItems="center">
        <Box
          width={OUTER_RADIUS * 2}
          height={OUTER_RADIUS * 2}
          justifyContent="center"
          alignItems="center"
        >
          {selected && (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: INNER_RADIUS,
                borderColor: backgroundColor,
                borderWidth: 1,
              }}
            />
          )}
          <View
            style={{
              width: INNER_RADIUS * 2,
              height: INNER_RADIUS * 2,
              borderRadius: INNER_RADIUS,
              backgroundColor,
            }}
          />
        </Box>
        <Text textAlign="center" variant="button" marginTop="s">
          {title}
        </Text>
      </Box>
    </BorderlessButton>
  );
};

export default Category;
