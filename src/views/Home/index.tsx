
import React from 'react'
import Button from '@/components/Button'
import Container from '@/components/Container'
import Box from '@/components/Box'
import Text from '@/components/Text'
import { HomeScreenNavigationProp } from '@/navigation/main/HomeBottomTab/types'


type Props = {
  navigation: HomeScreenNavigationProp
}
const HomeScreen = ({ navigation }: Props) => {

  const handleSettingRoute = () => {
    console.log(navigation.getParent(), 'parent');
    // navigation.getParent()?.navigate('Settings')
    navigation.navigate('Settings');
  }
  return (
    <Container>
      <Box flex={1}>
        <Text>Home Screen</Text>
        <Button label='Settings' onPress={handleSettingRoute} />
      </Box>
    </Container>
  )
}

export default HomeScreen