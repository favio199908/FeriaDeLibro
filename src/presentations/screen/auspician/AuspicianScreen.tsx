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
    const tbs = () => {
        Linking.openURL('https://tbs.edu.bo/');
    };
    const toby = () => {
        Linking.openURL('https://www.facebook.com/HamburguesasToby');
    };
    const empacar = () => {
        Linking.openURL('https://empacar.com.bo/');
    };
    const edi3600 = () => {
        Linking.openURL('https://editorial3600.com/');
    };
    const casanacional = () => {
        Linking.openURL('https://casanacionaldemoneda.bo/');
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

                <TouchableOpacity onPress={casanacional}>
                    <Image source={require('../../../assets/casademoneda.png')} style={{
                        width: 330,
                        height: 330,
                        borderRadius: 10
                    }} />
                </TouchableOpacity>
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
                <TouchableOpacity onPress={tbs}>
                    <Image source={require('../../../assets/tbs.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 200,
                        borderRadius: 10
                    }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={toby}>
                    <Image source={require('../../../assets/toby.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 200,
                        borderRadius: 10
                    }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={empacar}>
                    <Image source={require('../../../assets/empacaressostenible.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 190,
                        borderRadius: 10,
                        backgroundColor: "white"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={edi3600}>
                    <Image source={require('../../../assets/logo3600.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 150,
                        borderRadius: 10,
                        backgroundColor: "white"
                    }} />
                </TouchableOpacity>



            </View>
        </ScrollView>
    );
};
