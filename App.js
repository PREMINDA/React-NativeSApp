import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  Switch,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import Card from "./app/components/Card/Card";
import Icon from "./app/components/Icon/Icon";
import Listitem from "./app/components/Listitem/Listitem";
import MessageScree from "./app/screen/MessageScree";

import Screen from "./app/components/ScreenComponent/Screen";

import color from "./app/assets/config/color";

import Moredetail from "./app/screen/Moredetail";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import AccountScreen from "./app/screen/AccountScreen";
import ListingScreen from "./app/screen/ListingScreen";

import shopdata from "./data.js";
import AppText from "./app/components/AppText/AppText";
import AppTextInput from "./app/components/AppTextInput/AppTextInput";

export default function App() {
  const [typeText, settypeText] = useState("");
  const [swValue, setswValue] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

  // return <AppTextInput icon={"email"} placeholder="User Name" />;

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  return (
    <Picker
      ref={pickerRef}
      selectedValue={selectedLanguage}
      onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
    >
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
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
