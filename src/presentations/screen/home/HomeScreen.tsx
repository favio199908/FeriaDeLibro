import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useApi } from "../../hooks/useApi";
import { useAgenda } from "../../hooks/useAgenda";
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";
import { PosterCarusel } from "../../components/participantes/PosterCarrusel";
import { HorizontalCarrusel } from "../../components/participantes/HorizontalCarrusel";
import { APosterCarusel } from "../../components/agendaFechas/APosterCarrusel";
import { globalStyles } from "../../../theme/theme";

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, paricipante } = useApi();
  const { agenda } = useAgenda();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView style={globalStyles.container}>
      <View style={[globalStyles.contentContainer, { marginTop: top + 20 }]}>
        <PosterCarusel participantes={paricipante} />
        <HorizontalCarrusel participante={paricipante} nombre="PARTICIPANTES" />
        <APosterCarusel agendas={agenda} />
      </View>
    </ScrollView>
  );
};
