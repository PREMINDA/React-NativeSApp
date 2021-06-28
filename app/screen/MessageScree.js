import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Listitem from "../components/Listitem/Listitem";
import ListItemdelete from "../components/ListItemDelete/ListItemdelete";
import Screen from "../components/ScreenComponent/Screen";
import Seperator from "../components/Seperator/Seperator";
const initialMessages = [
  {
    id: 1,
    title: "t1",
    description: "d1",
    image: require("../assets/image/asdasd.png"),
  },
  {
    id: 2,
    title: "t2",
    description: "d2",
    image: require("../assets/image/asdasd.png"),
  },
];

function MessageScree(props) {
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message) => {
    const newMessage = messages.filter((m) => m.id !== message.id);
    setMessages(newMessage);
  };

  const renderItem = ({ item }) => (
    <Listitem
      title={item.title}
      subtitle={item.description}
      image={require("../assets/image/asdasd.png")}
      onPress={() => console.log("Message click ", item)}
      renderRightActions={() => (
        <ListItemdelete onPress={() => handleDelete(item)} />
      )}
    />
  );

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={Seperator}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});

export default MessageScree;
