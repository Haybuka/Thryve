import { MainStackParamList } from "@/navigation/main/types";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp,  } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type HomeBottomTabParamList = {
    Home: undefined;
    Exercise : undefined;
    Calender : undefined;
};

export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeBottomTabParamList, 'Home'>,
  StackNavigationProp<MainStackParamList>
>;
export type ExerciseScreenNavigationProps = CompositeNavigationProp<BottomTabNavigationProp<HomeBottomTabParamList,'Exercise'>, StackNavigationProp<MainStackParamList>>
export type CalenderScreenNavigationProps = CompositeNavigationProp<BottomTabNavigationProp<HomeBottomTabParamList,'Calender'>, StackNavigationProp<MainStackParamList>>
