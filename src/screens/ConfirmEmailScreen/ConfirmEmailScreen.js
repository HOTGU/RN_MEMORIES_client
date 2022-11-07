import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";
import Logo from "../../../assets/memories_logo.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import SocialSignInButtons from "../../components/SocialSignInButtons";

const ConfirmEmailScreen = ({ navigation }) => {
    const [code, setCode] = useState("");
    const { height } = useWindowDimensions();

    const onConfirmPressed = () => {
        navigation.navigate("Home");
    };
    const onResendPressed = () => {
        console.warn("onResendPressed");
    };
    const onSignInPressed = () => {
        navigation.navigate("SignIn");
    };

    return (
        <View style={styles.root}>
            <View style={[styles.imageContainer, { height: height * 0.3 }]}>
                <Text style={styles.title}>Confirm your email</Text>
            </View>
            <View style={[styles.btnContainer, { height: height * 0.7 }]}>
                <CustomInput
                    placeholder="Enter your confirmation code"
                    value={code}
                    setValue={setCode}
                />

                <CustomButton text="Confirm" onPress={onConfirmPressed} />

                <CustomButton
                    text="Resend code"
                    onPress={onResendPressed}
                    type="SECONDARY"
                />
                <CustomButton
                    text="Back to Sign in"
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

export default ConfirmEmailScreen;
