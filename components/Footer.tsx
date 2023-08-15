import { View, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import { Feather } from "@expo/vector-icons";
import { useInputStore, useSummaryStore } from "../utils/store";
import { MaterialIcons } from "@expo/vector-icons";

const Footer = () => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL as string;
  const [inputHeight, setInputHeight] = useState(40);

  const { inputText, setInputText } = useInputStore();
  const { summary, setSummary } = useSummaryStore();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSumbit = () => {
    console.log("api url", apiUrl);
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: inputText,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setSummary(data.summary);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsSubmitted(false);
      });
  };
  const onReset = () => {
    setInputText("");
    setSummary("");
    setIsSubmitted(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatFooter}>
        <TextInput
          placeholder="Type a message"
          multiline
          value={inputText}
          onChangeText={setInputText}
          style={[styles.input, { height: Math.max(40, inputHeight) }]}
          onContentSizeChange={(e: any) =>
            setInputHeight(e.nativeEvent.contentSize.height)
          }
        />
        {!isSubmitted ? (
          <View
            style={{ flex: 0.1, justifyContent: "center", alignSelf: "center" }}
          >
            <Feather onPress={onSumbit} name="send" size={24} color="black" />
          </View>
        ) : (
          <View
            style={{ flex: 0.1, justifyContent: "center", alignSelf: "center" }}
          >
            <MaterialIcons onPress={onReset} name="loop" size={24} color="black" />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    backgroundColor: Colors.greyBackground,
  },
  chatFooter: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    minHeight: 60,
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
  input: {
    marginRight: 10,
    flex: 0.9,
    minHeight: 40, // Minimum height
    maxHeight: 100, // Maximum height (you can adjust this value as per your requirement)
  },
});

export default Footer;
