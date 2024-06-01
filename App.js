import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ImageViwer from "./components/image-viewer";
import CustomButton from "./components/button";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViwer source={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <CustomButton label="Choose photo" theme="primary" />
        <CustomButton label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 56,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
