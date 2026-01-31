import spacing from "@/config/theme/core/spacing"

const boxVariants = {
  defaults: {},

  circleIndicator: {
    height: spacing.sm,
    width: spacing.sm,
    backgroundColor: 'white',
    borderRadius: spacing.lsx,
  },
  iconBox: {
    borderRadius: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center'
  },
  barIndicator: {
    height: spacing.l,
    width: spacing.xs,
    backgroundColor: 'primary',
    borderRadius: 2,
  },
  stageCard: {
    marginBottom: 'lsx',
    backgroundColor: 'white',
    paddingHorizontal: 'sm',
    paddingVertical: 'l',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 'sm',
    borderRadius : spacing.sm
  },
  //Radio Button
  radio: {
    // width: spacing.m,
    // height: spacing.m,
    borderWidth: 1,
    // borderColor: 'pink',
    borderRadius: spacing.m/2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Radio inner (fluid)
  radioInner: {
    width: '60%',
    aspectRatio: 1,
    backgroundColor: 'primary',
    borderRadius: '100%',
  },
}

export default boxVariants