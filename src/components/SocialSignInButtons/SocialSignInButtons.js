import { View, Text } from "react-native";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";

const SocialSignInButtons = () => {
    const onSignInFacebook = () => {
        console.warn("onSignInFacebook");
    };
    const onSignInGoogle = () => {
        console.warn("onSignInGoogle");
    };
    return (
        <>
            <CustomButton
                text="Sign in Facebook"
                onPress={onSignInFacebook}
                bgColor="#f9f8fc"
                // bgColor="#f9f8fc"
                fgColor="#3498db"
            />
            <CustomButton
                text="Sign in Google"
                onPress={onSignInGoogle}
                bgColor="#f9f8fc"
                // bgColor="#f9f8fc"
                fgColor="#dd4d44"
            />
        </>
    );
};

export default SocialSignInButtons;
