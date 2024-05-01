import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Pressable } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { globalStyles } from "../../../theme/theme";
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';
import { Ionicons } from '../../components/shared/Ionicons';

export const SalonesScreen = () => {
    const [agendaData, setAgendaData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [fecha, setFecha] = useState("");
    const [id, setID] = useState("1");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    useEffect(() => {
        if (!fecha || !id) return;
        setIsLoading(true);
        const apiUrl = `https://feriasc.programatupotencial.com/api/agendaferia/agendafechasalon/${fecha}/${id}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setAgendaData(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, [fecha, id]);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        if (date) {
            const selectedDate = new Date(date);
            const localDate = new Date(
                selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000
            );
            const formattedDate = localDate.toISOString().split("T")[0];
            setFecha(formattedDate);
        }
        hideDatePicker();
    };

    return (

        <View style={[globalStyles.container]}>

            <View style={styles.form}><Pressable onPress={showDatePicker} style={globalStyles.iconContainer}>
                <View style={globalStyles.iconCircle}>
                    <Ionicons name="today-outline" size={30} color="blue" />

                </View>
                <Text style={globalStyles.buttonText}>Selciona una fecha</Text>
            </Pressable>


                {isDatePickerVisible && (
                    <DateTimePicker
                        value={fecha ? new Date(fecha) : new Date()}
                        mode="date"
                        display="default"
                        onChange={(_, selectedDate) => {
                            if (selectedDate) {
                                handleConfirm(selectedDate);
                            }
                        }}
                    />
                )}
                <Text style={styles.label}>Selecciona el Salon:</Text>
                <Picker
                    selectedValue={id}
                    style={styles.picker}
                    onValueChange={(itemValue) => setID(itemValue)}
                >
                    <Picker.Item label="Hernando Sanabria Fernández" value="2" />
                    <Picker.Item label="Enrique Finot" value="4" />
                    <Picker.Item label="Raúl Otero Reiche" value="6" />
                    <Picker.Item label="Peter Lewy" value="7" />
                    <Picker.Item label="Jornadas Pedagógicas" value="8" />
                    <Picker.Item label="Teatro" value="16" />
                    <Picker.Item label="Enrique Kempff Mercado" value="5" />
                    <Picker.Item label="Pabellon Infantil" value="14" />
                </Picker>

            </View>
            {isLoading ? (
                <FullScreenLoader />
            ) : (
                agendaData ? (
                    <FlatList
                        data={agendaData.agenda}
                        renderItem={({ item }) => (
                            <View style={styles.itemContainer}>
                                <Text style={styles.title}>{item.titulo}</Text>
                                <Text>{item.expositor}</Text>
                                <Text>{item.hora}</Text>
                                <Text>{item.pabellon}</Text>
                                <Text>{item.fecha}</Text>
                            </View>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                ) : (
                    <Text>No hay datos disponibles.</Text>
                ))
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    form: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    picker: {
        height: 100,
        width: 320,
        marginBottom: 10,
    },
    itemContainer: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 5
    }
});
