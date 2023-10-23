import React from "react";

import { Routes, StackNavigationProps } from "../Components/Navigation";
import {
  Box,
  Button,
  Container,
  RoundedIconButton,
  RoundedIcons,
  Text,
} from "../Components";

// interface PasswordChangedProps {}

const SIZE = 80;

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, "PasswordChanged">) => {
  return (
    <Container
      pattern={0}
      footer={
        <Box flexDirection="row" justifyContent="center">
          <RoundedIconButton
            color="secondary"
            backgroundColor="background"
            name="x"
            size={60}
            onPress={() => navigation.pop()}
          />
        </Box>
      }
    >
      <Box alignSelf="center">
        <RoundedIcons
          name="check"
          size={SIZE}
          backgroundColor="primaryLight"
          color="primary"
        />
      </Box>

      <Text variant="title1" textAlign="center" marginVertical="l">
        Your Password was successfully changed
      </Text>
      <Text variant="body" textAlign="center">
        Close this window and login again
      </Text>
      <Box alignItems="center" marginTop="m">
        <Button
          variant="primary"
          label="Login"
          onPress={() => navigation.navigate("Login")}
        />
      </Box>
    </Container>
  );
};

export default PasswordChanged;
