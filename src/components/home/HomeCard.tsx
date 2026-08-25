import React from 'react'
import { Box, Text } from '@/components/atoms'
import { HeartOutline, Moon, Smiley, Steps, WhiteHeart } from '@/assets/icons'
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Theme } from '@/config/theme';
import { useNavigation } from '@react-navigation/native';
import { HomeNavigationProp, HomeStackParamList } from '@/navigation/main/HomeBottomTab/types';

type HomeCardProps = {
    item: {
        id?: number;
        title: string;
        value: string;
        description: string;
        icon: React.ReactNode;
        styles: {
            iconBg: keyof Theme["colors"];
            containerBg: keyof Theme["colors"]
        };
        route: keyof HomeStackParamList;
    },
    handleNavigation: (route:  keyof HomeStackParamList) => void
};


const homeCards: HomeCardProps['item'][] = [
    {
        id: 1,
        title: "Mood",
        value: "Calm",
        description:
            "Stay calm eases your mind, and makes you remain positive",
        icon: <WhiteHeart />,
        styles: {
            iconBg: 'pink500',
            containerBg: 'pink600'
        },
        route: "Mood"
    },
    {
        id: 2,
        title: "Movement",
        value: "3,200 steps",
        description:
            "800 steps to achieve your target for the day.",
        icon: <Smiley />,
        styles: {
            iconBg: 'secondary100',
            containerBg: 'secondary200'
        },
        route: "Movement"
    },
    {
        id: 3,
        title: "Stress",
        value: "6h 30m",
        description:
            `A good amount of sleep, helps 
the brain relax.`,
        icon: <Steps />,
        styles: {
            iconBg: 'secondary100',
            containerBg: 'secondary300'
        },
        route: "Stress"
    },
    {
        id: 4,
        title: "Breathe",
        value: "Calm",
        description:
            "Stay calm eases your mind, and makes you remain positive",
        icon: <HeartOutline />,
        styles: {
            iconBg: 'pink500',
            containerBg: 'tertiaryMuted'
        },
        route: "Breathe"
    },
    {
        id: 5,
        title: "Sleep",
        value: "Calm",
        description:
            "Stay calm eases your mind, and makes you remain positive",
        icon: <Moon />,
        styles: {
            iconBg: 'bluePrimary',
            containerBg: 'tertiaryNeutral'
        },
        route: "Sleep"
    },
    {
        id: 6,
        title: "Intimacy",
        value: "Logged",
        description:
            "Stay calm eases your mind, and makes you remain positive",
        icon: <Moon />,
        styles: {
            iconBg: 'green100',
            containerBg: 'greenMuted'
        },
        route: "Intimacy"
    },
];


const HomeCard = ({ item, handleNavigation }: HomeCardProps) => {
    const { styles, icon, title, value, description, route } = item;
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={() => handleNavigation(route)}>
            <Box
                padding='s'
                width={160}
                backgroundColor={styles.containerBg}
                borderRadius={10}
            >
                <Box flexDirection="row" alignItems="center" gap="s">
                    <Box
                        width={24}
                        height={24}
                        backgroundColor={styles.iconBg}
                        borderRadius={6}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {icon}
                    </Box>

                    <Text color="bluePrimary" variant="bodySmall">
                        {title}
                    </Text>
                </Box>

                <Box mt="s">
                    <Text color="bluePrimary" variant="body">
                        {value}
                    </Text>

                    <Box my="s">
                        <Text color="blueMuted" variant="caption">
                            {description}
                        </Text>
                    </Box>
                </Box>
            </Box>
        </TouchableOpacity>
    );
};

const ItemSeperatorComponent = () => <Box width={10} height={10} />
const HomeCardView = () => {
    const navigation = useNavigation<HomeNavigationProp>()
    const handleNavigation = (route: keyof HomeStackParamList) => {
        // if (route. === 'movement') {
        //     console.log({ route })
        // }
        navigation.navigate(route)
    }

    return (
        <FlatList
            data={homeCards}
            horizontal={false}
            numColumns={2}
            keyExtractor={(item) => `${item.id}`}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            columnWrapperStyle={styles.container}
            ItemSeparatorComponent={ItemSeperatorComponent}
            renderItem={({ item }) => (
                <HomeCard
                    item={item}
                    handleNavigation={handleNavigation}
                />
            )}
        />
    )
}


export default HomeCardView

const styles = StyleSheet.create({
    container: {
        gap: 10,
    }
})
