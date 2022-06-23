import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.row}>
        <View style={styles.fifty}>
          <FiletBanner />
        </View>
        <View style={styles.fifty}>
          <Filet />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.fifty}>
          <NuggetBanner />
        </View>
        <View style={styles.fifty}>
          <Nuggets />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.fifty}>
          <SpicyBanner />
        </View>
        <View style={styles.fifty}>
          <Spicy />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.fifty}>
          <StripsBanner />
        </View>
        <View style={styles.fifty}>
          <Strips />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.fifty}>
          <GrilledfiletBanner />
        </View>
        <View style={styles.fifty}>
          <GrilledFilets />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.fifty}>
          <GrillednuggetBanner />
        </View>
        <View style={styles.fifty}>
          <GrilledNuggets />
        </View>
      </View>
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
  // cycles through if else statements using colors linked with the status of useColor
  const backgroundColor =
    status === "Neutral"
      ? "gray"
      : status === "MakeLess"
      ? "red"
      : status === "MakeMore"
      ? "limegreen"
      : "gray";

  return { backgroundColor, onPress, status };
}

// Buttons

const Filet = () => {
  const { backgroundColor, onPress, status } = useColor();
  const filetColor = { backgroundColor };
  return (
    <View>
      <TouchableOpacity
        style={[styles.buttonBox, filetColor]}
        onPress={onPress}
      >
        <Text style={styles.textConfig}>{status}</Text>
      </TouchableOpacity>
    </View>
  );
};
const Nuggets = () => {
  const { backgroundColor, onPress, status } = useColor();
  const filetColor = { backgroundColor };
  return (
    <View>
      <TouchableOpacity
        style={[styles.buttonBox, filetColor]}
        onPress={onPress}
      >
        <Text style={styles.textConfig}>{status}</Text>
      </TouchableOpacity>
    </View>
  );
};
const Spicy = () => {
  const { backgroundColor, onPress, status } = useColor();
  const filetColor = { backgroundColor };
  return (
    <View>
      <TouchableOpacity
        style={[styles.buttonBox, filetColor]}
        onPress={onPress}
      >
        <Text style={styles.textConfig}>{status}</Text>
      </TouchableOpacity>
    </View>
  );
};
const Strips = () => {
  const { backgroundColor, onPress, status } = useColor();
  const filetColor = { backgroundColor };
  return (
    <View>
      <TouchableOpacity
        style={[styles.buttonBox, filetColor]}
        onPress={onPress}
      >
        <Text style={styles.textConfig}>{status}</Text>
      </TouchableOpacity>
    </View>
  );
};
const GrilledFilets = () => {
  const { backgroundColor, onPress, status } = useColor();
  const filetColor = { backgroundColor };
  return (
    <View>
      <TouchableOpacity
        style={[styles.buttonBox, filetColor]}
        onPress={onPress}
      >
        <Text style={styles.textConfig}>{status}</Text>
      </TouchableOpacity>
    </View>
  );
};
const GrilledNuggets = () => {
  const { backgroundColor, onPress, status } = useColor();
  const filetColor = { backgroundColor };
  return (
    <View>
      <TouchableOpacity
        style={[styles.buttonBox, filetColor]}
        onPress={onPress}
      >
        <Text style={styles.textConfig}>{status}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Button side banners

const FiletBanner = () => {
  return (
    <View style={styles.FsideBanner}>
      <Text style={styles.textConfig}>Filets</Text>
    </View>
  );
};
const NuggetBanner = () => {
  return (
    <View style={styles.NsideBanner}>
      <Text style={styles.textConfig}>Nuggets</Text>
    </View>
  );
};
const SpicyBanner = () => {
  return (
    <View style={styles.SsideBanner}>
      <Text style={styles.textConfig}>Spicy</Text>
    </View>
  );
};
const StripsBanner = () => {
  return (
    <View style={styles.STsideBanner}>
      <Text style={styles.textConfig}>Strips</Text>
    </View>
  );
};
const GrilledfiletBanner = () => {
  return (
    <View style={styles.GFsideBanner}>
      <Text style={styles.textConfig}>Grilled Filets</Text>
    </View>
  );
};
const GrillednuggetBanner = () => {
  return (
    <View style={styles.GNsideBanner}>
      <Text style={styles.textConfig}>Grilled Nuggets</Text>
    </View>
  );
};

//empty space for formatting

const EmptySpace = () => {
  return <View style={styles.emptySpace}></View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    flex: 1,
  },

  fifty: {
    flex: 1,
    alignItems: "center",
  },
  buttonBox: {
    flexGrow: 1,
    width: 160,
    height: 140,
    marginBottom: 20,
    marginTop: 20,
  },

  textConfig: {
    fontSize: 20,
  },
  // Side banners
  FsideBanner: {
    flex: 1,
    width: 160,
    height: 90,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: "blue",
  },
  NsideBanner: {
    flex: 1,
    width: 160,
    height: 90,
    marginBottom: 20,
    backgroundColor: "pink",
    marginTop: 20,
  },
  SsideBanner: {
    flex: 1,
    width: 160,
    height: 90,
    marginBottom: 20,
    backgroundColor: "orangered",
    marginTop: 20,
  },
  STsideBanner: {
    flex: 1,
    width: 160,
    height: 90,
    marginBottom: 20,
    backgroundColor: "green",
    marginTop: 20,
  },
  GFsideBanner: {
    flex: 1,
    width: 160,
    height: 90,
    marginBottom: 20,
    backgroundColor: "darkkhaki",
    marginTop: 20,
  },
  GNsideBanner: {
    flex: 1,
    width: 160,
    height: 90,
    marginBottom: 20,
    backgroundColor: "lightslategrey",
    marginTop: 20,
  },
  emptySpace: {
    flex: 1,
    //width: 160,
    //height: 90,
  },
});
