import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    Settings : undefined
    //   Home: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
// export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>; 