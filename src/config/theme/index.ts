
import lightTheme from "@/config/theme/lightTheme";
import { useTheme as useShopifyTheme } from "@shopify/restyle"


export type Theme = typeof lightTheme;

export const useTheme = () => useShopifyTheme<Theme>();
// export { darkTheme, lightTheme };