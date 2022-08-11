import React, { useRef } from "react";

import { Box, Button, Container, Text } from "../../Components";
import TextInput from "../../Components/Forms/TextInput";
import Checkbox from "../../Components/Forms/Checkbox";
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "../../Components/Footer";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function Login() {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    setFieldValue,
    errors,
    touched,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: "", password: "", remember: false },
    onSubmit: (values) => console.log(values),
  });

  const password = useRef<typeof TextInput>(null);

  const footer = (
    <Footer
      title="Don't have an account? "
      action="Sign   Up here"
      onPress={() => console.log("Singup")}
    />
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

        {/* Callback */}

        <Box>
          <Box marginTop="m" marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter your Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              autoCapitalize="none"
              returnKeyLabel="next"
              returnKeyType="next"
              onSubmitEditing={() => password.current?.focus()}
            />
          </Box>
          <Box marginTop="m" marginBottom="m">
            <TextInput
              ref={password}
              icon="lock"
              placeholder="Enter your Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors.password}
              touched={touched.password}
              autoCapitalize="none"
              returnKeyLabel="go"
              returnKeyType="go"
              onSubmitEditing={() => handleSubmit()}
              secureTextEntry
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
            <Button variant="primary" label="Login" onPress={handleSubmit} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
