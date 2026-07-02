import React from 'react'
import Box from './Box'
import { Image, ImageSourcePropType, StyleSheet } from 'react-native'


type AvatarProps = {
    uri: ImageSourcePropType;
    size?: number;
};

const Avatar = ({
    uri,
    size = 50,
}: AvatarProps) => {
    return (
        <Box height={size} width={size} borderWidth={2} borderRadius={25} position='relative' borderColor='pink100' >
            <Image
                source={uri}
                style={[styles.sizing, {borderRadius : size/2}]}
            />
        </Box>
    )
}

export default Avatar

const styles = StyleSheet.create({
    sizing: {
        width: '100%',
        height: '100%',
        
    }
})