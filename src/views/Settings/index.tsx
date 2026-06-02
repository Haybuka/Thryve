
import React from 'react'

import { SettingsScreenProps } from '@/navigation/main/types'
import Container from '@/layouts/ScreenContainer'
import {Box,Text,Button} from '@/components/atoms'

const SettingsScreen = ({ navigation }: SettingsScreenProps) => {

    const handleGoBack = () => {
        navigation.goBack()
    }
    return (
        <Container>
            <Box flex={1} padding='l'>
                <Text>Settings Screen</Text>
                <Button label='Go Back' onPress={handleGoBack} />
            </Box>
        </Container>
    )
}

export default SettingsScreen