import { Image, StyleSheet, Text, View } from "react-native";

import { AgendaS } from "../../../core/entities/agendaSalon.entity";

interface Props {
  agenS: AgendaS;
}

export const AgendaSalo = ({ agenS }: Props) => {
  const fechaFormateada = agenS.fecha.toLocaleString();
  return (
    <View style={styles.container}>
      <View style={styles.actorInfo}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{agenS.salon}</Text>

        <Text style={{ fontSize: 12, opacity: 0.7 }}>{agenS.expositor}</Text>

        <Text style={{ fontSize: 12, opacity: 0.7 }}>{agenS.expositor_id}</Text>

        <Text style={{ fontSize: 12, opacity: 0.7 }}>{fechaFormateada}</Text>

        <Text style={{ fontSize: 12, opacity: 0.7 }}>{agenS.hora}</Text>

        <Text style={{ fontSize: 12, opacity: 0.7 }}>{agenS.id}</Text>
        <Text style={{ fontSize: 12, opacity: 0.7 }}>{agenS.salon_id}</Text>
        <Text style={{ fontSize: 12, opacity: 0.7 }}>{agenS.titulo}</Text>
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
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
});
