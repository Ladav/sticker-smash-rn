import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ImageViwer from "./components/image-viewer";
import Button from "./components/button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import CircleButton from "./components/circle-button";
import IconButton from "./components/icon-button";
import EmojiPicker from "./components/emoji-picker";
import EmojiList from "./components/emoji-list";
import EmojiSticker from "./components/emoji-sticker";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

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
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  }

  function onReset() {
    setShowAppOptions(false);
  }

  function onAddSticker() {
    setIsModalVisible(true);
  }

  function onModalClose() {
    setIsModalVisible(false);
  }

  function onStickerSelect(emoji) {
    setSelectedEmoji(emoji);
    onModalClose();
  }

  function onSaveImageAsync() {
    // we will implement this later
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViwer
          placeholderImageSource={PlaceholderImage}
          imageSource={selectedImage}
        />
        {selectedEmoji && (
          <EmojiSticker imageSize={40} stickerSource={selectedEmoji} />
        )}
      </View>
      <View style={styles.footerContainer}>
        {showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="undo" label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton icon="save" label="Save" onPress={onSaveImageAsync} />
            </View>
          </View>
        ) : (
          <View>
            <Button
              label="Choose photo"
              theme="primary"
              onPress={pickImageAsync}
            />
            <Button
              label="Use this photo"
              onPress={() => setShowAppOptions(true)}
            />
          </View>
        )}
      </View>

      <EmojiPicker visible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={onStickerSelect} onClose={onModalClose} />
      </EmojiPicker>

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
    position: "relative",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 56,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    buttom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
