import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { useEffect } from "react";
import { useInputStore, useSummaryStore } from "../../utils/store";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  const { inputText, setInputText } = useInputStore();
  const { summary, setSummary } = useSummaryStore();
  return (
    <ScrollView style={styles.container}>
       <View style={styles.card1}>
        <View
          style={{
            marginTop: 10,
            
            width: 20,
            height: 20,
            borderRadius: 50 / 2,
            backgroundColor: "#C4C4C4",
          }}
        ></View>
      <Text style={styles.input}>{inputText}</Text>
      </View>

      <View style={styles.card2}>
        <View
          style={{
            marginTop: 20,
            
            width: 20,
            height: 20,
            borderRadius: 50 / 2,
            backgroundColor: "#C4C4C4",
          }}
        ></View>
        <Text style={styles.output}>{summary}</Text>
      </View>
      {/* <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      /> */}
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F1F9",
  },
  card1:{
    flexDirection: "row-reverse",
    padding: 20,
  },
  card2:{
    flexDirection: "row",
    padding: 20,
  },
  input: {
    paddingLeft: 70,
    paddingRight: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "#4F4D60",
    textAlign: "left",
  },
  output: {
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "#4F4D60",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
