import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? { backgroundColor: bgColor } : {},
            ]}
        >
            <Text
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor ? { color: fgColor } : {},
                ]}
            >
                {text}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 15,

        alignItems: "center",
        borderRadius: 5,
        marginVertical: 5,
    },
    container_PRIMARY: {
        backgroundColor: "#3498db",
    },
    container_TERTIARY: {},
    container_SECONDARY: {
        borderColor: "#3498db",
        borderWidth: 2,
    },
    text: {
        fontWeight: "bold",
        color: "white",
    },
    text_PRIMARY: {},
    text_TERTIARY: {
        color: "gray",
    },
    text_SECONDARY: {
        color: "#3498db",
    },
});

export default CustomButton;
