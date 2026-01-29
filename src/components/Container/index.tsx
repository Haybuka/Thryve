import { StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


type Props = React.PropsWithChildren<{
    children: React.ReactNode
}>
const Container: React.FC<Props> = ({ children }) => {
    return (
        <>
            <StatusBar />
            <SafeAreaView style={styles.container}>
                {children}
            </SafeAreaView>
        </>
    )
}

export default Container

const styles = StyleSheet.create({
    container: { flex: 1 }
})