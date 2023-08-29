import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import RoundedIcons, { RoundedIconProps } from "./RoundedIcons";

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: () => void;
}

const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
  return (
    <BorderlessButton {...{ onPress }}>
      <RoundedIcons {...props} />
    </BorderlessButton>
  );
};
RoundedIconButton.defaultProps = {
  iconRatio: 0.7,
};

export default RoundedIconButton;
