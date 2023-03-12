import { Dimensions, Image } from "react-native";
import React from "react";

import { Box, RoundedIconButton, Text } from "../../Components";

import DrawerItem, { DrawerItemsProps } from "./DrawerItem";
import theme, { useTheme } from "../../Components/Theme";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;

export const assets = [require("../../../assets/drawer.png")];

const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;

const items: DrawerItemsProps[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },
  {
    icon: "heart",
    label: "Favourite Outfits",
    screen: "FavouriteOutfits",
    color: "orange",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
    color: "yellow",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "pink",
  },
  {
    icon: "settings",
    label: "Notification Settings",
    screen: "NotificationSettigns",
    color: "violet",
  },
  {
    icon: "log-out",
    label: "Logout",
    screen: "Logout",
    color: "secondary",
  },
];

const Drawer = () => {
  return (
    <Box flex={1}>
      {/* Top Design */}
      <Box flex={0.2} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
          paddingHorizontal="m"
          justifyContent="space-between"
          flexDirection="row"
          paddingTop="xl"
        >
          {/* System Tray */}
          <RoundedIconButton
            name="x"
            color="white"
            size={24}
            backgroundColor="secondary"
            onPress={() => true}
          />
          <Text color="white" variant="title1">
            My Profile
          </Text>
          <RoundedIconButton
            name="shopping-bag"
            color="white"
            size={24}
            backgroundColor="secondary"
            onPress={() => true}
          />
        </Box>
      </Box>
      {/* Top-Design-Bottom-Left-Curve */}
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        {/* Image */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          justifyContent="center"
          padding="xl"
        >
          {/* User Avatar */}
          <Box
            position="absolute"
            left={DRAWER_WIDTH / 2 - 50}
            top={-50}
            height={100}
            width={100}
            style={{ borderRadius: 50 }}
            backgroundColor="primary"
          />
          {/* User Details */}
          <Box marginVertical="m">
            <Text variant="title1" textAlign="center">
              Avi the Porter
            </Text>
            <Text variant="body" textAlign="center">
              avi@porter.industry
            </Text>
          </Box>
          {/* Drawer Item */}
          {items.map((item) => (
            <DrawerItem key={item.screen} {...item} />
          ))}
        </Box>
      </Box>
      {/* Bottom Design */}
      <Box
        backgroundColor="white"
        width={DRAWER_WIDTH}
        overflow="hidden"
        height={height * 0.61}
      >
        <Image
          source={assets[0]}
          style={{
            width: DRAWER_WIDTH,
            height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
