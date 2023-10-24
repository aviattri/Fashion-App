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
  ...RoundedIcons.defaultProps,
};

export default RoundedIconButton;
