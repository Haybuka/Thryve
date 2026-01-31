import { Pressable, StyleSheet, Text,View } from 'react-native'
import React from 'react'
import AuthIconSelect from './AuthIconSelect';
import IconBox from '@/components/IconBox';
import Box from '@/components/Box';
import {StageBox} from '@/components/Card';
import RadioIndicator from '@/components/RadioIndicator';


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
        <Pressable onPress={() => handleCardSelected(stage)}>
            <StageBox variant='stageCard'  active={selectedStage.id === stage.id}>


                <IconBox  variant='iconBox' backgroundColor='iconBackground' width={40} height={40} mr='xs' >
                    <AuthIconSelect icon={stage.icon} />
                </IconBox >
                <Box flex={1}>
                    <Text style={styles.stageCardText}>{stage.title}</Text>
                    <Text style={styles.stageCardDescription}>{stage.description} </Text>
                </Box>
                <View style={[styles.stageCardCheckbox, selectedStage.id === stage.id ? styles.stageCardCheckbox_selected : null]}>
                    {selectedStage.id === stage.id && (
                        <View style={styles.stageCardCheckbox_inner} />
                    )}
                    
                </View>
                <RadioIndicator width={20} height={20}  selected={selectedStage.id === stage.id} />
            </StageBox>
        </Pressable>
    )
}

export default StageCard

const styles = StyleSheet.create({
   
   
    stageCardText: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 4,

    },
    stageCardDescription: {
        color: '#556882',
        fontSize: 13,
    },
    stageCardCheckbox: {
        width: 16,
        height: 16,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stageCardCheckbox_selected: {
        borderColor: '#FF6F91',
    },
    stageCardCheckbox_inner: {
        width: 10,
        height: 10,
        backgroundColor: '#FF6F91',
        borderRadius: 8,
    },
})