
import React from 'react'
import { ThemeProvider } from '@shopify/restyle'
import lightTheme from '@/config/theme/lightTheme'
import { StatusBar } from 'react-native'

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider theme={lightTheme}>
            <StatusBar  barStyle="dark-content" />
            {children}
        </ThemeProvider>

    )
}

export default Provider