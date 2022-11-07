import { StyleSheet, SafeAreaView } from "react-native";

import Navigation from "./src/navigations";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Navigation />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9F8FC",
    },
});
