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

const Container: React.FC<Props> = ({ children,backgroundColor }) => {
  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]} edges={['top', 'bottom']}>
      

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
