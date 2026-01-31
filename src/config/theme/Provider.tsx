
import React from 'react'
import { ThemeProvider } from '@shopify/restyle'
import lightTheme from '@/config/theme/lightTheme'

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider theme={lightTheme}>
            {children}
        </ThemeProvider>

    )
}

export default Provider