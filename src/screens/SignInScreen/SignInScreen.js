import React, { useState } from "react";
import { View, Image, StyleSheet, useWindowDimensions } from "react-native";

import Logo from "../../../assets/memories_logo.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import SocialSignInButtons from "../../components/SocialSignInButtons";

const SignInScreen = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { height } = useWindowDimensions();

    const onSignInPressed = () => {
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
                    value={username}
                    setValue={setUsername}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />
                <CustomButton text="Sign in" onPress={onSignInPressed} />
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
