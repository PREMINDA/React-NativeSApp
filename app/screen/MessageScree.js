import React from "react";
import { FlatList } from "react-native";
import Listitem from "../components/Listitem/Listitem";
const messages = [
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
  const renderItem = ({ item }) => (
    <Listitem
      title={item.title}
      subtitle={item.description}
      image={require("../assets/image/asdasd.png")}
    />
  );

  return (
    <FlatList
      data={messages}
      keyExtractor={(messages) => messages.id.toString()}
      renderItem={renderItem}
    />
  );
}

export default MessageScree;
