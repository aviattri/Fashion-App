import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Routes, StackNavigationProps } from "../Components/Navigation";
import { Box, Button, Container, Text } from "../Components";
import { ClosedButton } from "../Components";

interface PasswordChangedProps {}

const SIZE = 80;

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, "PasswordChanged">) => {
  return (
    <Container
      footer={
        <Box flexDirection="row" justifyContent="center">
          <ClosedButton onPress={() => navigation.pop()} />
        </Box>
      }
    >
      <Box flex={1} justifyContent="center" alignItems="center">
        <Box
          backgroundColor="primaryLight"
          style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
          alignItems="center"
          justifyContent="center"
          marginBottom="xl"
        >
          <Text variant="primary" textAlign="center">
            <Icon name="check" size={32} />
          </Text>
        </Box>
        <Text variant="title1" textAlign="center" marginBottom="l">
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
      </Box>
    </Container>
  );
};

export default PasswordChanged;
