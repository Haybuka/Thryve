import React from 'react'
import { HomeScreenNavigationProp } from '@/navigation/main/HomeBottomTab/types'
// import ReanimatedTest from '@/components/AnimatedComponent'
import Container from '@/layouts/ScreenContainer'
import { Button, Text, Box } from '@/components/atoms'

import { BellBlackIcon, CalenderDark } from '@/assets/icons';

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
    <Container >
      <Box flex={1}>
        <Box flexDirection='row' justifyContent='space-between' alignItems='center' paddingVertical='l'>
          <Box gap='s'>
            <Text variant='bodyLarge' color={'blue100'}>Hello Jane,</Text>
            <Text variant='caption' color={'blue100'}>{`It’s Day 15, your fertile window is open`}</Text>
          </Box>
          <BellBlackIcon />
        </Box>
         <Box flexDirection='row' justifyContent='space-between' alignItems='center' paddingVertical='l'>
          <Box gap='s'> <Text variant='caption' color={'blue100'}>{`Fri Aug 1, 2025`}</Text>
          </Box>
          <CalenderDark />
        </Box>
        <Box>
            <Box height={107} width={60} borderWidth={0.5} borderRadius={16} overflow='hidden'>
                  <Box height={62} borderRadius={16} backgroundColor='white100' justifyContent='center' alignItems='center'>
                     <Text variant='body' color={'blue100'}>{`30`}</Text>
                  </Box>
                  <Box flex={1} justifyContent='center' alignItems='center'>

                  <Text variant='body' color={'blue100'}>{`Wed`}</Text>
                  </Box>
            </Box>
        </Box>
        <Button label='Settings' onPress={handleSettingRoute} />
        {/* <ReanimatedTest /> */}
      </Box>
    </Container>
  )
}

export default HomeScreen