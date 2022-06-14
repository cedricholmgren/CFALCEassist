import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Filet />
      <Nuggets />
      <Spicy />
      <Strips />
      <GrilledFilets />
      <GrilledNuggets />
    </View>
  );
}
//function to cycle through colors every time onPress is called, will be used in buttons
function useColor() {
  // Sets current state of our buttons to neutral(grey) and allows for two other options
  const [status, setStatus] = useState<"MakeLess" | "Neutral" | "MakeMore">(
    "Neutral"
  );

  // When onPress is triggered cycle through states
  const onPress = () => {
    if (status === "Neutral") {
      setStatus("MakeLess");
    } else if (status === "MakeLess") {
      setStatus("MakeMore");
    } else {
      setStatus("Neutral");
    }
  };

  const backgroundColor =
    status === "Neutral"
      ? "gray"
      : status === "MakeLess"
      ? "red"
      : status === "MakeMore"
      ? "green"
      : "gray";

  return { backgroundColor, onPress };
}

// Buttons
//= status === "Neutral" ? "gray" : "blue";

const Filet = () => {
  const { backgroundColor, onPress } = useColor();
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
const Nuggets = () => {
  const { backgroundColor, onPress } = useColor();
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
const Spicy = () => {
  const { backgroundColor, onPress } = useColor();
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
const Strips = () => {
  const { backgroundColor, onPress } = useColor();
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
const GrilledFilets = () => {
  const { backgroundColor, onPress } = useColor();
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
const GrilledNuggets = () => {
  const { backgroundColor, onPress } = useColor();
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
    height: 40,
    //flex: 1,
    marginBottom: 40,
  },
});
