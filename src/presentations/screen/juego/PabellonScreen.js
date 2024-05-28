import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ScrollView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PABELLONES_INICIALES = [
  { id: 1, desbloqueado: false, frase: "", imagen: require('./img/icon.png') },
  { id: 2, desbloqueado: false, frase: "", imagen: require('./img/icon.png') },
  { id: 3, desbloqueado: false, frase: "", imagen: require('./img/icon.png') },
  { id: 4, desbloqueado: false, frase: "", imagen: require('./img/icon.png') },
  { id: 5, desbloqueado: false, frase: "", imagen: require('./img/icon.png') },
  { id: 6, desbloqueado: false, frase: "", imagen: require('./img/icon.png') },
];
  

const Pabellon = ({ id, desbloqueado, frase, imagen }) => (
  <View style={styles.pabellon}>
    <Image source={imagen} style={[styles.imagen, { opacity: desbloqueado ? 1 : 0.5 }]} />
    <Text style={styles.title}>{`nivel ${id} : ${desbloqueado ? 'Desbloqueado' : 'Bloqueado'}`}</Text>
    {desbloqueado && <Text style={styles.frase}>{frase}</Text>}
  </View>
);

export default function PabellonesScreen({ navigation, route }) {
  const [pabellones, setPabellones] = useState([]);

  useEffect(() => {
    const loadPabellones = async () => {
      try {
        const storedPabellones = await AsyncStorage.getItem('pabellones');
        if (storedPabellones) {
          setPabellones(JSON.parse(storedPabellones));
        } else {
          setPabellones(PABELLONES_INICIALES);
          await AsyncStorage.setItem('pabellones', JSON.stringify(PABELLONES_INICIALES));
        }
      } catch (error) {
        console.error('Error loading pabellones from AsyncStorage:', error);
      }
    };

    loadPabellones();
  }, [route.params?.pabellones]);

  const desbloquearPabellon = () => {
    navigation.navigate('Camera', { pabellones });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.pabellonesContainer}>
        {pabellones.map(pabellon => (
          <Pabellon key={pabellon.id} {...pabellon} />
        ))}
     
      <View style={styles.buttonContainer}>
        
      </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Desbloquear pabellones" onPress={desbloquearPabellon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  pabellonesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  pabellon: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '45%',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  frase: {
    fontSize: 14,
    marginTop: 5,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
    width: '80%',
  },
  imagen: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});
