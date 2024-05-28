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
    const elaljibe = () => {
        Linking.openURL('https://www.elaljibecomidatipica.com/');
    };
    const bodegasyviñedos = () => {
        Linking.openURL('https://www.facebook.com/people/Bodegas-y-vi%C3%B1edos-Cornico/100091619212498/');
    };
    const pizzasartesanales = () => {
        Linking.openURL('https://www.facebook.com/d15.bo');
    };
    const gobiernosantacruz = () => {
        Linking.openURL('https://www.santacruz.gob.bo/');
    };
    const larinconada = () => {
        Linking.openURL('https://larinconada.com.bo/');
    };
    const eldeber = () => {
        Linking.openURL('https://eldeber.com.bo/');
    };
    const guembe = () => {
        Linking.openURL('https://biocentroguembe.com/');
    };
    const sito = () => {
        Linking.openURL('https://www.facebook.com/STILOIndustriaPublicitaria/');
    };
    const donmiguelres = () => {
        Linking.openURL('https://www.facebook.com/Restaurant.DonMiguel.Bo/');
    };
    const chocolike = () => {
        Linking.openURL('https://www.facebook.com/ChocoLikeBo/');
    };
    const centrobenjamin = () => {
        Linking.openURL('https://www.facebook.com/CentroCulturalBenjamin/');
    };
    const fundacionpatiño = () => {
        Linking.openURL('https://patino.org/');
    };
    const saguapac = () => {
        Linking.openURL('https://www.saguapac.com.bo/');
    };
    const cre = () => {
        Linking.openURL('https://www.cre.com.bo/');
    };
    const diakonia = () => {
        Linking.openURL('http://www.diakonia.edu.bo/');
    };
    const upds = () => {
        Linking.openURL('https://portal.upds.edu.bo/index/');
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
                <TouchableOpacity onPress={elaljibe}>
                    <Image source={require('../../../assets/elaljibe.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 150,
                        borderRadius: 10,
                        backgroundColor: "white"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={bodegasyviñedos}>
                    <Image source={require('../../../assets/bodegasyviñedos.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 150,
                        borderRadius: 10,
                        backgroundColor: "white"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={pizzasartesanales}>
                    <Image source={require('../../../assets/pizzasartesanales.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 250,
                        borderRadius: 10,
                        backgroundColor: "white"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={gobiernosantacruz}>
                    <Image source={require('../../../assets/gobiernosantacruz.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 150,
                        borderRadius: 10,
                        backgroundColor: "white"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={larinconada}>
                    <Image source={require('../../../assets/larinconada.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 150,
                        borderRadius: 10,
                        backgroundColor: "white"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={eldeber}>
                    <Image source={require('../../../assets/eldeber.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 150,
                        borderRadius: 10,
                        backgroundColor: "white"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={guembe}>
                    <Image source={require('../../../assets/guembe.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 150,
                        borderRadius: 10,
                        backgroundColor: "white"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={sito}>
                    <Image source={require('../../../assets/sito.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 350,
                        borderRadius: 10,
                        backgroundColor: "white"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={donmiguelres}>
                    <Image source={require('../../../assets/donmiguelres.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 150,
                        borderRadius: 10,
                        backgroundColor: "white"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={chocolike}>
                    <Image source={require('../../../assets/chocolike.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 150,
                        borderRadius: 10,
                        backgroundColor: "white"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={centrobenjamin}>
                    <Image source={require('../../../assets/centrobenjamin.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 150,
                        borderRadius: 10,
                        backgroundColor: "white"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={fundacionpatiño}>
                    <Image source={require('../../../assets/fundacionpatiño.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 150,
                        borderRadius: 10,
                        backgroundColor: "white"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={saguapac}>
                    <Image source={require('../../../assets/saguapac.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 150,
                        borderRadius: 10,
                        backgroundColor: "white"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={cre}>
                    <Image source={require('../../../assets/cre.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 150,
                        borderRadius: 10,
                        backgroundColor: "white"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={diakonia}>
                    <Image source={require('../../../assets/diakonia.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 200,
                        borderRadius: 10,
                        backgroundColor: "white"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={upds}>
                    <Image source={require('../../../assets/upds.png')} style={{
                        marginTop: 20,
                        width: 330,
                        height: 200,
                        borderRadius: 10,
                        backgroundColor: "white"
                    }} />
                </TouchableOpacity>


            </View>
        </ScrollView>
    );
};
