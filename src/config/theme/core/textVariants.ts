import font from "@/config/theme/core/fontVariants";



export const textVariants = {
    defaults: {
        fontFamily: font.fontFamily.regular,
        fontSize: font.fontSize.md,
        color: 'textPrimary',
    },

    // ===== HEADINGS =====
    h1: {
        fontFamily: font.fontFamily.bold,
        fontSize: font.fontSize.h1,
        fontWeight: 'bold',
    },

    h2: {
        fontFamily: font.fontFamily.bold,
        fontSize: font.fontSize.h2,
        fontWeight: 'bold',
    },

    h3: {
        fontFamily: font.fontFamily.bold,
        fontSize: font.fontSize.h3,
        fontWeight: 'bold',
    },

    h4: {
        fontFamily: font.fontFamily.semiBold,
        fontSize: font.fontSize.h4,
        fontWeight: 'bold',
    },
    h5: {
        fontSize: font.fontSize.sm,
        fontFamily: font.fontFamily.regular,
        fontWeight: 'bold',
    },
    h6: {
        fontSize: font.fontSize.sm,
        fontFamily: font.fontFamily.regular,
        fontWeight: 'bold',
    },
    // ===== BODY TEXT =====
    bodyLarge: {
        fontFamily: font.fontFamily.regular,
        fontSize: font.fontSize.lg,
    },

    body: {
        fontFamily: font.fontFamily.regular,
        fontSize: font.fontSize.md,
    },

    bodySmall: {
        fontFamily: font.fontFamily.regular,
        fontSize: font.fontSize.sm,
    },

    // ===== WEIGHT VARIANTS =====
    bodySemiBold: {
        fontFamily: font.fontFamily.semiBold,
        fontSize: font.fontSize.md,
    },

    bodyBold: {
        fontFamily: font.fontFamily.bold,
        fontSize: font.fontSize.md,
    },

    // ===== CAPTION / LABELS =====
    caption: {
        fontFamily: font.fontFamily.regular,
        fontSize: font.fontSize.xs,
    },

    captionSemiBold: {
        fontFamily: font.fontFamily.semiBold,
        fontSize: font.fontSize.xs,
    },

    button: {
        fontFamily: font.fontFamily.bold,
        fontSize: font.fontSize.md,
        textTransform: 'uppercase',
    },
};



export default textVariants;