import React from 'react';
import { createRestyleComponent, createVariant, VariantProps } from '@shopify/restyle';
import { Theme } from '@/config/theme';
import Box from '@/components/Box';
import { StyleSheet } from 'react-native';

type StageBoxProps =
  VariantProps<Theme, 'boxVariants'> &
  React.ComponentProps<typeof Box> & {
    active?: boolean;
  };

const StageBoxBase = createRestyleComponent<
  VariantProps<Theme, 'boxVariants'> & React.ComponentProps<typeof Box>,
  Theme
>([createVariant({ themeKey: 'boxVariants' })], Box);

const StageBox: React.FC<StageBoxProps> = ({ active, ...props }) => {
  return (
    <StageBoxBase
      shadowColor={'shadow'}
      style={styles.items}
      {...props}
      borderWidth={active ? 1 : 0}
      borderColor={active ? 'pink' : 'transparent'}

    />
  );
};

export default StageBox;

const styles = StyleSheet.create({
  items: {

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 2.84,
    elevation: 3,
  }
})
