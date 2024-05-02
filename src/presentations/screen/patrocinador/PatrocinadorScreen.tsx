import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity, Linking } from "react-native";


import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";
import { useApi } from "../../hooks/useApi";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { globalStyles } from "../../../theme/theme";

import { useExpositor } from "../../hooks/useExpositor";

export const PatrocinadorScreen = () => {
    const handlePress = () => {
        Linking.openURL('https://www.kia.com.bo/');
    };
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
            <View style={[globalStyles.contentContainer, { marginBottom: "auto" }, { marginTop: "auto" }, { marginLeft: "auto" }, { marginRight: "auto" }]}>


                <TouchableOpacity onPress={handlePress}>
                    <Image source={require('../../../assets/LOGOKIAfondoblanco.png')} style={{
                        width: 330,
                        height: 300,
                        borderRadius: 150
                    }} />

                </TouchableOpacity>


            </View>
        </ScrollView>
    );
};
