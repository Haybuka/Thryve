
import React, { useState } from 'react'
import { Box, Text } from '@/components/atoms'
import { Pressable, StyleProp, ViewStyle } from 'react-native'
import { SvgProps } from 'react-native-svg';

type TabItemType = {
    id: number;
    label: string;
    activeIcon: React.FC<SvgProps>;
    inactiveIcon: React.FC<SvgProps>;
    component: () => React.JSX.Element;
}
type TabItemsType = TabItemType[]

type TabViewProps = {
    tabs: TabItemsType;
    style?: StyleProp<ViewStyle>;
}

const TabView = ({ tabs,style }: TabViewProps) => {
    const [activeId, setActiveId] = useState(tabs[0].id);
    const handleActiveView = (item: TabItemType) => {
        setActiveId(item.id)
    }
    const activeTab = tabs.find(tab => tab.id === activeId)!;
    const ActiveIdComponent = activeTab.component;
    return (
        <Box style={style} borderRadius={16} backgroundColor='white'>
            <Box backgroundColor='white100' flexDirection='row' justifyContent='space-between' alignItems='center' mt='s' mb='lsx' borderRadius={16} overflow='hidden'>
                {tabs?.map(tab => (
                    <Pressable key={tab.id} onPress={() => handleActiveView(tab)} style={{flex:1}}>
                        <Box  backgroundColor={activeId === tab.id ? 'pink' : 'transparent'} px='sm' py='sm' flexDirection='row' gap='xs' alignItems='center' justifyContent='center'>
                            {activeId === tab.id ? <tab.activeIcon /> : <tab.inactiveIcon />}
                            <Text color={activeId === tab.id ? 'white' : 'black'} variant='bodySmall'>{tab.label}</Text>
                        </Box>
                    </Pressable>
                ))}

            </Box>

            <ActiveIdComponent />

        </Box>
    )
}

export default TabView
