import React, { useRef } from "react";
import { TextInput as RNTextInput } from "react-native";
import { Box, Button, Container, Text } from "../Components";
import { Routes, StackNavigationProps } from "../Components/Navigation";

import TextInput from "../Components/Forms/TextInput";
import Footer from "../Components/Footer";

import { useFormik } from "formik";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")], "Passwords don't match")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function SignUp({
  navigation,
}: StackNavigationProps<Routes, "SignUp">) {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: SignUpSchema,
      initialValues: {
        email: "",
        password: "",
        passwordConfirmation: "",
      },
      onSubmit: (values) => console.log(values),
    }
  );

  const password = useRef<RNTextInput>(null);
  const passwordConfirmation = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title="Already have an account? "
      action="Login here"
      onPress={() => navigation.navigate("Login")}
    />
  );

  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Create account
        </Text>
        <Text variant="body" textAlign="center">
          Let us know what your name, email, and your password
        </Text>

        <Box>
          <Box marginTop="m" marginBottom="m">
            {/* Email */}
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
            {/* Password */}
            <TextInput
              ref={password}
              icon="lock"
              placeholder="Enter your Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors.password}
              touched={touched.password}
              autoCapitalize="none"
              returnKeyLabel="next"
              returnKeyType="next"
              onSubmitEditing={() => passwordConfirmation.current?.focus()}
              secureTextEntry
            />
          </Box>
          <Box marginTop="m">
            {/* Confirm Password */}
            <TextInput
              ref={passwordConfirmation}
              icon="lock"
              placeholder="Confirm Password"
              onChangeText={handleChange("passwordConfirmation")}
              onBlur={handleBlur("passwordConfirmation")}
              error={errors.passwordConfirmation}
              touched={touched.passwordConfirmation}
              autoCapitalize="none"
              returnKeyLabel="next"
              returnKeyType="next"
              onSubmitEditing={() => handleSubmit()}
              secureTextEntry
            />
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button variant="primary" label="SignUp" onPress={handleSubmit} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
