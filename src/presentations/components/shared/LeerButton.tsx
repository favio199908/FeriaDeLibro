import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface LeerButtonProps {
  onPress: () => void;
  title: string;
}

const LeerButton: React.FC<LeerButtonProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    paddingVertical: 8, // Ajusta el tamaño vertical del padding para hacer el botón más pequeño
    paddingHorizontal: 16, // Ajusta el tamaño horizontal del padding para hacer el botón más pequeño
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default LeerButton;