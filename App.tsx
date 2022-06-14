import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

function changeColor() {
  // Sets current state of our buttons to neutral(grey) and allows for two other options
  const [status, setStatus] = useState<"MakeLess" | "Neutral" | "MakeMore">();

  const onPress = () => {
    if (status === "Neutral") {
      setStatus("MakeLess");
    } else if (status === "MakeLess") {
      setStatus("MakeMore");
    } else {
      setStatus("Neutral");
    }
  };
  return { status, onPress };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
