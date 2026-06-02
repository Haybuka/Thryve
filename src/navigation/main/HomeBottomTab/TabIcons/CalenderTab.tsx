import { AuthCalender } from '@/assets/icons';
import { TabIconProps } from './type';

const CalenderTabIcon = ({
    color,
    size,
}: TabIconProps) => {
    //   const Icon = focused ? ExerciseWhiteTab : ExerciseTab;

    return (
        <AuthCalender
            width={size}
            height={size}
            color={color}
        />
    );
};

export default CalenderTabIcon;