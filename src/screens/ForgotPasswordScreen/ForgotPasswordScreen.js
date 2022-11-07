import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";
import Logo from "../../../assets/memories_logo.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import SocialSignInButtons from "../../components/SocialSignInButtons";

const ForgotPasswordScreen = ({ navigation }) => {
    const [username, setUsername] = useState("");

    const { height } = useWindowDimensions();

    const onSendPressed = () => {
        navigation.navigate("NewPassword");
    };
    const onSignInPressed = () => {
        navigation.navigate("SignIn");
    };

    return (
        <View style={styles.root}>
            <View style={[styles.imageContainer, { height: height * 0.3 }]}>
                <Text style={styles.title}>Reset your password </Text>
            </View>
            <View style={[styles.btnContainer, { height: height * 0.7 }]}>
                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                />

                <CustomButton text="Send" onPress={onSendPressed} />

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

export default ForgotPasswordScreen;
