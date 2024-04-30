// Importa las funciones necesarias desde React y los componentes específicos de React Native
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { RootStackParams } from '../../navegations/Navegations';


type CameraScreenNavigationProp = StackNavigationProp<RootStackParams, 'Camera'>;

// Define la interfaz de las propiedades del componente
type Props = {

    navigation: CameraScreenNavigationProp;
};

// Define el componente funcional CameraScreen
export default function CameraScreen({ navigation }: Props) {
    // Define los estados para verificar los permisos de la cámara y si se ha escaneado un código QR
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState(false);

    // Efecto para solicitar los permisos de la cámara cuando se monta el componente
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    // Función para manejar el escaneo del código QR
    const handleBarCodeScanned = async ({ data }: { data: string }) => {
        setScanned(true);
        const pabellones = data;
        const pabellonEncontrado = pabellones.find((pabellon: Pabellon) => pabellon.frase === data);
        if (pabellonEncontrado) {
            const nuevosPabellones = pabellones.map((pabellon: Pabellon) => {
                if (pabellon.id === pabellonEncontrado.id) {
                    return { ...pabellon, desbloqueado: true };
                }
                return pabellon;
            });
            await AsyncStorage.setItem('pabellones', JSON.stringify(nuevosPabellones));
            navigation.replace('PabellonesScreen', { pabellones: nuevosPabellones });
        } else {
            alert('El código QR no coincide con ninguna frase de pabellón.');
        }
    };

    // Renderiza el componente según el estado de los permisos de la cámara
    if (hasPermission === null) {
        return <Text style={styles.permissionText}>Solicitando permiso para la cámara</Text>;
    }
    if (hasPermission === false) {
        return <Text style={styles.permissionText}>No se ha concedido el permiso para la cámara</Text>;
    }

    // Renderiza la vista de la cámara
    return (
        <View style={styles.container}>
            <Camera
                style={styles.camera}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            />
        </View>
    );
}

// Estilos del componente
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
