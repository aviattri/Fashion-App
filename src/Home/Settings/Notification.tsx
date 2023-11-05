import { Switch } from "react-native";
import React from "react";
import { Box, Text } from "../../Components";
import theme from "../../Components/Theme";

interface NotificationProps {
  title: string;
  description: string;
}

const Notification = ({ title, description }: NotificationProps) => {
  const [toggled, setToggled] = React.useState(false);

  return (
    <Box flexDirection={"row"} marginBottom={"m"}>
      <Box flex={1} alignItems={"flex-start"}>
        <Text textAlign={"left"} variant={"title3"}>
          {title}{" "}
        </Text>
        <Text variant={"body"}>{description}</Text>
      </Box>
      <Box paddingVertical={"m"}>
        <Switch
          value={toggled}
          onValueChange={setToggled}
          trackColor={{
            true: theme.colors.primary,
            false: theme.colors.background2,
          }}
        />
      </Box>
    </Box>
  );
};

export default Notification;
