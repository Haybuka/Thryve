import React from 'react'
import { HomeScreenNavigationProp } from '@/navigation/main/HomeBottomTab/types'
// import ReanimatedTest from '@/components/AnimatedComponent'
import Container from '@/layouts/ScreenContainer'
import { Button, Text,Box } from '@/components/atoms'


type Props = {
  navigation: HomeScreenNavigationProp
}

const HomeScreen = ({ navigation }: Props) => {

  const handleSettingRoute = () => {
    console.log(navigation.getParent(), 'parent');
    // navigation.getParent()?.navigate('Settings')
    // navigation.navigate('Settings');
  }
  return (
    <Container>
      <Box flex={1}>
        <Text>Home Screen</Text>
        
        <Button label='Settings' onPress={handleSettingRoute} />
        {/* <ReanimatedTest /> */}
      </Box>
    </Container>
  )
}

export default HomeScreen