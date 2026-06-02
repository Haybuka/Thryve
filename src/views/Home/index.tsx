import React from 'react'
import { HomeScreenNavigationProp } from '@/navigation/main/HomeBottomTab/types'
// import ReanimatedTest from '@/components/AnimatedComponent'
import Container from '@/layouts/ScreenContainer'
import { Button, Text, Box } from '@/components/atoms'

import { BellBlackIcon } from '@/assets/icons';

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
        <Box flexDirection='row' justifyContent='space-between' alignItems='center' paddingVertical='l'>
          <Box>
            <Text variant='bodyLarge'>Hello Jane,</Text>
            <Text variant='caption'>{`It’s Day 15, your fertile window is open`}</Text>
          </Box>
          <BellBlackIcon />
        </Box>
        <Button label='Settings' onPress={handleSettingRoute} />
        {/* <ReanimatedTest /> */}
      </Box>
    </Container>
  )
}

export default HomeScreen