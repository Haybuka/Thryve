import { createTheme, useTheme as useShopifyTheme } from "@shopify/restyle"

const palette = {
    pink: '#FF6F91',
    pinkMuted: '#FFE2E9',
    pinkDisabled: '#FFB7C8',


    blue: '#001739',
    bluePrimary: '#001C44',
    blueMuted: '#556882',
    blueSecondary: '#001739',

    secondary: '#FF9671',
    background: '#00000063',

    white: '#FFFFFF',
    whiteSecondary: '#CCCCCC',

    black: '#000000',
    blackSecondary: '#060606',
}


const fontFamily = {
    primary: 'Inter',
}

const fontSize = {

}

const spacing = {
    xs: 4,
    s: 8,
    sm: 12,
    m: 16,
    l: 24,
    ls: 32,
    xl: 40,
    xxl: 50,
    none: 0
}
const breakpoints = {}

const textVariants = {

}

const buttonVariants = {
    defaults: {
        paddingVertical: 's',
    },
    primary: {
        backgroundColor: 'primary',
        paddingVertical: 'sm',
        paddingHorizontal: 'ls',
        overflow: 'hidden',
        borderRadius: 12,
        alignSelf: 'stretch'
    }
}
const commonConfig = {
    buttonVariants,
    breakpoints,
    spacing,
    textVariants,
}


export const darkTheme = createTheme({
    colors: {

        buttonPrimaryBackground: palette.blue,
        buttonPrimaryText: palette.white,
        authTextPrimary: palette.white,
        authTextSecondary: palette.blueMuted,
        authBackground: palette.black,
        ...palette,
    },
    fonts: {
        family: fontFamily,
        size: fontSize,
    },
    ...commonConfig
})

export const lightTheme = createTheme({
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
        family: fontFamily,
        size: fontSize,
    },
    ...commonConfig

})

export type Theme = typeof lightTheme;

export const useTheme = () => useShopifyTheme<Theme>();
// export { darkTheme, lightTheme };