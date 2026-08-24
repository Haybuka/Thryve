import { MainStackParamList } from "@/navigation/main/types";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp,  } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type BottomTabParamList = {
    Home: undefined;
    Exercise : undefined;
    Calender : undefined;
};

export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList, 'Home'>,
  StackNavigationProp<MainStackParamList>
>;
export type ExerciseScreenNavigationProps = CompositeNavigationProp<BottomTabNavigationProp<BottomTabParamList,'Exercise'>, StackNavigationProp<MainStackParamList>>
export type CalenderScreenNavigationProps = CompositeNavigationProp<BottomTabNavigationProp<BottomTabParamList,'Calender'>, StackNavigationProp<MainStackParamList>>
