import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import theme, { Box } from "../Theme";
import { string } from "yup";

interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon: string;
  validator: (input: string) => boolean;
}
const SIZE = theme.borderRadii.m * 2;

const Valid = true;
const Invalid = false;
const Pristine = null;

type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon, validator, ...props }: TextInputProps) => {
  const [input, setInput] = React.useState("");
  const [state, setState] = React.useState<InputState>(Pristine);
  const reColor: keyof typeof theme.colors =
    state === Pristine ? "text" : state === Valid ? "primary" : "danger";
  const color = theme.colors[reColor];

  const validate = () => {
    const valid = validator(input);
    setState(valid);
  };

  const onChangeText = (text: string) => {
    console.log(state);

    setInput(text);
    if (state !== Pristine) {
      validate();
    }
  };

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      height={44}
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
      paddingHorizontal="s"
    >
      <Box padding="s">
        <Icon name={icon} alignItems="center" {...{ color }} size={16} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          onBlur={validate}
          {...{ onChangeText }}
          {...props}
        />
      </Box>
      {(state === Valid || state === Invalid) && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          alignItems="center"
          backgroundColor={state === Valid ? "primary" : "danger"}
        >
          <Icon
            name={state === Valid ? "check" : "x"}
            color="white"
            size={16}
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
