import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Image } from "react-native";
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
            <View style={[globalStyles.contentContainer, { marginBottom: "auto" }, { marginTop: "auto" }, { marginLeft: "auto" }, { marginRight: "auto" }]}>

                <Image source={require('../../../assets/plano2024.png')} style={{


                    marginTop: 20,
                    width: 330,
                    height: 650,
                    borderRadius: 10,
                    backgroundColor: "white"
                }} />
            </View>
        </ScrollView>
    );
};
