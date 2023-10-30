import { Dimensions } from "react-native";
import React, { Children, ReactNode } from "react";
import { Box, Text } from "../../Components";
import { BorderlessButton } from "react-native-gesture-handler";
import { mix, useTransition } from "react-native-redash";
import theme from "../../Components/Theme";
import Animated, { multiply } from "react-native-reanimated";

const { width } = Dimensions.get("screen");

interface tab {
  id: string;
  title: string;
}

interface TabsProps {
  tabs: tab[];
  // We need to translate the content
  // So we require children property and
  // each child is going to the be content of the tab
  children: ReactNode;
}

const Tabs = ({ tabs, children }: TabsProps) => {
  const [index, setIndex] = React.useState(0);

  //animated values for the selected tab acitivity indicator
  const transition = useTransition(index, { duration: 650 });
  const translateX = mix(transition, width * 0.25, width * 0.75);

  return (
    <Box flex={1}>
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
      {/* Children with animated view to display user info content */}
      <Animated.View
        style={{
          flex: 1,
          width: width * tabs.length,
          flexDirection: "row",

          transform: [{ translateX: multiply(-width, transition) }],
        }}
      >
        {Children.map(children, (child, i) => (
          <Box flex={1} key={i} width={width}>
            {child}
          </Box>
        ))}
      </Animated.View>
    </Box>
  );
};

export default Tabs;
