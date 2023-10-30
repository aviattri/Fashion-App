import { Dimensions, View } from "react-native";
import React from "react";
import { Box, Text } from "../../Components";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { mix, useTransition } from "react-native-redash";
import theme from "../../Components/Theme";
import Animated from "react-native-reanimated";

const { width } = Dimensions.get("screen");

interface tab {
  id: string;
  title: string;
}
interface TabsProps {
  tabs: tab[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const [index, setIndex] = React.useState(0);

  //animated values for the selected tab acitivity indicator
  const transition = useTransition(index, { duration: 650 });
  const translateX = mix(transition, width * 0.25, width * 0.75);

  return (
    <Box>
      <Box flexDirection="row">
        {/* User Profile Tabs */}
        {tabs.map((tab, i) => (
          <BorderlessButton
            style={{ flex: 1 }}
            onPress={() => setIndex(i)}
            key={i}
          >
            <Box padding={"m"} style={{ paddingBottom: theme.spacing.m + 10 }}>
              <Text variant={"title3"} textAlign="center">
                {tab?.title}
              </Text>
            </Box>
          </BorderlessButton>
        ))}
        {/* Tab Activity Indicator */}
        <Animated.View
          style={{
            position: "absolute",
            bottom: 0,
            left: -5,
            backgroundColor: theme.colors.primary,
            width: 10,
            height: 10,
            borderRadius: 5,
            transform: [{ translateX }],
          }}
        />
      </Box>
    </Box>
  );
};

export default Tabs;
