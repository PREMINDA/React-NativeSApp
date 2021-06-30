import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/ScreenComponent/Screen";
import Card from "../components/Card/Card";
import color from "../assets/config/color";

const listningitem = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 50,
    image: require("../assets/image/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 150,
    image: require("../assets/image/couch.jpg"),
  },
];

const ListingScreen = () => {
  return (
    <Screen style={styles.viewScreen} viewstyle={styles.screen}>
      <FlatList
        data={listningitem}
        keyExtractor={(listningitem) => listningitem.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subtitle={item.price} image={item.image} />
        )}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  screen: {
    padding: 16,
  },
  viewScreen: {
    backgroundColor: color.light,
    height: "100%",
  },
});

export default ListingScreen;
