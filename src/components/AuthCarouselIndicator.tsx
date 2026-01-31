import Box from "@/components/Box";
import { Theme } from "@/config/theme";
import { createRestyleComponent, createVariant, VariantProps } from "@shopify/restyle";

const AuthCarouselIndicator = createRestyleComponent<
  VariantProps<Theme, 'boxVariants'> & React.ComponentProps<typeof Box>,
  Theme
>([createVariant({ themeKey: 'boxVariants' })], Box);


export default AuthCarouselIndicator;