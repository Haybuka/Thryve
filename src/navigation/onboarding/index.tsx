
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './types';

import StageSelection from '@/views/Onboarding/StageSelection';
import GetStarted from '@/views/Onboarding/GetStarted';

const Stack = createNativeStackNavigator<RootStackParamList>();
const OnboardingNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="GetStarted" component={GetStarted}/>
            <Stack.Screen name="StageSelection" component={StageSelection} />
        </Stack.Navigator>
    )
}

export default OnboardingNavigator

