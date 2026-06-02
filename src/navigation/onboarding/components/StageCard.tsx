import { Pressable } from 'react-native'
import React from 'react'
import AuthIconSelect from './AuthIconSelect';
import { Box, IconBox, StageBox, Text } from '@/components/atoms';
import RadioIndicator from '@/components/atoms/RadioIndicator';

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
                    <Text variant='body' fontWeight={'bold'} color='blueSecondary' marginVertical={'xs'} >{stage.title}</Text>
                    <Text color="blueMuted" variant='caption' >{stage.description} </Text>
                </Box>
                <RadioIndicator width={20} height={20} selected={selectedStage.id === stage.id} />
            </StageBox>
        </Pressable>
    )
}

export default StageCard

