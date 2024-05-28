import { Image, StyleSheet, Text, View } from "react-native";

import { Fecha } from "../../../core/entities/agenda.entity";
import { globalStyles } from '../../../theme/theme';

interface Props {
  agen: Fecha;
}

export const AgendaF = ({ agen }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: agen.foto }}
        style={styles.iconContainer}
      />

      <View style={globalStyles.primaryButton}>
        <Text style={{ fontSize: 15, fontWeight: "500", color: "#262223" }}>{agen.titulo}</Text>
        <Text style={{ fontSize: 15, fontWeight: "500", color: "#262223" }}>Hora</Text>
        <Text style={{ fontSize: 12, opacity: 0.7, color: "#262223" }}>{agen.hora}</Text>
        <Text style={{ fontSize: 15, fontWeight: "500", color: "#262223" }}>Participante</Text>
        <Text style={{ fontSize: 12, opacity: 0.7, color: "#262223" }}>{agen.expositor}</Text>
        <Text style={{ fontSize: 15, fontWeight: "500", color: "#262223" }}>Salón</Text>
        <Text style={{ fontSize: 12, opacity: 0.7, color: "#262223" }}>{agen.pabellon}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 100,
    marginLeft: 5,
    marginTop: 50,
    marginBottom: 50,
    display: "flex",
    flexDirection: "row",
  },
  iconContainer: {
    // Ancho del contenedor del icono
    aspectRatio: 1, // Relación de aspecto 1:1 para mantener los íconos cuadrados
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10, // Espacio entre los íconos
    backgroundColor: "white",


    width: 70,
    height: 70,
    borderRadius: 40,

  },

});
