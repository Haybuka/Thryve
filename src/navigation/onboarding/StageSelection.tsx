import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StageSelectionScreenProps } from './types'
import { SafeAreaView } from 'react-native-safe-area-context'


type Stage = {
    id: number;
    title: string;
    description: string;
    icon: string;
}

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
            description: 'Follow your pregnancy with  tracking and guided care..',
            icon: 'heart'
        },
        {
            id: 3,
            title: 'Postpartum',
            description: 'Care for you and your baby with check-ins and  support',
            icon: 'child'
        },
    ]

    const [selectedStage, setSelectedStage] = React.useState<Stage>(stages[0]);

    const handleStageSelect = (stage: Stage) => {
        setSelectedStage(stage);
    }
    return (

        <SafeAreaView style={styles.container} edges={['left', 'right']}>

            <View style={styles.bannerContainer}>

                <View style={styles.banner}>
                    <Image source={require('../../assets/images/splashScreen/preg_logo.png')} style={styles.preg_logo} />
                    <Text style={styles.banner_text}>Choose your stage</Text>
                    <Text style={styles.banner_subText}>We’ll personalize your experience based on where you are in your journey.</Text>
                </View>
            </View>
            <View style={styles.stageContainer}>
                {stages.map((stage) => (
                    <TouchableOpacity key={stage.id} onPress={() => handleStageSelect(stage)}>
                        <View style={styles.stageCard}>
                            {/* <Image source={require(`../../assets/images/stageSelection/${stage.icon}.png`)} style={{ width: 60, height: 60, resizeMode: 'contain' }} /> */}
                            <View >
                                <Text style={styles.stageCardText}>{stage.title}</Text>
                                <Text style={styles.stageCardDescription}>{stage.description} </Text>
                            </View>
                            <View style={[styles.stageCardCheckbox, selectedStage.id === stage.id ? styles.stageCardCheckbox_selected : null]}>
                                {selectedStage.id === stage.id && (
                                    <View style={[{ backgroundColor: '#FF6F91', width: 12, height: 12, borderRadius: 8 }]} />
                                )}
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity style={styles.btn} accessibilityRole='button' disabled>
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
        padding: 12,
        backgroundColor: '#FAFAFA'
    },
    preg_logo: { width: 60, height: 80, resizeMode: 'contain' },
    bannerContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    stageContainer: {
        marginVertical: 40,
    },
    stageCard: {
        marginBottom: 20,
        padding: 4,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        shadowColor: '#00000071',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.84,
        elevation: 3,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    stageCardText: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 4,
       
    },
    stageCardDescription: {
        color: '#556882',
        fontSize: 12,
    },
    stageCardCheckbox: {
        width: 18,
        height: 18,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stageCardCheckbox_selected: {
        borderColor: '#FF6F91',
        // width: 12,
        // height: 12,
        // borderRadius: 6,
        // margin: 3
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