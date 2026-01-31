

import { breakpoints, buttonVariants, font, palette, spacing, textVariants } from "@/config/theme/core";
import { createTheme } from "@shopify/restyle";


const commonConfig = {
    breakpoints,
    spacing,
    buttonVariants,
    textVariants,
}

const lightTheme = createTheme({
    colors: {
        primary: palette.pink,

        textPrimary: palette.white,
        authTextPrimary: palette.blue,
        authTextSecondary: palette.blueMuted,
        authBackground: palette.white,

        light: palette.white,
        dark: palette.black,
        buttonDisabled: palette.pinkDisabled,
        ...palette,
    },
    fonts: {
        family: font.family,
        size: font.size,
    },
    ...commonConfig

})


export default lightTheme;