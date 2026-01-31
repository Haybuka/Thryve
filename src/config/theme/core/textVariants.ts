import font from "@/config/theme/core/fontVariants";




const textVariants = {
    defaults: {
        fontFamily: font.family.primary,
        fontSize: font.size.regular
    },
    onboardingSubText: {
        fontFamily: font.family.primary,
        fontSize: font.size.smallRegular,
        marginVertical: 's',
        color: 'textPrimary',
    },
    onboardingLeadText: {
        fontSize: font.size.headerBase,
        fontWeight: 'bold',
        fontFamily: font.family.bold,
        color: 'textPrimary'
    },
    

}


export default textVariants;