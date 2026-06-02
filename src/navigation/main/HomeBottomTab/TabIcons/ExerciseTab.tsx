import { ExerciseTab, ExerciseWhiteTab } from '@/assets/icons';
import { TabIconProps } from './type';

const ExerciseTabIcon = ({
  color,
  size,
  focused,
}: TabIconProps) => {
//   const Icon = focused ? ExerciseWhiteTab : ExerciseTab;

  return (
    focused ? (
      <ExerciseWhiteTab
        width={size}
        height={size}
        color={color}
      />
    ) : (
      <ExerciseTab
        width={size}
        height={size}
        color={color}
      />
    )   
  );
};

export default ExerciseTabIcon;