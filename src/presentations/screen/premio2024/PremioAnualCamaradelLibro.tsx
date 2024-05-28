import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, Linking, Image } from "react-native";

import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";
import { useApi } from "../../hooks/useApi";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { globalStyles } from "../../../theme/theme";

import { useExpositor } from "../../hooks/useExpositor";

export const PremioAnualCamaradelLibro = () => {
    const { top } = useSafeAreaInsets();
    const { expositor } = useExpositor();

    // Define el componente DetailsScreen
    const { isLoading } = useApi();

    if (isLoading) {
        return <FullScreenLoader />;
    }
    const casanacional = () => {
        Linking.openURL('https://www.bing.com/maps?q=San+Ignacio+de+Velasco&satid=id.sid%3A4287b699-8f96-2740-c634-71c37f121ea2&FORM=KC2MAP&cp=-13.860467%7E-59.776359&lvl=5.5');
    };

    // Renderiza la pantalla de detalles del participante
    return (
        <ScrollView style={globalStyles.container}>
            <View style={[globalStyles.contentContainer, { marginBottom: "auto" }, { marginTop: "auto" }, { marginLeft: "auto" }, { marginRight: "auto" }]}>
                <TouchableOpacity onPress={casanacional}>
                    <Image source={require('../../../assets/mariasarahmansilla.jpg')} style={{
                        width: 330,
                        height: 200,
                        borderRadius: 10
                    }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 31, marginTop: 10, fontWeight: "bold", color: "#F2A71B" }}>
                    María Sarah Mansilla</Text>

                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>María Sarah Mansilla de Gutiérrez nació el 4 de agosto de 1950, en Santa Cruz, Bolivia. Está casada con Eduardo Gutiérrez Sosa y tiene 4 hijos y 6 nietos. Es una reconocida y premiada escritora de la saga Benjamín, nominada como un Best Seller en Bolivia. Obsequió su Derecho de Autora de la saga Benjamín a APRECIA, institución para no videntes.</Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>Es una incansable promotora de la lectura. Su destreza al momento de escribir y su entrega a las diferentes actividades literarias y culturales, la han convertido en una de las mujeres más influyentes de Bolivia. Ha escrito el himno del colegio Santa Cruz Cooperative School. Ha recibido varios reconocimientos por sus aptitudes literarias. Es directora del Centro Cultural Benjamín de Promoción del Libro, la Lectura y las Letras. </Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>Con su Fondo Editorial ha editado de manera gratuita quince libros de escritores nacionales y extranjeros. En el año 2012 creó el "Benjabus", la primera biblioteca móvil de Bolivia, que ha promovido Ferias del Libro en las quince provincias del departamento de Santa Cruz; y la revista digital e impresa Benjamín, que se distribuye de manera gratuita en los colegios. También es impulsora de varias b ibliotecas, entre ellas la Biblioteca Libertad en el Centro de Rehabilitación Palmasola de Santa Cruz de la Sierra.</Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>Desde 2021 es Secretaria de Cultura y Turismo del Municipio de Santa Cruz de la Sierra, Bolivia.</Text>
            </View>
        </ScrollView>
    );
};
