
import React from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Box, Text } from '@/components/atoms';

type FertilityUiType = {
    value: number;
    fertilityUiHeight : number
}

const INNER_PADDING = 25
const FertilityUi = ({ value ,fertilityUiHeight}: FertilityUiType) => {
    const size = fertilityUiHeight - INNER_PADDING
    return (
        <Box height={size} width={size} borderRadius={size / 2} backgroundColor='pink200' justifyContent='center' alignItems='center'>
            <AnimatedCircularProgress
                size={size - 10}
                width={10}
                fill={value}
                tintColor="#fff"
                lineCap='round'
                backgroundColor="transparent"
            >
                {
                    () => (
                        <Box
                            height={size - 45}
                            width={size - 45}
                            borderRadius={(size - 45) / 2}
                            backgroundColor='white'
                            justifyContent='center' alignItems='center'

                            shadowColor="black"
                            shadowOffset={{ width: 0, height: 2 }}
                            shadowOpacity={0.2}
                            shadowRadius={4}
                            elevation={4}>
                            <Text color='black' fontSize={8} fontWeight={'500'}> Fertile window</Text>
                            <Text color="black" fontSize={8}>
                                Day 14 - Day {value}
                            </Text>
                        </Box>

                    )
                }
            </AnimatedCircularProgress >
        </Box>
    );
};

export default FertilityUi
