import React, { useState } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { Controller, useForm } from "react-hook-form";

import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import SocialSignInButtons from "../../components/SocialSignInButtons";

const EMAIL_REGEX =
    /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;

const SignUpScreen = ({ navigation }) => {
    const { height } = useWindowDimensions();
    const { control, handleSubmit, watch } = useForm();
    const pwd = watch("password");

    const onRegisterPressed = (data) => {
        console.log(data);
        navigation.navigate("ConfirmEmail");
    };
    const onTermsOfUsePressed = () => {
        console.warn("onTermsOfUsePressed");
    };
    const onPrivacyPolicyPressed = () => {
        console.warn("onPrivacy PolicyPressed");
    };
    const onSignInPressed = () => {
        console.warn("SignIn");
    };

    return (
        <View style={styles.root}>
            <View style={[styles.imageContainer, { height: height * 0.3 }]}>
                <Text style={styles.title}>Create an accout</Text>
            </View>
            <View style={[styles.btnContainer, { height: height * 0.7 }]}>
                <CustomInput
                    placeholder="Username"
                    control={control}
                    rules={{
                        required: "Username is required",
                        minLength: {
                            value: 3,
                            message: "Username should be minimum 3 cahracters long",
                        },
                        maxLengh: {
                            value: 24,
                            message: "Username should be max 24 characters logn",
                        },
                    }}
                    name="username"
                />
                <CustomInput
                    placeholder="Email"
                    control={control}
                    rules={{
                        required: "Email is required",
                        pattern: { value: EMAIL_REGEX, message: "Email is invali" },
                    }}
                    name="email"
                />
                <CustomInput
                    placeholder="Password"
                    name="password"
                    control={control}
                    rules={{
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password should be minimum 8 characters long",
                        },
                    }}
                    secureTextEntry
                />
                <CustomInput
                    placeholder="Password Repeat"
                    name="passwordRepeat"
                    control={control}
                    rules={{
                        validate: (value) => value === pwd || "Password do not match",
                    }}
                    secureTextEntry
                />
                <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)} />

                <Text>
                    By register, you confirm that you accept out{" "}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>
                        Terms of Use
                    </Text>{" "}
                    and{" "}
                    <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
                        Privacy Policy
                    </Text>
                </Text>

                <SocialSignInButtons />
                <CustomButton
                    text="Have an account? Sign in"
                    onPress={onSignInPressed}
                    type="TERTIARY"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#051c60",
    },
    imageContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    btnContainer: {
        width: "100%",
    },
    logo: {
        maxWidth: 150,
    },
    link: {
        color: "#fdb075",
    },
});

export default SignUpScreen;
