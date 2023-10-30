import React from "react";
import { Box, Header, Text } from "../../Components";
import { HomeNavigationProps } from "../../Components/Navigation";
import { Dimensions } from "react-native";
import { useTheme } from "../../Components/Theme";
import Tabs from "./Tabs";
import Configiration from "./Configiration";
import PersonalInfo from "./PersonalInfo";

const { width } = Dimensions.get("screen");

const tabs = [
  {
    id: "configiration",
    title: "Configiration",
  },
  {
    id: "info",
    title: "Personal Info",
  },
];

const EditProfile = ({ navigation }: HomeNavigationProps<"EditProfile">) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor={"background"}>
      {/* Top Design */}
      <Box flex={0.3}>
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
            title="Edit Profile "
            left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
            dark
          />
        </Box>
      </Box>
      {/* Top-Design-Bottom-Left-Curve */}
      <Box>
        {/* User Avatar */}
        <Box
          position="absolute"
          left={width / 2 - 50}
          top={-50}
          height={100}
          width={100}
          style={{ borderRadius: 50 }}
          backgroundColor="primary"
        />
        {/* User Details */}
        <Box marginVertical="m" style={{ marginTop: 50 + theme.spacing.m }}>
          <Text variant="title1" textAlign="center">
            Avi the Porter
          </Text>
          <Text variant="body" textAlign="center">
            avi@porter.industry
          </Text>
        </Box>
      </Box>
      {/* Tabs for the user choices */}
      <Tabs tabs={tabs}>
        <Configiration />
        <PersonalInfo />
      </Tabs>
    </Box>
  );
};

export default EditProfile;
