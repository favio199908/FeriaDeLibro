import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, Linking, TouchableOpacity } from "react-native";

import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";
import { useApi } from "../../hooks/useApi";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { globalStyles } from "../../../theme/theme";

import { useExpositor } from "../../hooks/useExpositor";

export const OrganizanScreen = () => {
    const handlePress = () => {
        Linking.openURL('https://www.camaralibrosc.com.bo/');
    };
    const feriainternacional = () => {
        Linking.openURL('https://www.facebook.com/FILSantaCruz/');
    };
    const gmSantacruz = () => {
        Linking.openURL('https://gmsantacruz.gob.bo/');
    };
    const fexpocruz = () => {
        Linking.openURL('https://fexpocruz.com.bo/');
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
                    <Image source={require('../../../assets/camaradepartamental.png')} style={{
                        width: 330,
                        height: 120,
                        borderRadius: 10
                    }} />

                </TouchableOpacity>
                <TouchableOpacity onPress={feriainternacional}>
                    <Image source={require('../../../assets/feriainternacional.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 152,
                        borderRadius: 10
                    }} />

                </TouchableOpacity>
                <TouchableOpacity onPress={gmSantacruz}>
                    <Image source={require('../../../assets/logomunicipiosantacruz.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 152,
                        borderRadius: 10,
                        backgroundColor: "white"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={fexpocruz}>
                    <Image source={require('../../../assets/logo2024.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 190,
                        borderRadius: 10,
                        backgroundColor: "white"
                    }} />
                </TouchableOpacity>



            </View>
        </ScrollView>
    );
};
