import { Image, StyleSheet, Text, View } from "react-native";

import { Fecha } from "../../../core/entities/agenda.entity";

interface Props {
  agen: Fecha;
}

export const AgendaF = ({ agen }: Props) => {
  console.log("Datos recibidos en AgendaF:", agen); // Agregar consola de registro aquí

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: agen.foto }}
        style={{ width: 100, height: 150, borderRadius: 10 }}
      />

      <View style={styles.actorInfo}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{agen.titulo}</Text>
        <Text>Hora</Text>
        <Text style={{ fontSize: 12, opacity: 0.7 }}>{agen.hora}</Text>
        <Text>Expositor</Text>
        <Text style={{ fontSize: 12, opacity: 0.7 }}>{agen.expositor}</Text>
        <Text>Profecion</Text>
        <Text style={{ fontSize: 12, opacity: 0.7 }}>{agen.profesion}</Text>
        <Text>Nacionalidad</Text>
        <Text style={{ fontSize: 12, opacity: 0.7 }}>{agen.nacionalidad}</Text>
        <Text>Pabellon</Text>
        <Text style={{ fontSize: 12, opacity: 0.7 }}>{agen.pabellon}</Text>

        <Text>Local</Text>
        <Text style={{ fontSize: 12, opacity: 0.7 }}>{agen.local}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 100,
    marginLeft: 5,
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
});
