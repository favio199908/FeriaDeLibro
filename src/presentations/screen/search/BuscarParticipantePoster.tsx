import React from "react";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Participante } from "../../../core/entities/participante.entity";
import { RootStackParams } from "../../navegations/Navegations";

interface Props {
  participante: Participante;
  height?: number;
  width?: number;
}

export const BuscarParticipantePoster = ({
  participante,
  height = 80,
  width = 210,
}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Details", { participanteId: participante.id })
      }
      style={({ pressed }) => [
        styles.container,
        {
          width,
          height,
          opacity: pressed ? 0.9 : 1,
        },
      ]}
    >
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: participante.foto
                ? participante.foto
                : "https://feriasc.programatupotencial.com/Logotipos/user.png",
            }}
          />
        </View>
        <Text style={styles.name}>{participante.nombre}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {

    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: "lightgray", // Puedes cambiar el color del círculo aquí
    marginBottom: 10,
  },
  name: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#F2A71B",
  },
});
