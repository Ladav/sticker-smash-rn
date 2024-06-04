import { View, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function CircleButton({ onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 68,
    width: 68,
    borderWidth: 4,
    borderWidth: 4,
    borderRadius: 100,
    borderColor: "#ffd33d",
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
  button: {
    borderRadius: 100,
    width: "100%",
    height: "100%",
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
  },
});
