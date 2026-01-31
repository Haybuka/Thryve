import { Theme } from "@/config/theme";
import { createText } from "@shopify/restyle";

const Text = createText<Theme>();

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;


export default Text