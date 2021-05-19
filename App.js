import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Card from "./app/components/Card/Card";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import WelcomeScreen from "./app/screen/WelcomeScreen";

export default function App() {
  return (
    <View style={styles.bgstlyes}>
      <Card
        title="Jacket"
        subtitle="100$"
        image={require("./app/assets/image/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bgstlyes: {
    backgroundColor: "#f7f7f7",
    padding: 20,
    paddingTop: 50,
    height: "100%",
  },
});
