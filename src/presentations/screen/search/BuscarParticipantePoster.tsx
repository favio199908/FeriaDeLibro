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
                : "http://feria.programatupotencial.com/Logotipos/user.png",
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
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 1,
    marginRight: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 18,
  },
  name: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
