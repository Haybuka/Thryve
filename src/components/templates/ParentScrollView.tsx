import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Props = React.PropsWithChildren<{
  backgroundColor?: string;
}>;

const ParentScrollView: React.FC<Props> = ({
  children,
  backgroundColor = '#fff',
}) => {
  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor }]}
      edges={['top']}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        enableOnAndroid
      >
        {children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ParentScrollView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
  },
  content: {
    flexGrow: 1,
  },
});