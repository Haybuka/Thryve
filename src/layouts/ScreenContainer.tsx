import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = React.PropsWithChildren<{
    backgroundColor? : string
}>;

const Container: React.FC<Props> = ({ children,backgroundColor = '#fff' }) => {
  return (
    <SafeAreaView style={[styles.safeArea, {backgroundColor}]} edges={['top', 'bottom']}>
      

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        style={styles.content}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal : 24
  },
  content: {
    flex: 1,
  },
});
