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
  TouchableOpacity,
} from 'react-native';
import dayjs from 'dayjs';

import Container from '@/layouts/ScreenContainer';
import { Avatar, Box, Button, Text } from '@/components/atoms';
import { BellBlackIcon, CalenderDark, RedHeart } from '@/assets/icons';
import { HomeScreenNavigationProp } from '@/navigation/main/HomeBottomTab/types';
import { generateMonthDays } from '@/utils';
import { DatePill } from '@/molecules';
import LinearGradient from 'react-native-linear-gradient';
import FertilityUi from '@/components/FertilityUi';
type Props = {
  navigation: HomeScreenNavigationProp;
};

const ITEM_WIDTH = 60;
const ITEM_GAP = 20;
const FERTILITY_UI_VIEW = 150
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
            <Avatar uri={image} />
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
        <Box>
          <Box flexDirection='row' alignItems='center' justifyContent='space-between'>
            <Box flexDirection='row' alignItems='center' gap='s'>
              <RedHeart />
              <Text color='black' variant='caption'>Cycle: Trying to Conceive</Text>
            </Box>
            <Text color='black' variant='caption'> Day 15 of 28</Text>
          </Box>

          <LinearGradient
            colors={['#FF8086', '#FFCBCE', '#FF8086']}
            locations={[0, 0.56, 1]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradientBox}
          >
            <Box borderRadius={6} height={FERTILITY_UI_VIEW} flexDirection='row' alignItems='center' justifyContent='space-between' px='lsx'>
              <Box>
                <Box mb='m'>
                  <Text color='black' variant='h4' fontSize={18}>{`“Today is within your`}</Text>
                  <Text color='black' variant='h4' fontSize={18}>{`fertile window”`}</Text>
                  <Text color='black' variant='caption' my='s'>- Ovulation expected in 2 days</Text>
                </Box>
                <Box flexDirection='row' gap='s'>
                  <TouchableOpacity activeOpacity={0.5}>
                    <Box backgroundColor='white' p='s' borderRadius={4}>
                      <Text variant='caption' color='black' fontSize={8}>Log Intimacy</Text>
                    </Box>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.5}>
                    <Box backgroundColor='white' p='s' borderRadius={4}>
                      <Text variant='caption' color='black' fontSize={8}>View Full Cycle</Text>
                    </Box>
                  </TouchableOpacity>

                </Box>
              </Box>
              <FertilityUi value={80} fertilityUiHeight={FERTILITY_UI_VIEW}/>
            </Box>
          </LinearGradient>
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
  },
  gradientBox: { borderRadius: 6, marginTop: 15, marginBottom: 23.64, }
});