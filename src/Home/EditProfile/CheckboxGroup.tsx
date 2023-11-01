import React from "react";
import { Box, Button } from "../../Components";

interface option {
  value: string;
  label?: string;
}
interface CheckboxGroupProps {
  options: option[];
  radio?: boolean;
}

const CheckboxGroup = ({ options, radio }: CheckboxGroupProps) => {
  const [selectedValue, setSelectedValues] = React.useState<string[]>([]);
  return (
    <Box flexDirection={"row"} flexWrap={"wrap"} marginTop={"m"}>
      {options.map(({ value, label }) => {
        // ??
        const index = selectedValue?.indexOf(value);
        const isSelected = index !== -1;

        return (
          <Button
            key={value}
            variant={isSelected ? "primary" : "default"}
            onPress={() => {
              if (radio) {
                setSelectedValues([value]);
              } else {
                if (isSelected) {
                  selectedValue.splice(index, 1);
                } else {
                  selectedValue.push(value);
                }
                setSelectedValues([...selectedValue]);
              }
            }}
            label={label}
            style={{
              width: "auto",
              height: "auto",
              padding: 16,
              marginBottom: 8,
              marginRight: 4,
            }}
          />
        );
      })}
    </Box>
  );
};

export default CheckboxGroup;
