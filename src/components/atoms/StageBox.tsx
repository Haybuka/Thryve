import React from 'react';
import { createRestyleComponent, createVariant, VariantProps } from '@shopify/restyle';
import { Theme } from '@/config/theme';
import Box from '@/components/atoms/Box';

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
      elevation={2}
      shadowRadius={1}
      shadowOpacity={0.15}
      shadowOffset={{ width: 0, height: 1 }}
      borderWidth={active ? 2 : 0}
      borderColor={active ? 'pink' : 'transparent'}
      backgroundColor='white'
      {...props}

    />
  );
};

export default StageBox;
