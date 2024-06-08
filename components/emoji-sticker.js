import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function EmojiSticker({ imageSize, stickerSource }) {
  const scaleImage = useSharedValue(imageSize);
  const doubleTapGesture = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage !== imageSize * 2) {
        scaleImage.value = imageSize * 2;
      }
    });
  const imageStyles = useAnimatedStyle(() => ({
    width: withSpring(scaleImage.value),
    height: withSpring(scaleImage.value),
  }));

  return (
    <View style={{ top: -350 }}>
      <GestureDetector gesture={doubleTapGesture}>
        <Animated.Image
          source={stickerSource}
          resizeMode="contain"
          style={[imageStyles, { width: imageSize, height: imageSize }]}
        />
      </GestureDetector>
    </View>
  );
}
