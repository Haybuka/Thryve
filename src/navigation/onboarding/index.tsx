
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetStarted from './GetStarted';
import StageSelection from './StageSelection';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const OnboardingNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="StageSelection" component={StageSelection} />
        </Stack.Navigator>
    )
}

export default OnboardingNavigator

