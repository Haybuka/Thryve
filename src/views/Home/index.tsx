import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  FlatList,
  StyleSheet,
} from 'react-native';
import dayjs from 'dayjs';

import Container from '@/layouts/ScreenContainer';
import { Avatar, Box, Button, Text } from '@/components/atoms';
import { BellBlackIcon, CalenderDark } from '@/assets/icons';
import { HomeScreenNavigationProp } from '@/navigation/main/HomeBottomTab/types';
import { generateMonthDays } from '@/utils';
import { DatePill } from '@/molecules';

type Props = {
  navigation: HomeScreenNavigationProp;
};

const ITEM_WIDTH = 60;
const ITEM_GAP = 20;

const ItemSeparator = () => <Box width={ITEM_GAP} />;

const HomeScreen = ({ navigation }: Props) => {
  const flatListRef = useRef<FlatList>(null);

  const [currentDate] = useState(() => dayjs());

  const todayIso = currentDate.format('YYYY-MM-DD');

  const [selectedDate, setSelectedDate] = useState(todayIso);

  const todayDisplay = currentDate.format('ddd MMM D, YYYY');

  const calendarDays = useMemo(() => {
    return generateMonthDays(
      currentDate.year(),
      currentDate.month() + 1,
    );
  }, [currentDate]);

  useEffect(() => {
    const index = calendarDays.findIndex(
      item => item.date === selectedDate,
    );

    if (index === -1) {
      return;
    }

    requestAnimationFrame(() => {
      flatListRef.current?.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5,
      });
    });
  }, [calendarDays, selectedDate]);

  const handleDatePress = useCallback(
    (date: string, index: number) => {
      setSelectedDate(date);

      flatListRef.current?.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5,
      });
    },
    [],
  );

  const renderItem = useCallback(
    ({
      item,
      index,
    }: {
      item: (typeof calendarDays)[number];
      index: number;
    }) => {
      const isSelected = item.date === selectedDate;

      return (<DatePill
        isSelected={isSelected}
        index={index}
        item={item}
        handleDatePress={handleDatePress}
      />
      );
    },
    [handleDatePress, selectedDate],
  );

  const handleSettingRoute = () => {
    console.log(navigation.getParent());
  };

  const image = require('@/assets/images/avatarimg.jpg')
  return (
    <Container>
      <Box >
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          paddingVertical="lsx"
        >
          <Box flexDirection='row' gap='sm'>
            <Avatar uri={image}/>
            <Box gap="s">
              <Text variant="bodyLarge" color="blue100">
                Hello Jane,
              </Text>

              <Text variant="caption" color="blue100" fontSize={12}>
                It’s Day 15, your fertile window is open
              </Text>
            </Box>
          </Box>

          <BellBlackIcon />
        </Box>

        <Box
          paddingVertical="lsx"

        >
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            mb='lsx'
          >
            <Text variant="caption" color="blue100">
              {todayDisplay}
            </Text>

            <CalenderDark />
          </Box>

          <FlatList
            ref={flatListRef}
            horizontal
            data={calendarDays}
            keyExtractor={item => item.date}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparator}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.calendar}
            getItemLayout={(_, index) => ({
              length: ITEM_WIDTH + ITEM_GAP,
              offset: (ITEM_WIDTH + ITEM_GAP) * index,
              index,
            })}
            onScrollToIndexFailed={({ index }) => {
              setTimeout(() => {
                flatListRef.current?.scrollToIndex({
                  index,
                  animated: true,
                  viewPosition: 0.5,
                });
              }, 100);
            }}
          />
        </Box>

        <Button
          label="Settings"
          onPress={handleSettingRoute}
        />

      </Box>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  calendar: {
    paddingHorizontal: 16,
    marginVertical: 20,
    // marginBottom: 20
    // backgroundColor:'red'
  },
});