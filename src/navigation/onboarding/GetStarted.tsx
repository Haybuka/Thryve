import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import React, { useRef, useState } from 'react';
import { GetStartedScreenProps } from './types';
import Button from '@/components/Button';


const GetStarted = ({ navigation }: GetStartedScreenProps) => {

    const image_src = require('../../assets/images/getStarted/started_three.jpg');
    const ref = useRef<ICarouselInstance>(null);
    const [backgroundImage, setBackgroundImage] = useState(image_src);
    const [carouselIndex, setCarouselIndex] = useState(1);

    const imageCarousel = [
        {
            id: 1,
            src: require('../../assets/images/getStarted/started_one.jpg'),
            lead_text: ['Support for your ', ' fertility journey'],
            sub_text: 'Understand your cycle, track fertile days, and build gentle daily habits that support your body.',
            alt: 'Image 1'
        },
        {
            id: 2,
            src: require('../../assets/images/getStarted/started_two.jpg'),
            lead_text: [`Care and guidance `, `for every stage`],
            sub_text: 'Follow your pregnancy week by week with supportive reminders, wellness tools, and gentle guidance.',
            alt: 'Image 2'
        },
        {
            id: 3,
            src: require('../../assets/images/getStarted/started_three.jpg'),
            lead_text: [`Gentle support`, ` after birth`],
            sub_text: 'Your recovery matters. Track wellness, manage daily reminders, and move at your own pace as your body heals.',
            alt: 'Image 3'
        },
    ]

    const handleGetStarted = () => {
        navigation.navigate('StageSelection');
    }
    return (

        <SafeAreaView style={styles.container} edges={['left', 'right']}>
            <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>

                <View style={styles.layerView}>
                    <View style={styles.indicatorContainer}>
                        {[1, 2, 3].map((id) =>

                        (carouselIndex === id ? (
                            <View key={id} style={styles.barSwipe} />
                        ) : (
                            <View key={id} style={styles.circleSwipe} />
                        ))

                        )}
                    </View>
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
                            <View style={styles.viewContainer} key={item.id}>
                                <View>
                                    <Text style={styles.lead_text}> {item.lead_text[0]}</Text>
                                    <Text style={styles.lead_text}>{item.lead_text[1]}</Text>
                                </View>
                                <Text style={styles.sub_text}>{item.sub_text}</Text>

                            </View>
                        )}
                    />

                    <View style={styles.btnContainer}>
                        <Button label='Get Started' onPress={handleGetStarted} />
                    </View>
                    <Text style={styles.sub_text}>Already have an account? <Text style={styles.login_text}>Sign In</Text></Text>

                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    container: { flex: 1 },
    image: {
        flex: 1,
    },
    layerView: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#00000063',
        alignItems: 'center',
        paddingBottom: 50
    },
    viewContainer: {
        padding: 24,
    },
    btnContainer : {
         paddingHorizontal: 20,
        alignSelf : 'stretch',
    },
    lead_text: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '700',
        fontFamily: 'Inter',
        color: '#fff'
    },
    sub_text: {
        textAlign: 'center',
        marginVertical: 10,
        fontFamily: 'Inter',
        color: '#fff',
        lineHeight: 25
    }
    , login_text: {
        textDecorationStyle: 'dashed',
        textDecorationLine: 'underline',
        color: '#FF6F91',
        fontFamily: 'Inter'
    },
    indicatorContainer: { flexDirection: 'row', justifyContent: 'center', gap: 10, alignItems: "center" },
    circleSwipe: {
        height: 10,
        width: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    barSwipe: {
        height: 22,
        width: 4,
        backgroundColor: '#FF6F91'
    }
})