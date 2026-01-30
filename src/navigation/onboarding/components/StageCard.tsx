import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AuthCalender } from '../../../assets/icons';


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
            <View style={[styles.stageCard, selectedStage.id === stage.id ? styles.stageCardActive : null]}>


                <View style={styles.iconContainer}>
                    <AuthCalender width={24} height={24} />

                </View>
                <View style={styles.stageInnerContainer}>
                    <Text style={styles.stageCardText}>{stage.title}</Text>
                    <Text style={styles.stageCardDescription}>{stage.description} </Text>
                </View>
                <View style={[styles.stageCardCheckbox, selectedStage.id === stage.id ? styles.stageCardCheckbox_selected : null]}>
                    {selectedStage.id === stage.id && (
                        <View style={styles.stageCardCheckbox_inner} />
                    )}
                </View>
            </View>
        </Pressable>
    )
}

export default StageCard

const styles = StyleSheet.create({
    stageInnerContainer: { flex: 1, },
    iconContainer : {
        width: 40,
        height: 40,
        borderRadius: 9,
        backgroundColor: '#FFF0F3',
        justifyContent: 'center',
        alignItems: 'center',
        // marginRight: 12
    },
    stageCard: {
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        shadowColor: '#00000071',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 2.84,
        elevation: 3,
        paddingHorizontal: 10,
        paddingVertical: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap:10
    },
    stageCardActive: {
        borderWidth: 1,
        borderColor: '#FF6F91',
        borderRadius: 10,
    },
    stageCardText: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 4,

    },
    stageCardDescription: {
        color: '#556882',
        fontSize: 13,
        // flex: 1,       // take remaining space
        // marginRight: 12
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