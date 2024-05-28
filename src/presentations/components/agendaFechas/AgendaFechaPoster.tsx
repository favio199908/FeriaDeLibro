import React from "react";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navegations/Navegations";
import { Agendass } from "../../../core/entities/agenda.entity";

interface Props {
  agenda: Agendass;
  height?: number;
  width?: number;
}

export const AgendaFechasPoster = ({
  agenda,
  height = 150,
  width = 100,
}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("DetailsFecha", { Fecha: agenda.fecha_completa })
      }
      style={({ pressed }) => ({
        width,
        height,
        marginHorizontal: 5,
        paddingBottom: 1,
        paddingHorizontal: 5,
        opacity: pressed ? 0.9 : 1,
      })}
    >
      <View style={styles.imagecontainer}>
        <View style={styles.textContainertop}>
          <Text style={styles.dateText}>{agenda.dia}</Text>
        </View>
        <Text style={styles.image}>{agenda.fecha}</Text>

        <View style={styles.textContainer}>
          <Text style={styles.monthText}>{agenda.mes}</Text>

          <Text style={styles.fullDateText}>{agenda.fecha_completa}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    color: "white",
    fontSize: 78, // Tamaño grande para resaltar el mes
    fontWeight: "bold", // Negrita para mayor énfasis
    textAlign: "center", // Centra el texto horizontalmente
    marginBottom: 5, // Espacio entre el mes y la fecha
  },
  imagecontainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    backgroundColor: "#41C9E2", // Cambia el color de fondo de la imagen
  },
  textContainertop: {
    position: "relative",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 141, 218, 0.7)", // Cambia el color de fondo del texto
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 141, 218, 0.7)", // Cambia el color de fondo del texto
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomEndRadius: 18,
    borderBottomStartRadius: 18,
  },
  monthText: {
    color: "white",
    fontSize: 5, // Tamaño grande para resaltar el mes
    fontWeight: "bold", // Negrita para mayor énfasis
    textAlign: "center", // Centra el texto horizontalmente
    marginBottom: 5, // Espacio entre el mes y la fecha
  },
  dateText: {
    color: "white",
    fontSize: 5,
    textAlign: "center", // Centra el texto horizontalmente
  },
  fullDateText: {
    color: "white",
    fontSize: 5,
    textAlign: "center", // Centra el texto horizontalmente
  },
});
