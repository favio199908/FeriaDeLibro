import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function CameraScreen({ route, navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true);
    const { pabellones } = route.params;
    const pabellonEncontrado = pabellones.find(pabellon => pabellon.frase === data);
    if (pabellonEncontrado) {
      const nuevosPabellones = pabellones.map(pabellon => {
        if (pabellon.id === pabellonEncontrado.id) {
          return { ...pabellon, desbloqueado: true };
        }
        return pabellon;
      });
      await AsyncStorage.setItem('pabellones', JSON.stringify(nuevosPabellones));
      navigation.replace('Pabellones', { pabellones: nuevosPabellones });
    } else {
      alert('El código QR no coincide con ninguna frase de pabellón.');
    }
  };
  
  if (hasPermission === null) {
    return <Text style={styles.permissionText}>Solicitando permiso para la cámara</Text>;
  }
  if (hasPermission === false) {
    return <Text style={styles.permissionText}>No se ha concedido el permiso para la cámara</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  permissionText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: '50%',
  },
});
