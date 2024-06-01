import { Image, StyleSheet } from "react-native";

export default function ImageViwer(props) {
  return <Image source={props.source} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 16,
  },
});
