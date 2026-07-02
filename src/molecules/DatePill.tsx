import { Pressable } from 'react-native'
import React from 'react'
import { Box, Text } from '@/components/atoms'

export type DatePillItemType = {
    date: string;
    day: number;
    weekday: string;
    selected: boolean;
    marked: boolean;
}

type DatePillProp = {
    item: DatePillItemType;
    isSelected: boolean;
    index: number;
    handleDatePress: (date: string, index: number) => void
}


const ITEM_WIDTH = 60;


const DatePill = ({ item, isSelected, index, handleDatePress }: DatePillProp) => {
    const { date, day, weekday } = item
    return (
        <Pressable

            onPress={() => handleDatePress(date, index)}
        >
            <Box
                height={107}
                width={ITEM_WIDTH}
                borderRadius={16}
                overflow="hidden"
                borderWidth={isSelected ? 0 : 0.5}
                borderColor={isSelected ? 'transparent' : 'gray100'}
                backgroundColor={
                    isSelected ? 'pinkMuted' : 'transparent'
                }
            >
                <Box
                    height={62}
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor={isSelected ? 'pink' : 'white100'}
                    borderRadius={16}
                >
                    <Text
                        variant="body"
                        color={isSelected ? 'white100' : 'blue100'}
                    >
                        {day}
                    </Text>
                </Box>

                <Box
                    flex={1}
                    justifyContent="center"
                    alignItems="center"

                >
                    <Text
                        variant="body"
                        color={isSelected ? 'white' : 'blue100'}
                    >
                        {weekday}
                    </Text>
                </Box>
            </Box>
        </Pressable>
    )
}

export default DatePill