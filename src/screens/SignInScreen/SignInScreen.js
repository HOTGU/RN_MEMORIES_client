import React, { useState } from "react";
import { View, Image, StyleSheet, useWindowDimensions, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";

import Logo from "../../../assets/memories_logo.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import SocialSignInButtons from "../../components/SocialSignInButtons";

const SignInScreen = ({ navigation }) => {
    const { height } = useWindowDimensions();

    const { control, handleSubmit } = useForm();

    const onSignInPressed = (data) => {
        console.log(data);
        navigation.navigate("Home");
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPassword");
    };
    const onSignUpPressed = () => {
        navigation.navigate("SignUp");
    };

    return (
        <View style={styles.root}>
            <View style={[styles.imageContainer, { height: height * 0.3 }]}>
                <Image source={Logo} style={styles.logo} resizeMode="contain" />
            </View>
            <View style={[styles.btnContainer, { height: height * 0.7 }]}>
                <CustomInput
                    placeholder="Username"
                    control={control}
                    rules={{ required: "Username is required" }}
                    name="username"
                />
                <CustomInput
                    placeholder="Password"
                    name="password"
                    control={control}
                    rules={{
                        required: "Password is required",
                        minLength: {
                            value: 3,
                            message: "Password should be minimum 3 characters long",
                        },
                    }}
                    secureTextEntry
                />

                <TextInput placeholder="Password" />
                <CustomButton text="Sign in" onPress={handleSubmit(onSignInPressed)} />
                <CustomButton
                    text="Forgot password?"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />

                <SocialSignInButtons />

                <CustomButton
                    text="Don't have an account? Create One"
                    onPress={onSignUpPressed}
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
    imageContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 2,
        // borderColor: "red",
    },
    btnContainer: {
        width: "100%",
        // borderWidth: 2,
        // borderColor: "blue",
    },
    logo: {
        maxWidth: 150,
    },
});

export default SignInScreen;
