import { createText } from "@shopify/restyle";
import { Theme } from "../config/theme";
// import { Theme } from "@theme/index";

const Text = createText<Theme>();

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;


export default Text