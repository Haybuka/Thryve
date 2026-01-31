import { Image, StyleSheet, } from 'react-native'
import React from 'react'
import { StageSelectionScreenProps } from '../../navigation/onboarding/types'
import StageCard from '../../navigation/onboarding/components/StageCard'
import Button from '@/components/Button'
import Container from '@/components/Container'
import Box from '@/components/Box'
import Text from '@/components/Text'


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

        <Container>

            <Box flex={1} padding='lsx' backgroundColor='authBackgroundSecondary'>
                <Box justifyContent='center' alignItems='center'>

                    <Box padding='l' justifyContent='center' alignItems='center' >
                        <Image source={require('@/assets/images/splashScreen/preg_logo.png')} style={styles.preg_logo} />
                        <Text textAlign='center' marginVertical={'sm'} variant='h3' color='blueBase'>Choose your stage</Text>
                        <Text textAlign='center' variant='h6' color='muted' >We’ll personalize your experience based on where you are in your journey.</Text>
                    </Box>
                </Box>
                <Box marginVertical='xl'>
                    {stages.map((stage) => (
                        <StageCard key={stage.id} stage={stage} selectedStage={selectedStage} handleCardSelected={handleStageSelect} />
                    ))}
                </Box>

                <Box alignSelf='stretch' >
                    <Button label='Continue' />

                </Box>

            </Box>
        </Container >
    )
}

export default StageSelection

const styles = StyleSheet.create({

    preg_logo: { width: 60, height: 80, resizeMode: 'contain' },



})