import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { useForm } from "react-hook-form";

import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";

const NewPasswordScreen = ({ navigation }) => {
    const { handleSubmit, control } = useForm();
    const { height } = useWindowDimensions();

    const onSubmitPressed = () => {
        navigation.navigate("Home");
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
                    placeholder="Code"
                    name="code"
                    control={control}
                    rules={{ required: "Code is required" }}
                />
                <CustomInput
                    placeholder="New Password"
                    name="newPassword"
                    control={control}
                    rules={{
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password should be minimum 8 charaters long",
                        },
                    }}
                    secureTextEntry
                />

                <CustomButton text="Submit" onPress={onSubmitPressed} />

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

export default NewPasswordScreen;
