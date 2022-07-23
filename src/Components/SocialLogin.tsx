import { View, Text } from "react-native";
import React from "react";
import Svg, { Circle, ClipPath, Defs, Path, Use } from "react-native-svg";
import theme, { Box } from "./Theme";

const SIZE = theme.borderRadii.l;
const Google = () => (
  <Svg
    width={30.8}
    height={30.8}
    viewBox="-380.25 274.7 65.8 65.8"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <Circle
      cx={-347.3}
      cy={307.6}
      r={32.9}
      style={{
        fill: "#e0e0e0",
      }}
    />
    <Circle
      cx={-347.3}
      cy={307.1}
      r={32.4}
      style={{
        fill: "#fff",
      }}
    />
    <Defs>
      <Path
        id="a"
        d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
      />
    </Defs>
    <ClipPath id="b">
      <Use xlinkHref="#a" overflow="visible" />
    </ClipPath>
    <Path
      d="M-370.8 320.3v-26l17 13z"
      style={{
        clipPath: "url(#b)",
        fill: "#fbbc05",
      }}
    />
    <Defs>
      <Path
        id="c"
        d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
      />
    </Defs>
    <ClipPath id="d">
      <Use xlinkHref="#c" overflow="visible" />
    </ClipPath>
    <Path
      d="m-370.8 294.3 17 13 7-6.1 24-3.9v-14h-48z"
      style={{
        clipPath: "url(#d)",
        fill: "#ea4335",
      }}
    />
    <Defs>
      <Path
        id="e"
        d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
      />
    </Defs>
    <ClipPath id="f">
      <Use xlinkHref="#e" overflow="visible" />
    </ClipPath>
    <Path
      d="m-370.8 320.3 30-23 7.9 1 10.1-15v48h-48z"
      style={{
        clipPath: "url(#f)",
        fill: "#34a853",
      }}
    />
    <Defs>
      <Path
        id="g"
        d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
      />
    </Defs>
    <ClipPath id="h">
      <Use xlinkHref="#g" overflow="visible" />
    </ClipPath>
    <Path
      d="m-322.8 331.3-31-24-4-3 35-10z"
      style={{
        clipPath: "url(#h)",
        fill: "#4285f4",
      }}
    />
  </Svg>
);

const Facebook = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0  512",
    }}
    xmlSpace="preserve"
  >
    <Path
      style={{
        fill: "#385c8e",
      }}
      d="M134.941 272.691h56.123v231.051a8.256 8.256 0 0 0 8.258 8.258h95.159a8.256 8.256 0 0 0 8.258-8.258V273.78h64.519a8.26 8.26 0 0 0 8.204-7.315l9.799-85.061a8.259 8.259 0 0 0-8.202-9.203h-74.316V118.88c0-16.073 8.654-24.224 25.726-24.224h48.59a8.258 8.258 0 0 0 8.258-8.258V8.319a8.256 8.256 0 0 0-8.258-8.258h-66.965A65.863 65.863 0 0 0 307.027 0c-11.619 0-52.006 2.281-83.909 31.63-35.348 32.524-30.434 71.465-29.26 78.217v62.352H134.94a8.256 8.256 0 0 0-8.258 8.258v83.975a8.26 8.26 0 0 0 8.259 8.259z"
    />
  </Svg>
);

const Apple = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 291.538 291.538"
    style={{
      enableBackground: "new 0 0 291.538 291.538",
    }}
    xmlSpace="preserve"
  >
    <Path
      style={{
        fill: "#000",
      }}
      d="M188.373 44.308c10.97-11.744 18.39-28.049 16.359-44.308-15.804.564-34.958 9.277-46.302 21.02-10.169 10.396-19.072 27.011-16.696 42.951 17.635 1.193 35.651-7.938 46.639-19.663zm33.657 112.285c-.337-36.451 28.859-53.958 30.152-54.804-16.414-24.753-41.977-28.14-51.081-28.522-21.767-2.285-42.442 13.182-53.493 13.182-11.006 0-28.03-12.882-46.083-12.536-23.733.391-45.601 14.211-57.79 36.114-24.654 44.063-6.319 109.336 17.705 145.077 11.744 17.497 25.727 37.125 44.089 36.415 17.725-.71 24.407-11.789 45.792-11.789 21.394 0 27.384 11.789 46.101 11.434 19.045-.355 31.098-17.834 42.742-35.386 13.473-20.292 19.027-39.938 19.345-40.93-.409-.237-37.088-14.666-37.479-58.255z"
    />
  </Svg>
);
const SocialIcon = ({ children }: SocialIconProps) => {
  return (
    <Box
      backgroundColor="white"
      padding="s"
      width={44}
      height={44}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
      marginHorizontal="s"
    >
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
