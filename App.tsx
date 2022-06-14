import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Filet />
    </View>
  );
}
//function to cycle through colors every time onPress is called, will be used in buttons
function changeColor() {
  // Sets current state of our buttons to neutral(grey) and allows for two other options
  const [status, setStatus] = useState<"MakeLess" | "Neutral" | "MakeMore">();

  // When onPress is triggered cycle through states
  const onPress = () => {
    if (status === "Neutral") {
      setStatus("MakeLess");
    } else if (status === "MakeLess") {
      setStatus("MakeMore");
    } else if (status === "MakeMore") {
      setStatus("Neutral");
    }
  };
  return { status, onPress };
}

// Buttons
//= status === "Neutral" ? "gray" : "blue";

const Filet = () => {
  const { status, onPress } = changeColor();
  const backgroundColor =
    status === "Neutral"
      ? "gray"
      : status === "MakeLess"
      ? "red"
      : status === "MakeMore"
      ? "green"
      : "gray";

  const filetColor = { backgroundColor };
  return (
    <View>
      <TouchableOpacity
        style={[styles.buttonBox, filetColor]}
        onPress={onPress}
      ></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBox: {
    width: 320,
    flex: 1,
    padding: 20,
  },
});
