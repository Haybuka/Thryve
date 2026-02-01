
import { HomeBottomTabParamList } from "@/navigation/main/HomeBottomTab/types"
import { NavigatorScreenParams } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type MainStackParamList = {
    Home: NavigatorScreenParams<HomeBottomTabParamList>;
    Settings: undefined;

}


export type SettingsScreenProps = NativeStackScreenProps<MainStackParamList, 'Settings'>; 