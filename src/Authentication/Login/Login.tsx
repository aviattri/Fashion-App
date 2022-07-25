import React from "react";

import { Box, Button, Container, Text } from "../../Components";
import TextInput from "../../Components/Forms/TextInput";
import SocialLogin from "../../Components/SocialLogin";
import Checkbox from "../../Components/Forms/Checkbox";

const emailValidator = (email: string) =>
  //eslint-disable-next-line max-len
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

const passwordValidator = (password: string) => password.length >= 6;

export default function Login() {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => console.log("press")}>
          <Box flexDirection="row" justifyContent="center">
            <Text variant={"button"} color="white">
              Don't have an account?
            </Text>
            <Text variant={"button"} color="primary">
              Sign Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center">
          Use your credentials below to login to your account
        </Text>
        <Box marginTop="m" marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter your Email"
            validator={emailValidator}
          />
        </Box>
        <TextInput
          icon="lock"
          placeholder="Enter your Password"
          validator={passwordValidator}
        />
        <Box
          flexDirection="row"
          justifyContent="center"
          marginLeft="l"
          paddingLeft="xl"
        >
          <Checkbox label="Remember me" />
          <Button variant="transparent">
            <Text variant="button" color="primary">
              Forgot Password
            </Text>
          </Button>
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Login"
            onPress={() => console.log("presssed")}
          />
        </Box>
      </Box>
    </Container>
  );
}
