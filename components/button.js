import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet, View, Text } from "react-native";

export default function CustomButton({ label, theme, onPress }) {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          {
            borderWidth: 4,
            borderRadius: 16,
            borderColor: "#ffd33d",
          },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#000" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.buttonContainer}
        onPress={() => alert("You pressed a button.")}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 4,
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
