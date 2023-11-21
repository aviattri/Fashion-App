import React from "react";
import { Box } from "../../Components/Theme";
import RoundedIcons from "../../Components/RoundedIcons";
import { BorderlessButton } from "react-native-gesture-handler";

interface OutfitProps {
  outfit: {
    color: string;
    aspectRatio: number;
    id: number;
    selected: boolean;
  };
  width: number;
}

const Outfit = ({ outfit, width }: OutfitProps) => {
  const [selected, setSelected] = React.useState(false);

  return (
    <BorderlessButton
      onPress={() => {
        setSelected((prev) => !prev);
        //IF you select an outfit, this changes the state
        outfit.selected = !outfit.selected;
      }}
    >
      <Box
        borderRadius="m"
        marginBottom="m"
        alignItems="flex-end"
        padding="m"
        style={{
          backgroundColor: outfit.color,
          width,
          height: width * outfit.aspectRatio,
        }}
      >
        {selected && (
          <RoundedIcons
            name="check"
            backgroundColor="primary"
            color="background"
            size={24}
            iconRatio={0.8}
          />
        )}
      </Box>
    </BorderlessButton>
  );
};

export default Outfit;
