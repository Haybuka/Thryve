import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/views/Home';
import CalenderScreen from '@/views/Calender';
import ExerciseScreen from '@/views/Exercise';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Exercise" component={ExerciseScreen} />
      <Tab.Screen name="Calender" component={CalenderScreen} />
    </Tab.Navigator>
  );
}
