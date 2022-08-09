import React from "react";

import { Box, Button, Container, Text } from "../../Components";
import TextInput from "../../Components/Forms/TextInput";
import SocialLogin from "../../Components/SocialLogin";
import Checkbox from "../../Components/Forms/Checkbox";
import { Formik } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

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
        <Formik
          validationSchema={LoginSchema}
          initialValues={{ email: "", password: "", remember: false }}
          onSubmit={(values) => console.log(values)}
        >
          {/* Callback */}
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            setFieldValue,
            errors,
            touched,
          }) => (
            <Box>
              <Box marginTop="m" marginBottom="m">
                <TextInput
                  icon="mail"
                  placeholder="Enter your Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email}
                  touched={touched.email}
                />
              </Box>
              <Box marginTop="m" marginBottom="m">
                <TextInput
                  icon="lock"
                  placeholder="Enter your Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={errors.password}
                  touched={touched.password}
                />
              </Box>
              <Box
                flexDirection="row"
                justifyContent="center"
                marginLeft="l"
                paddingLeft="xl"
              >
                <Checkbox
                  label="Remember me"
                  checked={values.remember}
                  onChange={() => setFieldValue("remember", !values.remember)}
                />
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
                  onPress={handleSubmit}
                />
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
}
