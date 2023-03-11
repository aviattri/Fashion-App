import { Box, Text, useTheme, Theme } from "../../Components/Theme";
import { RectButton } from "react-native-gesture-handler";
import RoundedIcons from "../../Components/RoundedIcons";

export interface DrawerItemsProps {
  icon: string;
  color: keyof Theme["colors"];
  screen: string;
  label: string;
}

const DrawerItem = ({ icon, color, screen, label }: DrawerItemsProps) => {
  const theme = useTheme();
  return (
    <RectButton style={{ borderRadius: theme.borderRadii.m }}>
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
