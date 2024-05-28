import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, Linking, Image } from "react-native";

import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";
import { useApi } from "../../hooks/useApi";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { globalStyles } from "../../../theme/theme";

import { useExpositor } from "../../hooks/useExpositor";

export const InvitadoDeHonorScreen = () => {
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
                    <Image source={require('../../../assets/yolandareyes.jpeg')} style={{
                        width: 330,
                        height: 200,
                        borderRadius: 10
                    }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 31, marginTop: 10, fontWeight: "bold", color: "#F2A71B" }}>
                    YOLANDA REYES VILLAMIZAR</Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>(Bucaramanga, 1959) Escritora colombiana. Inclinada desde muy temprana edad al cultivo de la creación literaria, estudió ciencias de la educación en la Universidad Javeriana de Bogotá y amplió sus estudios en España, en el Instituto de Cooperación Iberoamericana.</Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>En el campo de la pedagogía centró sus esfuerzos en la enseñanza y desarrollo del gusto por la lectura en la primera infancia, tema sobre el que ha impartido conferencias y publicado diversos ensayos, como La casa imaginaria: lectura y literatura en la primera infancia (2007); en esa misma dirección, Yolanda Reyes ha desarrollado importantes labores de promoción y animación cultural en agrupaciones como el colectivo Espantapájaros, del que es fundadora y directora.
                    Especializada desde sus inicios en literatura infantil y juvenil, es una de las más destacadas cultivadoras de este género en el ámbito de las letras hispánicas. Entre sus obras cabe resaltar títulos como El terror de sexto B (1994) y María de los Dinosaurios (1998). Uno de sus libros, Los agujeros negros (2000), fue seleccionado por la editorial española Alfaguara para su colección "Los Derechos del Niño", creada por prestigiosos escritores e ilustradores de distintos países de habla hispana para mostrar a los niños y niñas cuáles son sus principales derechos y cómo lograr un mundo más solidario y más justo.
                </Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>Con posterioridad ha publicado Los años terribles (2000), novela de sarcástico humor sobre la adolescencia, Una cama para tres (2003), El libro que canta (2005) y Pasajera en tránsito (2006), su primera obra dirigida al público adulto. Volvió luego a la literatura infantil con nuevos títulos: Cucú (2010), Ernestina la gallina (2010) y Mi mascota (2011). Colaboradora habitual de diversos periódicos y revistas, actualmente ejerce también como directora de colecciones de literatura infantil para la editorial Alfaguara.

                </Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
            </View>
        </ScrollView>
    );
};
