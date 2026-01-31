import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StageSelectionScreenProps } from './types'
import { SafeAreaView } from 'react-native-safe-area-context'
import StageCard from './components/StageCard'
import Button from '@/components/Button'


type Stage = {
    id: number;
    title: string;
    description: string;
    icon: string;
}

const StageSelection = ({ }: StageSelectionScreenProps) => {

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
                    <StageCard key={stage.id} stage={stage} selectedStage={selectedStage} handleCardSelected={handleStageSelect} />
                ))}
            </View>
          
            <View style={styles.btnContainer}>
                <Button label='Get Started'  />
            </View>
        </SafeAreaView>
    )
}

export default StageSelection

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FAFAFA'
    },
    preg_logo: { width: 60, height: 80, resizeMode: 'contain' },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    stageContainer: {
        marginVertical: 40,
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
    btnContainer: {
        alignSelf: 'stretch',
    }

})