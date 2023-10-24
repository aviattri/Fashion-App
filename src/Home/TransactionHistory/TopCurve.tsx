import React from "react";
import { useTheme } from "../../Components";
import Svg, { Circle, ClipPath, Defs, Path, Rect } from "react-native-svg";
import { palette } from "../../Components/Theme";

interface TopCurveProps {
  footerHeight: number;
}

const TopCurve = ({ footerHeight }: TopCurveProps) => {
  console.log("footerHeight", footerHeight);
  const theme = useTheme();
  const size = theme.borderRadii.xl;

  return (
    <Svg
      width={size}
      height={size}
      style={{
        position: "absolute",
        bottom: footerHeight,
        right: 0,
      }}
      viewBox="0 0 1 1"
    >
      {/* This is to remove everything from top right */}
      <Defs>
        <ClipPath id="clip">
          <Path d="M 0 1 A 0 0, 0, 0, 0, 1 0 L 1 1" fill={"black"} />
        </ClipPath>
      </Defs>
      <Rect
        clipPath="url(#clip)"
        x={0}
        y={0}
        width={1}
        height={size}
        fill={palette.green}
      />
      <Circle
        clipPath="url(#clip)"
        cx={0.4}
        cy={0.6}
        r={0.5}
        fill={palette.orange}
      />
    </Svg>
  );
};

export default TopCurve;
