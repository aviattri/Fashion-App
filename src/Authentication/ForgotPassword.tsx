import { View, Linking } from "react-native";
import React from "react";

import Footer from "../Components/Footer";
import { Box, Button, Container, Text } from "../Components";
import {
  AuthenticationRoutes,
  AuthNavigationProps,
  Routes,
  StackNavigationProps,
} from "../Components/Navigation";
import TextInput from "../Components/Forms/TextInput";

import { useFormik } from "formik";
import * as Yup from "yup";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = ({
  navigation,
}: AuthNavigationProps<"ForgotPassword">) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: ForgotPasswordSchema,
      initialValues: { email: "" },
      onSubmit: (values) => navigation.navigate("PasswordChanged"),
    }
  );

  const footer = (
    <Footer
      title="Don't work? "
      action="Try another way"
      onPress={() => Linking.openURL("mailto:help@support.com")}
    />
  );

  return (
    <Container pattern={1} {...{ footer }}>
      <Text variant="title1" textAlign="center" marginBottom="l">
        Forgot Password
      </Text>
      <Text variant="body" textAlign="center">
        Enter the email address associated with your account
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
            returnKeyLabel="go"
            returnKeyType="go"
            onSubmitEditing={() => handleSubmit()}
          />
        </Box>

        <Box alignItems="center" marginTop="m">
          {/* <Button
              variant="primary"
              label="Reset Password"
              onPress={handleSubmit}
            /> */}
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
