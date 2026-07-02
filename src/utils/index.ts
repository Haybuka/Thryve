import { DatePillItemType } from '@/molecules/DatePill';
import dayjs from 'dayjs';

export const generateMonthDays = (year: number, month: number): DatePillItemType[] => {
  const startOfMonth = dayjs()
    .year(year)
    .month(month - 1)
    .startOf('month');

  const totalDays = startOfMonth.daysInMonth();

  return Array.from({ length: totalDays }, (_, index) => {
    const date = startOfMonth.add(index, 'day');

    return {
      date: date.format('YYYY-MM-DD'),
      day: date.date(),
      weekday: date.format('ddd'),
      selected: false,
      marked: false,
    };
  });
};