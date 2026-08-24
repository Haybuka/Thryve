
import { BottomTabParamList } from "@/navigation/main/HomeBottomTab/types"
import { NavigatorScreenParams } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type MainStackParamList = {
    Tab: NavigatorScreenParams<BottomTabParamList>;
    Settings: undefined;
}

export type HomeStackParam = {
    Dashboard: undefined;
    Movement: undefined;

}

export type SettingsScreenProps = NativeStackScreenProps<MainStackParamList, 'Settings'>; 