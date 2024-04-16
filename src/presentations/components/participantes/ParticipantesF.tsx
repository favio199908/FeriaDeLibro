import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { Participante } from "../../../core/entities/participante.entity";

interface Props {
  parti: Participante;
}

export const ParticipanteF = ({ parti }: Props) => {
  const baseUrl = "http://feria.programatupotencial.com/images/";
  const defaultImageUrl =
    "http://feria.programatupotencial.com/Logotipos/user.png";
  const imageUrl = parti.foto ? baseUrl + parti.foto : defaultImageUrl;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.actorName}>{parti.nombre}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  actorName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  actorId: {
    fontSize: 14,
    color: "grey",
  },
});
