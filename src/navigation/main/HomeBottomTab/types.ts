import { MainStackParamList } from "@/navigation/main/types";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type BottomTabParamList = {
  Home: undefined;
  Exercise: undefined;
  Calender: undefined;
};

export type HomeStackParamList = {
  Dashboard: undefined;
  Movement: undefined;
  Sleep: undefined;
  Nutrition: undefined;
  Mood: undefined;
  Stress: undefined;
  Breathe: undefined;
  Intimacy: undefined;
}

export type ExerciseStackParamList = {
  Dashboard: undefined;
  Movement: undefined;
  Sleep: undefined;
  Nutrition: undefined;
  Mood: undefined;
  Stress: undefined;
  Breathe: undefined;
  Intimacy: undefined;
}

export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList, 'Home'>,
  StackNavigationProp<MainStackParamList>
>;

// test

export type HomeNavigationProp = StackNavigationProp<HomeStackParamList>;

export type DashboardNavigationProps =
  StackNavigationProp<
    HomeStackParamList,
    "Dashboard"
  >;

export type DashboardNavigationProp =
  CompositeNavigationProp<
    StackNavigationProp<HomeStackParamList, "Dashboard">,
    BottomTabNavigationProp<BottomTabParamList>
  >;


export type ExerciseScreenNavigationProps = CompositeNavigationProp<BottomTabNavigationProp<BottomTabParamList, 'Exercise'>, StackNavigationProp<MainStackParamList>>
export type CalenderScreenNavigationProps = CompositeNavigationProp<BottomTabNavigationProp<BottomTabParamList, 'Calender'>, StackNavigationProp<MainStackParamList>>
