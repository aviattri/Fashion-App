import React from "react";
import { Box, Text, useTheme } from "../../Components";
import { BorderlessButton } from "react-native-gesture-handler";
import { View } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
interface option {
  value: string;
  label?: string;
}
interface CheckboxGroupProps {
  options: option[];
  valueIsColor?: boolean;
}

const RoundedCheckboxGroup = ({
  options,
  valueIsColor,
}: CheckboxGroupProps) => {
  const [selectedValue, setSelectedValue] = React.useState<string[]>([]);
  const theme = useTheme();

  return (
    <Box flexDirection={"row"} flexWrap={"wrap"} marginTop={"m"}>
      {options.map(({ value }) => {
        const index = selectedValue?.indexOf(value);
        // ??
        const isSelected = index !== -1;
        const backgroundColor = isSelected
          ? theme.colors.primary
          : theme.colors.background2;

        return (
          <BorderlessButton
            key={value}
            onPress={() => {
              // ??
              if (isSelected) {
                selectedValue.splice(index, 1);
              } else {
                selectedValue.push(value);
              }
              setSelectedValue([...selectedValue]);
            }}
          >
            {/* Wrapper view to display the selected circular border effect  */}
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: isSelected ? 1 : 0,
                borderColor: theme.colors.background2,
                marginBottom: theme.spacing.m,
                marginRight: theme.spacing.s,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: valueIsColor ? value : backgroundColor,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* View to display Clothes Sizes */}
                {!valueIsColor && (
                  <Text
                    textAlign={"center"}
                    variant={"header"}
                    color={isSelected ? "background" : "secondary"}
                  >
                    {value.toUpperCase()}
                  </Text>
                )}
                {/* View to display Selected Clothes Colors */}
                {valueIsColor && isSelected && (
                  <Icon color="white" name="check" size={16} />
                )}
              </View>
            </View>
          </BorderlessButton>
        );
      })}
    </Box>
  );
};

export default RoundedCheckboxGroup;
