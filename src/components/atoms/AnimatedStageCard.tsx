import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from 'react-native-reanimated';
import React, { useEffect } from 'react';

type AnimatedStageCardProps = {
  index: number;
  children: React.ReactNode;
};

const AnimatedStageCard = ({
  index,
  children,
}: AnimatedStageCardProps) => {
  const translateY = useSharedValue(40);
  const opacity = useSharedValue(0);

  useEffect(() => {
    translateY.value = withDelay(
      index * 150,
      withTiming(0, { duration: 500 })
    );

    opacity.value = withDelay(
      index * 150,
      withTiming(1, { duration: 500 })
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      {children}
    </Animated.View>
  );
};

export default AnimatedStageCard