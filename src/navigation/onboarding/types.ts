import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  GetStarted: undefined;
  StageSelection: undefined;
  Home : undefined;
};

export type GetStartedScreenProps = NativeStackScreenProps<RootStackParamList, 'GetStarted'>; 
export type StageSelectionScreenProps = NativeStackScreenProps<RootStackParamList, 'StageSelection'>; 