import { StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import FertilityUi from '@/components/FertilityUi';
import { Box, Text } from '@/components/atoms';

const FERTILITY_UI_VIEW = 150;

const GradientBox = () => {
    return (
        <LinearGradient
            colors={['#FF8086', '#FFCBCE', '#FF8086']}
            locations={[0, 0.56, 1]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradientBox}
        >
            <Box borderRadius={6} height={FERTILITY_UI_VIEW} flexDirection='row' alignItems='center' justifyContent='space-between' px='lsx'>
                <Box>
                    <Box mb='m'>
                        <Text color='black' variant='h4' fontSize={18} fontWeight={500}>{`“Today is within your`}</Text>
                        <Text color='black' variant='h4' fontSize={18} fontWeight={500}>{`fertile window”`}</Text>
                        <Text color='black' variant='caption' my='s'>- Ovulation expected in 2 days</Text>
                    </Box>
                    <Box flexDirection='row' gap='s'>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Box backgroundColor='white' p='s' borderRadius={4}>
                                <Text variant='caption' color='black' fontSize={8}>Log Intimacy</Text>
                            </Box>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Box backgroundColor='white' p='s' borderRadius={4}>
                                <Text variant='caption' color='black' fontSize={8}>View Full Cycle</Text>
                            </Box>
                        </TouchableOpacity>

                    </Box>
                </Box>
                <FertilityUi value={60} fertilityUiHeight={FERTILITY_UI_VIEW} />
            </Box>
        </LinearGradient>
    )
}

export default GradientBox

const styles = StyleSheet.create({
  gradientBox: { borderRadius: 6, marginTop: 15, marginBottom: 23.64, },

})