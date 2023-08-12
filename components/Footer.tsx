import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chatFooter}>
        <TextInput placeholder="Type a message" />
        <View style={{ flex: 0.1, alignItems: 'center' }}>
          <Feather name="send" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: Colors.greyBackground,
  },
  chatFooter: {
    flexDirection: "row",
    flex:0.9,
    justifyContent: "space-between",
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    height: 60,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
export default Footer;
