// RadioIndicator.test.tsx

import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import RadioIndicator from '../RadioIndicator';

describe('RadioIndicator', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <RadioIndicator />
    );

    expect(getByTestId('radio-indicator')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();

    const { getByTestId } = render(
      <RadioIndicator onPress={onPress} />
    );

    fireEvent.press(getByTestId('radio-indicator'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('renders inner indicator when selected', () => {
    const { getByTestId } = render(
      <RadioIndicator selected />
    );

    expect(
      getByTestId('radio-indicator-inner')
    ).toBeTruthy();
  });

  it('does not render inner indicator when not selected', () => {
    const { queryByTestId } = render(
      <RadioIndicator selected={false} />
    );

    expect(
      queryByTestId('radio-indicator-inner')
    ).toBeNull();
  });

  it('sets accessibility state correctly when selected', () => {
    const { getByRole } = render(
      <RadioIndicator selected />
    );

    const radio = getByRole('radio');

    expect(radio.props.accessibilityState).toEqual({
      selected: true,
    });
  });

  it('sets accessibility label', () => {
    const { getByLabelText } = render(
      <RadioIndicator label="Male" />
    );

    expect(
      getByLabelText('Male')
    ).toBeTruthy();
  });

  it('uses custom width and height', () => {
    const { getByTestId } = render(
      <RadioIndicator width={24} height={24} />
    );

    const radio = getByTestId('radio-indicator');

    expect(radio.props.style).toEqual(
      expect.objectContaining({
        width: 24,
        height: 24,
        borderRadius: 12,
      })
    );
  });
});