import { Image, StyleSheet } from "react-native";

export default function ImageViwer({ placeholderImageSource, imageSource }) {
  let source = placeholderImageSource;
  if (imageSource) {
    if (typeof imageSource === "string") {
      source = { uri: imageSource };
    } else {
      source = imageSource;
    }
  }
  console.log("source", source);
  return <Image source={source} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 16,
  },
});
