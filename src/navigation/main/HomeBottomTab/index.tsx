import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '@/navigation/main/HomeBottomTab/types';
import { HomeTabIcon, ExerciseTabIcon, CalenderTabIcon } from './TabIcons/';
import HomeNavigator from '@/navigation/main/HomeNavigator';
import ExerciseScreen from '@/views/Exercise';
import CalenderScreen from '@/views/Calender';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: 'green' },
        tabBarStyle: { height: 100, paddingBottom: 10, paddingTop: 10 },
      }}

    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: HomeTabIcon,
          tabBarActiveTintColor: '#E91E63',
          tabBarInactiveTintColor: '#9CA3AF',
        }}
      />
      <Tab.Screen name="Exercise" component={ExerciseScreen}
        options={{
          tabBarIcon: ExerciseTabIcon,
          tabBarActiveTintColor: '#E91E63',
          tabBarInactiveTintColor: '#9CA3AF',
        }}
      />
      <Tab.Screen name="Calender" component={CalenderScreen}
        options={{
          tabBarIcon: CalenderTabIcon,
          tabBarActiveTintColor: '#E91E63',
          tabBarInactiveTintColor: '#9CA3AF',
        }} />
    </Tab.Navigator>
  );
}
