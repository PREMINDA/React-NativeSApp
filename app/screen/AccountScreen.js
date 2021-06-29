import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Listitem from "../components/Listitem/Listitem";
import Screen from "../components/ScreenComponent/Screen";
import color from "../assets/config/color";
import Icon from "../components/Icon/Icon";

const listdata = [
  {
    title: "My Listning",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: color.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: color.secondary,
    },
  },
];
function AccountScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Listitem
          image={require("../assets/image/asdasd.png")}
          title="Preminda Bandara"
          subtitle="preminda@gmail.com"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={listdata}
          keyExtractor={(listdata) => listdata.title}
          renderItem={({ item }) => (
            <Listitem
              title={item.title}
              IconComponetnt={
                <Icon
                  name={item.icon.name}
                  bgcolor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
