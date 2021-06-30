import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style, viewstyle }) {
  return (
    <SafeAreaView style={(styles.area, style)}>
      <View style={viewstyle}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  area: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#f8f4f4",
    flex: 1,
  },
});

export default Screen;
