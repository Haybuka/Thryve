import { ImageBackground, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import React, { useRef, useState } from 'react';
import { GetStartedScreenProps } from './types';
import Button from '@/components/Button';
import Text from '@/components/Text';
import AuthCarouselIndicator from '@/components/AuthCarouselIndicator';
import Container from '@/components/Container';
import Box from '@/components/Box';


const GetStarted = ({ navigation }: GetStartedScreenProps) => {

    const image_src = require('@/assets/images/getStarted/started_three.jpg');
    const ref = useRef<ICarouselInstance>(null);
    const [backgroundImage, setBackgroundImage] = useState(image_src);
    const [carouselIndex, setCarouselIndex] = useState(1);

    const imageCarousel = [
        {
            id: 1,
            src: require('@/assets/images/getStarted/started_one.jpg'),
            lead_text: ['Support for your ', ' fertility journey'],
            sub_text: 'Understand your cycle, track fertile days, and build gentle daily habits that support your body.',
            alt: 'Image 1'
        },
        {
            id: 2,
            src: require('@/assets/images/getStarted/started_two.jpg'),
            lead_text: [`Care and guidance `, `for every stage`],
            sub_text: 'Follow your pregnancy week by week with supportive reminders, wellness tools, and gentle guidance.',
            alt: 'Image 2'
        },
        {
            id: 3,
            src: require('@/assets/images/getStarted/started_three.jpg'),
            lead_text: [`Gentle support`, ` after birth`],
            sub_text: 'Your recovery matters. Track wellness, manage daily reminders, and move at your own pace as your body heals.',
            alt: 'Image 3'
        },
    ]

    const handleGetStarted = () => {
        navigation.navigate('StageSelection');
    }
    return (

        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
            <Box flex={1} backgroundColor='overlayBackground'>
                <Container backgroundColor='transparent'>


                    <Box flex={1} justifyContent='flex-end' alignItems='center' paddingBottom='xxl'>
                        <Box flexDirection='row' justifyContent='center' gap='sm' alignItems='center' >
                            {[1, 2, 3].map((id) =>
                                <AuthCarouselIndicator key={id} variant={carouselIndex === id ? 'barIndicator' : 'circleIndicator'} />)}

                        </Box>
                        <Carousel
                            ref={ref}
                            data={imageCarousel}
                            width={400}
                            height={200}
                            autoPlay
                            autoPlayInterval={5000}
                            onSnapToItem={(index) => {
                                setCarouselIndex(index + 1);
                                setBackgroundImage(imageCarousel[index].src);
                            }}
                            renderItem={({ item }) => (
                                <Box padding='l' key={item.id}>
                                    <View>
                                        <Text variant='onboardingLeadText' textAlign='center'> {item.lead_text[0]}</Text>
                                        <Text variant='onboardingLeadText' textAlign='center'>{item.lead_text[1]}</Text>

                                    </View>
                                    <Text variant='onboardingSubText' marginVertical='sm' lineHeight={25} textAlign='center' >{item.sub_text}</Text>

                                </Box>
                            )}
                        />

                        <Box alignSelf='stretch' paddingHorizontal='lsx'>
                            <Button label='Get Started' onPress={handleGetStarted} />
                        </Box>
                        <Text variant='onboardingSubText' marginVertical='sm' lineHeight={25} textAlign='center'>Already have an account? <Text color='primary' textDecorationStyle='dashed' textDecorationLine='underline'>Sign In</Text></Text>

                    </Box>

                </Container>
            </Box>
        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
})