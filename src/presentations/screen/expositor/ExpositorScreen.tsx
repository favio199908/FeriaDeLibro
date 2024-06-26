import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { APosterCarusel } from "../../components/agendaFechas/APosterCarrusel";
import { useAgenda } from "../../hooks/useAgenda";
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";
import { useApi } from "../../hooks/useApi";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HorizontalCarrusel } from "../../components/agendaFechas/HorizontalCarrusel";
import { globalStyles } from "../../../theme/theme";
import { ExpositorPoster } from "../../components/expocitor/ExpositorPoster";
import { useExpositor } from "../../hooks/useExpositor";

export const ExpositorScreen = () => {
    const { top } = useSafeAreaInsets();
    const { expositor } = useExpositor();

    // Define el componente DetailsScreen
    const { isLoading } = useApi();

    if (isLoading) {
        return <FullScreenLoader />;
    }

    // Renderiza la pantalla de detalles del participante
    return (
        <ScrollView style={globalStyles.container}>
            <View style={[globalStyles.contentContainer, { marginTop: top + 20 }]}>
                <ExpositorPoster agendas={expositor} />

            </View>
        </ScrollView>
    );
};
