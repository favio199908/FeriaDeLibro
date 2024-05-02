import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Image } from "react-native";

import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";
import { useApi } from "../../hooks/useApi";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { globalStyles } from "../../../theme/theme";

import { useExpositor } from "../../hooks/useExpositor";

export const OrganizanScreen = () => {
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
                <Image source={require('../../../assets/camaradepartamental.png')} style={{
                    width: 330,
                    height: 120,
                    borderRadius: 10
                }} />
                <Image source={require('../../../assets/feriainternacional.png')} style={{
                    marginTop: 20,
                    width: 330,
                    height: 152,
                    borderRadius: 10
                }} />
                <Image source={require('../../../assets/logomunicipiosantacruz.png')} style={{
                    marginTop: 20,
                    width: 330,
                    height: 152,
                    borderRadius: 10,
                    backgroundColor: "white"
                }} />
                <Image source={require('../../../assets/logo2024.png')} style={{
                    marginTop: 20,
                    width: 330,
                    height: 190,
                    borderRadius: 10,
                    backgroundColor: "white"
                }} />


            </View>
        </ScrollView>
    );
};
