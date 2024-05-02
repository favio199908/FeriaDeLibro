import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity, Linking } from "react-native";

import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";
import { useApi } from "../../hooks/useApi";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { globalStyles } from "../../../theme/theme";

import { useExpositor } from "../../hooks/useExpositor";

export const AuspicianScreen = () => {

    const handlePress = () => {
        Linking.openURL('https://www.micoca-cola.bo/');
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
            <View style={[globalStyles.contentContainer, { marginTop: top + 20 }]}>
                <Image source={require('../../../assets/casademoneda.png')} style={{
                    width: 330,
                    height: 330,
                    borderRadius: 10
                }} />
                <TouchableOpacity onPress={handlePress}>
                    <Image
                        source={require('../../../assets/LogoCocaCola.png')}
                        style={{
                            marginTop: 20,
                            width: 330,
                            height: 200,
                            borderRadius: 10
                        }}
                    />
                </TouchableOpacity>
                <Image source={require('../../../assets/tbs.png')} style={{
                    marginTop: 20,
                    width: 330,
                    height: 200,
                    borderRadius: 10
                }} />
                <Image source={require('../../../assets/toby.png')} style={{
                    marginTop: 20,
                    width: 330,
                    height: 200,
                    borderRadius: 10
                }} />
                <Image source={require('../../../assets/empacaressostenible.png')} style={{
                    marginTop: 20,
                    width: 330,
                    height: 190,
                    borderRadius: 10,
                    backgroundColor: "white"
                }} />
                <Image source={require('../../../assets/logo3600.png')} style={{
                    marginTop: 20,
                    width: 330,
                    height: 150,
                    borderRadius: 10,
                    backgroundColor: "white"
                }} />

            </View>
        </ScrollView>
    );
};
