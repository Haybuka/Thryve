import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/views/Home';
import { HomeStackParam } from '@/navigation/main/types';
// import { MainStackParamList } from '@/navigation/main/types';

const Stack = createNativeStackNavigator<HomeStackParam>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Dashboard' screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"Dashboard"} component={HomeScreen} />
            <Stack.Screen name={"Movement"} component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default HomeNavigator