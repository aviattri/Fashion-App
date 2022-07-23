import React from "react";

import { Box, Button, Container, Text } from "../../Components";
import SocialLogin from "../../Components/SocialLogin";

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

  return <Container {...{ footer }}></Container>;
}
