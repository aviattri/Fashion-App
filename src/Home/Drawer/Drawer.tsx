import { Dimensions, Image } from "react-native";
import React from "react";

import { Box, RoundedIconButton, Text } from "../../Components";

import DrawerItem, { DrawerItemsProps } from "./DrawerItem";
import theme, { useTheme } from "../../Components/Theme";
import Header from "../../Components/Header";
import {
  CommonActions,
  DrawerActions,
  useNavigation,
} from "@react-navigation/native";

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
    color: "drawer1",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
    color: "drawer2",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "drawer3",
  },
  {
    icon: "settings",
    label: "Notification Settings",
    screen: "NotificationSettigns",
    color: "drawer4",
  },
  {
    icon: "log-out",
    label: "Logout",
    onPress: (navigation) =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Authentication" }],
        })
      ),
    color: "secondary",
  },
];

const Drawer = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1}>
      {/* Top Design */}
      <Box flex={0.2} backgroundColor="background">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
        >
          {/* System Tray */}
          <Header
            title="Menu"
            left={{
              icon: "x",
              onPress: () => navigation.dispatch(DrawerActions.closeDrawer),
            }}
            right={{
              icon: "shopping-bag",
              onPress: () => true,
            }}
            dark
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
          backgroundColor="background"
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
            <DrawerItem key={item.icon} {...item} />
          ))}
        </Box>
      </Box>
      {/* Bottom Design */}
      <Box
        backgroundColor="background"
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
