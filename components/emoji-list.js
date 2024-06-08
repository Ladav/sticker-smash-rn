import { FlatList, Image, Platform, Pressable, StyleSheet } from "react-native";

const Emoji1 = require("../assets/images/emoji1.png");
const Emoji2 = require("../assets/images/emoji2.png");
const Emoji3 = require("../assets/images/emoji3.png");
const Emoji4 = require("../assets/images/emoji4.png");
const Emoji5 = require("../assets/images/emoji5.png");
const Emoji6 = require("../assets/images/emoji6.png");
const emojies = [Emoji1, Emoji2, Emoji3, Emoji4, Emoji5, Emoji6];

export default function EmojiList({ onSelect, onClose }) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emojies}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onClose();
          }}
        >
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
