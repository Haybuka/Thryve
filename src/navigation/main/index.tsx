
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainStackParamList } from './types';


import TabNavigator from '@/navigation/main/HomeBottomTab';
import SettingsScreen from '@/views/Settings';

const Stack = createNativeStackNavigator<MainStackParamList>();
const MainNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigator

