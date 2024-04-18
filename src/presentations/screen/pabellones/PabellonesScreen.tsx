import React, { useState } from "react";
import { ScrollView, View, Text, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useApi } from "../../hooks/useApi";
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";
import { globalStyles } from "../../../theme/theme";
import DateTimePicker from "@react-native-community/datetimepicker";

export const PabellonesScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading } = useApi();
  const [fecha, setFecha] = useState("");
  const [id, setID] = useState("1");
  const [resultado, setResultado] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    if (date === undefined) {
      hideDatePicker();
      return;
    }
    const selectedDate = new Date(date);
    const localDate = new Date(
      selectedDate.getTime() + selectedDate.getTimezoneOffset() * 60000
    );
    const formattedDate = localDate.toISOString().split("T")[0];
    setFecha(formattedDate);
    hideDatePicker();
  };

  const buscarPorFechaYID = async () => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
      alert("Formato de fecha incorrecto. Utiliza el formato YYYY-MM-DD.");
      return;
    }

    try {
      const response = await fetch(
        `http://feria.programatupotencial.com/api/agendaferia/agendafechasalon/${fecha}/${id}`
      );
      const data = await response.json();
      setResultado(JSON.stringify(data));
    } catch (error) {
      console.error("Error al buscar:", error);
    }
  };

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView style={globalStyles.container}>
      <View style={[globalStyles.contentContainer, { marginTop: top + 20 }]}>
        <Text style={styles.label}>Selecciona una fecha:</Text>
        <Button title="Abrir selector de fecha" onPress={showDatePicker} />
        {isDatePickerVisible && (
          <DateTimePicker
            value={fecha ? new Date(fecha) : new Date()}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              handleConfirm(selectedDate);
            }}
          />
        )}
        <Text style={styles.label}>Selecciona el ID:</Text>
        <Picker
          selectedValue={id}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setID(itemValue)}
        >
          <Picker.Item label="Hernando Sanabria Fernández" value="2" />
          <Picker.Item label="Enrique Finot" value="4" />
          <Picker.Item label="Raúl Otero Reiche" value="6" />
          <Picker.Item label="Peter Lewy" value="7" />
          <Picker.Item label="Jornadas Pedagógicas" value="8" />
          <Picker.Item label="Teatro" value="16" />
          <Picker.Item label="Enrique Kempff Mercado" value="5" />
        </Picker>
        <Button title="Buscar" onPress={buscarPorFechaYID} />
        <Text style={styles.resultLabel}>Resultado:</Text>
        <Text style={styles.resultText}>{resultado}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    height: 40,
    width: 200,
    marginBottom: 10,
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
  resultText: {
    fontSize: 16,
  },
});
