import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { View, Button } from 'react-native';

export default function ReanimatedTest() {
  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: progress.value }],
    };
  });

  return (
    <View style={{ padding: 40 }}>
      <Button
        title="Animate"
        onPress={() => {
          progress.value = withTiming(150, { duration: 500 });
        }}
      />
      <Animated.View
        style={[
          { width: 50, height: 50, backgroundColor: 'tomato' },
          animatedStyle,
        ]}
      />
      <Button
        title="Return"
        onPress={() => {
          progress.value = withTiming(0, { duration: 500 });
        }}
      />
    </View>
  );
}
