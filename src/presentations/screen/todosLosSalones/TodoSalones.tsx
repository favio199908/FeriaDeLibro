import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { globalStyles } from '../../../theme/theme';

interface Salon {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    plano: string;
    tipo: string;
    created_at: string;
    updated_at: string;
}

const SalonComponent = () => {
    const [salones, setSalones] = useState<Salon[]>([]);

    useEffect(() => {
        const fetchSalones = async () => {
            try {
                const response = await axios.get<Salon[]>("https://feriasc.programatupotencial.com/api/salon");
                setSalones(response.data);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };

        fetchSalones();
    }, []);

    return (
        <ScrollView>
            <View style={[globalStyles.contentContainer, { marginBottom: "auto" }, { marginTop: "auto" }, { marginLeft: "auto" }, { marginRight: "auto" }]}>
                <Text style={styles.heading}>Salón</Text>
                <View>
                    {salones.map(salon => (
                        <View key={salon.id}>
                            <Text style={styles.name}>{salon.nombre}</Text>
                            <Text style={styles.label}>{salon.descripcion}</Text>
                            <View style={styles.imageContainers}>
                                <Image
                                    style={styles.images}
                                    source={{
                                        uri: salon.imagen
                                            ? `https://feriasc.programatupotencial.com/images/${salon.imagen}`
                                            : "https://feriasc.programatupotencial.com/Logotipos/user.png",
                                    }}
                                />
                            </View>

                            {/*} <View style={styles.imageContainers}>
                                <Image
                                    style={styles.images}
                                    source={{
                                        uri: salon.plano
                                            ? `https://feriasc.programatupotencial.com/images/${salon.plano}`
                                            : "https://feriasc.programatupotencial.com/Logotipos/user.png",
                                    }}
                                />
                                </View>*/}


                            <View style={styles.divider} />
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    imageContainers: {
        marginRight: 10,
    },
    images: {

        alignItems: "center",
        justifyContent: "center",
        width: 320,
        height: 400,
        borderRadius: 40,
        backgroundColor: "lightgray", // Puedes cambiar el color del círculo aquí
        marginBottom: 10,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
});

export default SalonComponent;
