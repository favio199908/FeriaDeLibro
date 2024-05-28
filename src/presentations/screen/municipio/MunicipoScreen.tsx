import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity, Linking } from "react-native";
import { APosterCarusel } from "../../components/agendaFechas/APosterCarrusel";
import { useAgenda } from "../../hooks/useAgenda";
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";
import { useApi } from "../../hooks/useApi";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HorizontalCarrusel } from "../../components/agendaFechas/HorizontalCarrusel";
import { globalStyles } from "../../../theme/theme";

export const MunicipioScreen = () => {
    const { top } = useSafeAreaInsets();
    const { agenda } = useAgenda();

    // Define el componente DetailsScreen
    const { isLoading, paricipante } = useApi();

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
                <Image source={require('../../../assets/logoG.png')} style={{
                    marginTop: 20,
                    width: 330,
                    height: 152,
                    borderRadius: 10,
                    backgroundColor: "white"
                }} />
                <Text style={{ fontSize: 31, marginTop: 10, fontWeight: "bold", color: "#F2A71B" }}>
                    Municipio invitado - San Ignacio de Velasco
                </Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>San Ignacio de Velasco, capital de la provincia José Miguel de Velasco en el departamento de Santa Cruz es una Misión Jesuítica Chiquitana fundada por los padres Diego Contreras y Miguel Areiger el 31 de julio de 1748. Se encuentra a 476 kilómetros al sureste de la ciudad de Santa Cruz de la Sierra, en una colina junto a las nacientes del río Paraguá.</Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>Los sacerdotes de aquella época, utilizando mano de obra indígena, construyeron una monumental iglesia concluida en 1760. Es el municipio más grande y con mayor población de la Ruta Misional y de Chiquitos, al que se llega pasando por San Javier y Concepción.</Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>En la actualidad, es el municipio más poblado del departamento y el más activo comercialmente por su cercanía a la frontera brasilera. Las costumbres indígenas se mantienen vivas en las comunidades cercanas, y se revaloriza el pasado misional con la reconstrucción de la Catedral y Conjunto Misional.</Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>San Ignacio de Velasco, es la principal puerta de entrada al Parque Nacional Noel Kempff Mercado, declarado Patrimonio Natural de la Humanidad por la UNESCO.</Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>San Ana de Velasco, es una de sus comunidades, fue una de las últimas misiones en la Chiquitania, fundada en 1755 por el misionero jesuita Julián Nogler, 12 años antes de la expulsión de los jesuitas. </Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>En ese entonces, la construcción de la iglesia apenas habría comenzado, siendo terminada luego por las poblaciones indígenas. La iglesia es de aire campestre y de dimensiones reducidas con relación a las demás. Se encuentra rodeada de casas sencillas, dentro del contexto de un pequeño pueblo donde, como en la época de los jesuitas, la responsabilidad de cuidar las iglesias constituye un honor que es transmitido de padres a hijos.</Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>Es una localidad que todavía conserva una parte importante de la antigua estructura del pueblo misional. Existen hileras de casas indígenas, con paredes de tabique, techos de paja y corredores a los lados.</Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>La fiesta de Semana Santa es la más importante para los habitantes del pueblo, en la que es posible ver procesiones religiosas rodeadas de flores, plantas y arcos de palma.</Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <TouchableOpacity onPress={casanacional}>
                    <Image source={require('../../../assets/iglesiasanignaciodevelasco.jpg')} style={{
                        width: 330,
                        height: 200,
                        borderRadius: 10
                    }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
            </View>
        </ScrollView>
    );
};
