import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Card from "./app/components/Card/Card";
import Icon from "./app/components/Icon/Icon";
import Listitem from "./app/components/Listitem/Listitem";
import MessageScree from "./app/screen/MessageScree";

import Moredetail from "./app/screen/Moredetail";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import WelcomeScreen from "./app/screen/WelcomeScreen";

import shopdata from "./data.js";

export default function App() {
  return (
    <View>
      <Listitem
        title={"My Title"}
        IconComponetnt={<Icon name="email"></Icon>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
  },
  bgstlyes: {
    backgroundColor: "#f7f7f7",
    padding: 20,
    paddingTop: 50,
    height: "100%",
  },
});
