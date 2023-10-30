import React from "react";
import { Box, Button } from "../../Components";
import { Animated, Dimensions, View } from "react-native";

const { width, height } = Dimensions.get("screen");

interface option {
  value: string;
  label: string;
}
interface CheckboxGroupProps {
  options: option[];
}

const CheckboxGroup = ({ options }: CheckboxGroupProps) => {
  const [selectedValue, setSelectedValue] = React.useState<string[]>([]);
  return (
    <Box
      flexDirection={"row"}
      flexWrap={"wrap"}
      // padding={"m"}
      alignItems={"center"}
    >
      {options.map(({ value, label }) => {
        // ??
        const index = selectedValue?.indexOf(value);
        const isSelected = index !== -1;

        return (
          <Button
            key={value}
            variant={isSelected ? "primary" : "default"}
            onPress={() => {
              if (isSelected) {
                selectedValue.splice(index, 1);
              } else {
                selectedValue.push(value);
              }
              setSelectedValue([...selectedValue]);
            }}
            label={label}
            style={{
              width: "auto",
              height: "auto",
              padding: 16,
              margin: 5,
            }}
          />
        );
      })}
    </Box>
  );
};

export default CheckboxGroup;
