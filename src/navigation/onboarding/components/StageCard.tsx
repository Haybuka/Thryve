import { Pressable } from 'react-native'
import React from 'react'
import AuthIconSelect from './AuthIconSelect';
import IconBox from '@/atoms/IconBox';
import Box from '@/atoms/Box';
import RadioIndicator from '@/atoms/RadioIndicator';
import Text from '@/atoms/Text';
import StageBox from '@/atoms/StageBox';


type StageCardProps = {
    stage: {
        id: number;
        title: string;
        description: string;
        icon: string;
    };
    handleCardSelected: (stage: StageCardProps['stage']) => void;
    selectedStage: StageCardProps['stage'];
}



const StageCard = ({ stage, selectedStage, handleCardSelected }: StageCardProps) => {

    return (
        <Pressable  onPress={() => handleCardSelected(stage)}>
            <StageBox variant='stageCard' active={selectedStage.id === stage.id}>


                <IconBox variant='iconBox' backgroundColor='iconBackground' width={40} height={40} mr='xs' >
                    <AuthIconSelect icon={stage.icon} />
                </IconBox >
                <Box flex={1}>
                    <Text variant='onboardingSubText' fontWeight={'bold'} color='blueSecondary' marginVertical={'xs'} >{stage.title}</Text>
                    <Text color="blueMuted" fontSize={12} >{stage.description} </Text>
                </Box>
                <RadioIndicator width={20} height={20} selected={selectedStage.id === stage.id} />
            </StageBox>
        </Pressable>
    )
}

export default StageCard

