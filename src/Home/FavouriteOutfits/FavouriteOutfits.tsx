import { Dimensions, ScrollView } from "react-native";
import React from "react";
import theme, { Box } from "../../Components/Theme";
import Header from "../../Components/Header";
import { HomeNavigationProps } from "../../Components/Navigation";
import {
  Transitioning,
  Transition,
  TransitioningView,
} from "react-native-reanimated";
import Footer from "./Footer";
import Outfit from "./Outfit";

interface FavouriteOutfits {}

const { width: wWidth } = Dimensions.get("window");

const defaultOutfits = [
  { id: 0, color: "#BFEAF5", aspectRatio: 1, selected: false },
  { id: 1, color: "#BEECC4", aspectRatio: 200 / 145, selected: false },
  { id: 2, color: "#FFE4D9", aspectRatio: 180 / 145, selected: false },
  { id: 3, color: "#FFDDDD", aspectRatio: 180 / 145, selected: false },
  { id: 4, color: "#BFEAF5", aspectRatio: 1, selected: false },
  { id: 5, color: "#F3F0EF", aspectRatio: 120 / 145, selected: false },
  { id: 6, color: "#D5C3BB", aspectRatio: 210 / 145, selected: false },
  { id: 7, color: "#DEEFC4", aspectRatio: 160 / 145, selected: false },
];

const FavouriteOutfits = ({
  navigation,
}: HomeNavigationProps<"FavouriteOutfits">) => {
  const width = (wWidth - theme.spacing.m * 3) / 2;
  const left = React.useRef<Transitioning>(null);
  const right = React.useRef<Transitioning>(null);

  const [FooterHeights, setFooterHeight] = React.useState(0);
  const [outfits, setOutfits] = React.useState(defaultOutfits);
  const transition = <Transition.Change interpolation="easeInOut" />;

  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Outfit Ideas"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <Box flex={1} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: theme.spacing.m,
          paddingBottom: FooterHeights,
        }}
      >
        <Box flexDirection="row">
          <Box marginRight="m">
            <Transitioning.View ref={left} {...{ transition }}>
              {outfits
                .filter((_, i) => i % 2 !== 0)
                .map((outfit) => (
                  <Outfit key={outfit.id} outfit={outfit} width={width} />
                ))}
            </Transitioning.View>
          </Box>
          <Box>
            <Transitioning.View ref={right} {...{ transition }}>
              {outfits
                .filter((_, i) => i % 2 === 0)
                .map((outfit) => (
                  <Outfit key={outfit.id} outfit={outfit} width={width} />
                ))}
            </Transitioning.View>
          </Box>
        </Box>
      </ScrollView>
      {/* This footer is overlay */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        onLayout={({
          nativeEvent: {
            layout: { height },
          },
        }) => setFooterHeight(height)}
      >
        <Footer
          label="Add to Favourites"
          onPress={() => {
            //Filter out the selected outfits
            left.current.animateNextTransition();
            right.current.animateNextTransition();
            setOutfits(outfits.filter((outfit) => !outfit.selected));
          }}
        />
      </Box>
    </Box>
  );
};

export default FavouriteOutfits;

///Implemnting overlay on top of footer
