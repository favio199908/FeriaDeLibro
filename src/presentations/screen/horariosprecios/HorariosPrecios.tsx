import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, Linking, Image } from "react-native";

import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";
import { useApi } from "../../hooks/useApi";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { globalStyles } from "../../../theme/theme";

import { useExpositor } from "../../hooks/useExpositor";

export const HorariosPrecios = () => {
    const { top } = useSafeAreaInsets();
    const { expositor } = useExpositor();

    // Define el componente DetailsScreen
    const { isLoading } = useApi();

    if (isLoading) {
        return <FullScreenLoader />;
    }
    const casanacional = () => {
        Linking.openURL('https://www.facebook.com/FILSantaCruz?mibextid=ZbWKwL');
    };

    // Renderiza la pantalla de detalles del participante
    return (
        <ScrollView style={globalStyles.container}>
            <View style={[globalStyles.contentContainer, { marginBottom: "auto" }, { marginTop: "auto" }, { marginLeft: "auto" }, { marginRight: "auto" }]}>
                <TouchableOpacity onPress={casanacional}>
                    <Image source={require('../../../assets/horariosprecios.jpeg')} style={{
                        width: 330,
                        height: 630,
                        borderRadius: 10
                    }} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};
