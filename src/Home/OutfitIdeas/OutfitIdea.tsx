import React, { useState } from "react";
import { Box } from "../../Components";
import Header from "../../Components/Header";
import { HomeNavigationProps } from "../../Components/Navigation";
import Background from "./Background";
import Card from "./Card";
import { useTransition } from "react-native-redash";
import { interpolate, sub } from "react-native-reanimated";

//  Cards Array
//  Here the order matters, item with the last index at 0 would be the first one to be placed in the queue
//  and to be placed infront of the customers
const cards = [
  {
    index: 3,
  },
  {
    index: 2,
  },
  {
    index: 1,
  },
  {
    index: 0,
  },
];

const step = 1 / (cards.length - 1);

const OutfitIdea = ({ navigation }: HomeNavigationProps<"OutfitIdeas">) => {
  // --> Main Idea behind the card animations is to animate the swiping animation famous from dating apps
  // --> The first card we discard, we don't want to display anymore and so on and so forth
  // --> To achive that we will use some famous APIs from RN-Aniamted
  // --> restSpeedThreshold (very high) and overshootClamping with a truthy value

  const [currentIndex, setCurrentIndex] = useState(0);

  // Idea behind animated index
  // Every time the current index changes from 0 to 1
  // the aIndex - `a` animating index will `animate` from 0 to 0.1, 0.2...
  const aIndex = useTransition(currentIndex);
  return (
    <Box flex={1} backgroundColor="white">
      {/* Header Component */}
      <Header
        title="Outfit Ideas"
        left={{
          icon: "menu",
          onPress: () => navigation.openDrawer(),
        }}
        right={{
          icon: "shopping-bag",
          onPress: () => console.log("pressed"),
        }}
      />
      {/* ListView compoenent  */}
      {/* Background component */}
      <Box flex={1}>
        {/* `absolutely` positioned  */}
        <Background />
        {/* Cards compoenent
             -> The color, scale, and the translation of the card depends on its position
        */}
        {cards.map(
          ({ index }) =>
            currentIndex < index * step + step && (
              <Card
                key={index}
                position={sub(index * step, aIndex)}
                onSwipe={() => {
                  setCurrentIndex((prev) => prev + step);
                }}
              />
            )
        )}
      </Box>
    </Box>
  );
};

export default OutfitIdea;
