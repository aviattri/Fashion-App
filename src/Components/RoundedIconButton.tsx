import React from "react";
import { RectButton } from "react-native-gesture-handler";
import RoundedIcons, { RoundedIconProps } from "./RoundedIcons";

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: () => void;
}

const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
  return (
    <RectButton {...{ onPress }}>
      <RoundedIcons {...props} />
    </RectButton>
  );
};

export default RoundedIconButton;
