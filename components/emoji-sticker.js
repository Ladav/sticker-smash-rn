import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function EmojiSticker({ imageSize, stickerSource }) {
  const scaleImage = useSharedValue(imageSize);
  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);

  const doubleTapGesture = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage !== imageSize * 2) {
        scaleImage.value = imageSize * 2;
      }
    });
  const dragGesture = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  const imageStyles = useAnimatedStyle(() => ({
    width: withSpring(scaleImage.value),
    height: withSpring(scaleImage.value),
  }));
  const containerStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <GestureDetector gesture={dragGesture}>
      <Animated.View style={[containerStyles, { top: -350 }]}>
        <GestureDetector gesture={doubleTapGesture}>
          <Animated.Image
            source={stickerSource}
            resizeMode="contain"
            style={[imageStyles, { width: imageSize, height: imageSize }]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}
