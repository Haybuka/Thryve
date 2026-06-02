import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/views/Home';
import CalenderScreen from '@/views/Calender';
import ExerciseScreen from '@/views/Exercise';
import { HomeBottomTabParamList } from '@/navigation/main/HomeBottomTab/types';
import { HomeTabIcon, ExerciseTabIcon, CalenderTabIcon } from './TabIcons/';

const Tab = createBottomTabNavigator<HomeBottomTabParamList>();

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
        component={HomeScreen}
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
