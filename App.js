import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ImageViwer from "./components/image-viewer";
import CustomButton from "./components/button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  async function pickImageAsync() {
    const result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      allowsEditing: true,
      aspect: [4, 3],
      videoQuality: 0,
    });
    console.log(result);
    if (!result.canceled && result.assets[0].uri) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViwer
          placeholderImageSource={PlaceholderImage}
          imageSource={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <CustomButton
          label="Choose photo"
          theme="primary"
          onPress={pickImageAsync}
        />
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
