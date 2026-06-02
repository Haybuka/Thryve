
import {  ImageProps, Image } from 'react-native';
import { createRestyleComponent, createVariant, VariantProps } from '@shopify/restyle';
import { Theme } from '@/config/theme';
// import Box from './Box'; // We can wrap Box for Restyle variants

// Props: all ImageProps + Restyle variant props
type ThemedImageProps = ImageProps & VariantProps<Theme, 'boxVariants'>;

// Create a Restyle-aware image using Box as base
const ThemedImage = createRestyleComponent<ThemedImageProps, Theme>(
  [createVariant({ themeKey: 'boxVariants' })],
  Image // Box supports variants and layout props
);

export default ThemedImage;
