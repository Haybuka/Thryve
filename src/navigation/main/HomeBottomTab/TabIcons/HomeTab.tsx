import {  HomeTab } from '@/assets/icons';
import { TabIconProps } from './type';



const HomeTabIcon = ({ color, size }: TabIconProps) => (
  <HomeTab
    width={size}
    height={size}
    color={color}
  />
);
export default HomeTabIcon;