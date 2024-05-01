import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { APosterCarusel } from "../../components/agendaFechas/APosterCarrusel";
import { useAgenda } from "../../hooks/useAgenda";
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";
import { useApi } from "../../hooks/useApi";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HorizontalCarrusel } from "../../components/agendaFechas/HorizontalCarrusel";
import { globalStyles } from "../../../theme/theme";

export const MapaScreen = () => {
    const { top } = useSafeAreaInsets();
    const { agenda } = useAgenda();

    // Define el componente DetailsScreen
    const { isLoading, paricipante } = useApi();

    if (isLoading) {
        return <FullScreenLoader />;
    }

    // Renderiza la pantalla de detalles del participante
    return (
        <ScrollView style={globalStyles.container}>
            <View style={[globalStyles.contentContainer, { marginTop: top + 20 }]}>
                <Text>mapa</Text>
            </View>
        </ScrollView>
    );
};
