import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/views/Home';
import MovementScreen from '@/views/Movement';
import { HomeStackParamList } from '@/navigation/main/HomeBottomTab/types';
// import { MainStackParamList } from '@/navigation/main/types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Dashboard' screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"Dashboard"} component={HomeScreen} />
            <Stack.Screen name={"Movement"} component={MovementScreen} />
        </Stack.Navigator>
    )
}

export default HomeNavigator