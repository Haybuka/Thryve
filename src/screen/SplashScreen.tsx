import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, View } from 'react-native';

const SplashScreen = ({ children }: React.PropsWithChildren) => {

    const [isSplashVisible, setIsSplashVisible] = useState(false);
    const [showRealSplash, setShowRealSplash] = useState(true);


    useEffect(() => {
        let timeout = setTimeout(() => {
            setIsSplashVisible(true);
        }, 8000);
        let splashtimeout = setTimeout(() => {
            setShowRealSplash(false);
        }, 4000);

        return () => {
            clearTimeout(timeout)
            clearTimeout(splashtimeout)
        }
            ;
    }, [])

    if (isSplashVisible) {
        return <>{children}</>
    }


    return (
        <View style={styles.container}>
            {showRealSplash ? (
                <Image source={require('@/assets/images/splashScreen/preg_logo.png')} style={styles.preg_logo} />
            ) : (
                <Image source={require('@/assets/images/splashScreen/preg_logo_full.png')} style={styles.preg_logo_full} />
            )}


        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    preg_logo: { width: 150, height: 200, resizeMode: 'contain' },
    preg_logo_full: { width: 250, height: 100, resizeMode: 'contain' },
})