import React from 'react';
import { Pressable, PressableProps, ViewStyle } from 'react-native';
import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import { Theme } from '@/config/theme';

type RadioBoxProps = VariantProps<Theme, 'boxVariants'> & PressableProps & {
  style?: ViewStyle; // allow overriding width/height
};

const RadioBox = createRestyleComponent<RadioBoxProps, Theme>(
  [createVariant({ themeKey: 'boxVariants' })],
  Pressable
);

type Props = {
  selected?: boolean;
  label?: string;
  onPress?: () => void;
  width? :number, height? : number // optional override for outer circle
};

const RadioIndicator: React.FC<Props> = ({ selected, label, onPress, width=16,height=16, }) => {

  return (
    <RadioBox
      variant="radio"
      onPress={onPress}
      hitSlop={10}
      accessible
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      accessibilityLabel={label}
      accessibilityHint="Double tap to select"
    // eslint-disable-next-line react-native/no-inline-styles
    style={{width,height,borderRadius : height /2, borderColor : selected ? 'pink' : 'transparent'}}
    >
      {selected && (
        <RadioBox
          variant="radioInner"
        />
      )}
    </RadioBox>
  );
};

export default RadioIndicator;
