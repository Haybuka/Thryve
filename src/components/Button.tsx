import { ActivityIndicator, StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'
import { createRestyleComponent, createVariant, layout, spacing, LayoutProps, SpacingProps, VariantProps } from '@shopify/restyle'
import { Theme } from '@/config/theme';

const BaseButton:any = createRestyleComponent<Props, Theme>([layout, spacing, createVariant({ themeKey: 'buttonVariants' })], TouchableOpacity);

type BaseButtonProps = LayoutProps<Theme> & SpacingProps<Theme> & VariantProps<Theme, 'buttonVariants'> & TouchableOpacityProps;
type Props = BaseButtonProps & {
    isLoading?: boolean;
    label: string;
    icon?: React.ReactNode;
    labelStyle?: TextStyle;
    loadingIndicatorColor?: string;
}
const Button: React.FC<Props> = ({ isLoading, icon, label, labelStyle, loadingIndicatorColor, ...props }) => {
    return (
        <BaseButton  accessibilityRole='button' variant={!props.disabled ? 'primary' :'disabled'} {...props}>
            {icon && <View style={styles.icon}>{icon}</View>}
            <Text style={[styles.btnText, labelStyle]}>{label} </Text>
            {isLoading && (<View>
                <ActivityIndicator size="small" color={loadingIndicatorColor || '#fff'} />
            </View>
            )}
        </BaseButton>
    )
}

export default Button

const styles = StyleSheet.create({
    icon: { marginRight: 8 },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Inter'
    }
})