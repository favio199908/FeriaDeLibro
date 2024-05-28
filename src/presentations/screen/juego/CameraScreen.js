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

    // Verificar si el código QR ya ha sido utilizado para desbloquear un pabellón
    const codigoYaUsado = pabellones.some(pabellon => pabellon.frase === data);

    if (codigoYaUsado) {
      alert('Este código QR ya ha sido utilizado para desbloquear un pabellón.');
      setScanned(false); // Permitir escanear otro código QR
      return;
    }

    // Buscar el primer pabellón no desbloqueado
    const pabellonDesbloqueado = pabellones.find(pabellon => !pabellon.desbloqueado);

    if (pabellonDesbloqueado) {
      const nuevosPabellones = pabellones.map(pabellon => {
        if (pabellon.id === pabellonDesbloqueado.id) {
          return { ...pabellon, desbloqueado: true, frase: data };
        }
        return pabellon;
      });
      await AsyncStorage.setItem('pabellones', JSON.stringify(nuevosPabellones));
      navigation.replace('Pabellones', { pabellones: nuevosPabellones });
    } else {
      alert('Todos los pabellones ya están desbloqueados.');
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
      {scanned && (
        <Button title="Escanear otro QR" onPress={() => setScanned(false)} />
      )}
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
