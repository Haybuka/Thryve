import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StageSelectionScreenProps } from './types'
import { SafeAreaView } from 'react-native-safe-area-context'



const StageSelection = ({ navigation }: StageSelectionScreenProps) => {
    console.log(navigation, 'nav');
    const stages = [
        {
            id: 1,
            title: 'Trying to Conceive',
            description: 'Track your cycle and build habits that support your body.',
            icon: 'calender'
        },
        {
            id: 2,
            title: 'Pregnancy',
            description: 'Follow your pregnancy week by week with wellness tracking and guided care..',
            icon: 'heart'
        },
        {
            id: 3,
            title: 'Postpartum',
            description: 'Care for yourself and your baby with daily check-ins and recovery support',
            icon: 'child'
        },
    ]
    return (

        <SafeAreaView style={styles.container} edges={['left', 'right']}>

            <View style={styles.bannerContainer}>

                <View style={styles.banner}>
                    <Image source={require('../../assets/images/splashScreen/preg_logo.png')} style={styles.preg_logo} />
                    <Text style={styles.banner_text}>Choose your stage</Text>
                    <Text style={styles.banner_subText}>We’ll personalize your experience based
                        on where you are in your journey.</Text>
                </View>
            </View>
            <View>
                {stages.map((stage) => (
                    <TouchableOpacity key={stage.id} >
                        {/* <Image source={require(`../../assets/images/stageSelection/${stage.icon}.png`)} style={{ width: 60, height: 60, resizeMode: 'contain' }} /> */}
                        <Text >{stage.title}</Text>
                        <Text >{stage.description}</Text>
                    </TouchableOpacity>
                ))} 
            </View>
            <TouchableOpacity style={styles.btn} accessibilityRole='button' >
                <Text style={styles.btn_text}>Continue</Text>
            </TouchableOpacity>˝
        </SafeAreaView>
    )
}

export default StageSelection

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    preg_logo: { width: 60, height: 80, resizeMode: 'contain' },
    bannerContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    banner: {
        justifyContent: "center",
        alignItems: 'center',
        padding: 24
    },
    banner_text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Inter',
        fontSize: 20,
        marginVertical: 10
    },
    banner_subText: {
        textAlign: 'center',
        color: '#556882'
    },
    btn: {

        backgroundColor: '#FF6F91',
        paddingVertical: 12,
        paddingHorizontal: 32,
        overflow: 'hidden',
        borderRadius: 12,
        marginTop: 14
    },
    btn_text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Inter'

    }

})