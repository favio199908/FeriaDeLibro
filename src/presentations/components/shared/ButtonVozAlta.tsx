import React from 'react';
import { Pressable, Text } from 'react-native';
import { globalStyles } from '../../../theme/theme';
import Tts from 'react-native-tts';

interface Props {
  label: string;
}

export const ButtonVozAlta = ({ label }: Props) => {
  const handlePress = () => {
    Tts.speak(label);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={globalStyles.primaryButton}
    >
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
