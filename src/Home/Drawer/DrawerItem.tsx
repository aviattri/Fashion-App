import { Box, Text, useTheme, Theme } from "../../Components/Theme";
import { RectButton } from "react-native-gesture-handler";
import RoundedIcons from "../../Components/RoundedIcons";
import { HomeRoutes } from "../../Components/Navigation";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

export interface DrawerItemsProps {
  icon: string;
  color: keyof Theme["colors"];
  screen: keyof HomeRoutes;
  label: string;
}

const DrawerItem = ({ icon, color, screen, label }: DrawerItemsProps) => {
  const theme = useTheme();

  const { navigate } =
    useNavigation<DrawerNavigationProp<HomeRoutes, "OutfitIdeas">>();

  return (
    <RectButton
      onPress={() => navigate(screen)}
      style={{ borderRadius: theme.borderRadii.m }}
    >
      <Box flexDirection="row" alignItems="center" padding="s">
        <RoundedIcons
          name={icon}
          backgroundColor={color}
          size={36}
          iconRatio={0.5}
          color={"white"}
        />
        <Text variant="button" color="secondary" marginLeft="m">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
