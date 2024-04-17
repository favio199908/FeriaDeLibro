import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../../navegations/Navegations";
import { FlatList, ScrollView, Text, View } from "react-native";
import { useAgend } from "../../../hooks/useAgend";
import { AgendaHeader } from "../../../components/agendaFecha/AgendaHeader";
import { AgendaDetails } from "../../../components/agendaFecha/AgendaDetails";
import DiaryItem from "./DiaryItem";

// Define la interfaz Props que extiende StackScreenProps con los parámetros de la pantalla Details
interface Props extends StackScreenProps<RootStackParams, "DetailsFecha"> {}

// Define el componente DetailsScreen
export const AgendaFechaDetailsScreen = ({ route }: Props) => {
  // Extrae el participanteId de los parámetros de la ruta
  const { Fecha } = route.params;
  const { cast } = useAgend(Fecha);

  // Renderiza la pantalla de detalles del participante
  return (
    <View>
      <AgendaDetails agen={cast} />
    </View>
  );
};
