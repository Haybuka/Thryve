import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

const SplashScreen = ({ children }: React.PropsWithChildren) => {
    const [done, setDone] = useState(false);

    const logoOpacity = useSharedValue(1);
    const fullOpacity = useSharedValue(0);
    const translateY = useSharedValue(500);

    const logoStyle = useAnimatedStyle(() => ({
        opacity: logoOpacity.value,
    }));

    const fullStyle = useAnimatedStyle(() => ({
        opacity: fullOpacity.value,
        transform: [{ translateY: translateY.value }],
    }));

    const runTimer = () => {
        return setTimeout(() => {
            // fade out first logo
            logoOpacity.value = withTiming(0, { duration: 200 });

            // fade + slide in second logo
            fullOpacity.value = withTiming(1, { duration: 300 });
            translateY.value = withTiming(-100, { duration: 300 });

            // finish splash
            setTimeout(() => {
                setDone(true);
            }, 500);
        }, 4000);
    }
    
    useEffect(() => {
        const timer = runTimer();
        return () => clearTimeout(timer);
    }, []);

    if (done) {
        return <>{children}</>;
    }

    return (
        <View style={styles.container}>
            {/* First image */}
            <Animated.Image
                source={require('@/assets/images/splashScreen/preg_logo.png')}
                style={[styles.preg_logo, logoStyle]}
            />

            {/* Second image */}
            <Animated.Image
                source={require('@/assets/images/splashScreen/preg_logo_full.png')}
                style={[styles.preg_logo_full, fullStyle]}
            />
        </View>
    );
};

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