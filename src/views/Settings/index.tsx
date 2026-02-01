
import React from 'react'
import Button from '@/components/Button'
import Container from '@/components/Container'
import Box from '@/components/Box'
import Text from '@/components/Text'
import { SettingsScreenProps } from '@/navigation/main/types'

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