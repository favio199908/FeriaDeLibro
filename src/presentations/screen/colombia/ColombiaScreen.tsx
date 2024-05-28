import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Image } from "react-native";
import { APosterCarusel } from "../../components/agendaFechas/APosterCarrusel";
import { useAgenda } from "../../hooks/useAgenda";
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";
import { useApi } from "../../hooks/useApi";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HorizontalCarrusel } from "../../components/agendaFechas/HorizontalCarrusel";
import { globalStyles } from "../../../theme/theme";

export const ColombiaScreen = () => {
    const { top } = useSafeAreaInsets();
    const { agenda } = useAgenda();

    // Define el componente DetailsScreen
    const { isLoading, paricipante } = useApi();

    if (isLoading) {
        return <FullScreenLoader />;
    }

    // Renderiza la pantalla de detalles del participante
    return (
        <ScrollView style={globalStyles.container}>
            <View style={[globalStyles.contentContainer, { marginBottom: "auto" }, { marginTop: "auto" }, { marginLeft: "auto" }, { marginRight: "auto" }]}>
                <Image source={require('../../../assets/colombia.png')} style={{
                    marginTop: 20,
                    width: 330,
                    height: 80,
                    borderRadius: 10,
                    backgroundColor: "white"
                }} />
                <Text style={{ fontSize: 31, marginTop: 10, fontWeight: "bold", color: "#F2A71B" }}>
                    PAÍS INVITADO DE HONOR - COLOMBIA
                </Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                {/* Texto que muestra los salones del participante */}

                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>Colombia es un país ubicado en el extremo noroccidental de América del Sur, conectando el subcontinente con América Central. Es una República conformada por 32 departamentos, 1123 municipios y 5 distritos, que incluyen tanto los territorios continentales como las islas que se encuentran en el Mar Caribe y en el Océano Pacífico. Su capital es la ciudad de Bogotá y su población se estima en más de 48 millones de personas, según el Censo Nacional de Población y Vivienda de 2018.</Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>Nuestro país cuenta con 5 regiones naturales: Andina, Caribe, Pacífico, Orinoquía y Amazonía, que reflejan su gran variedad de ecosistemas y recursos. En ellas viven pueblos mestizos, indígenas, afrodescendientes, raizales y palenqueros, teniendo como lengua oficial el español y, además, 68 lenguas nativas habladas por más de 850.000 personas. Siendo uno de los países más megadiversos del mundo, nuestra ave nacional es el cóndor andino, nuestra flor nacional es la orquídea y nuestro árbol nacional es la palma de cera.</Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>Tras los periodos precolombino y colonial, el país declaró su independencia el 20 de julio de 1810 e inició su campaña libertadora hasta la batalla de Boyacá el 7 de agosto de 1819, fecha que marcó el fin del dominio español en el territorio. Desde entonces, Colombia ha tenido 8 constituciones y diversas formas de gobierno, que incluyen nuestra actual Constitución de 1991, en la cual se establece un estado social de derecho, democrático y multicultural, con un mandato por la búsqueda de la paz, la protección de la naturaleza y la integración latinoamericana y caribeña.</Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>Hoy en día, Colombia cuenta con un gran potencial económico en las exportaciones de café, flores, manufacturas con valor agregado, industrias culturales y tecnologías digitales, así como en los sectores del turismo y los servicios, además de sus exportaciones tradicionales de hidrocarburos. También se destaca por promover a nivel internacional el desarrollo sostenible, la protección de la Amazonía, la defensa de los derechos humanos y la construcción de paz en la región y en el mundo.</Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, marginTop: 10, fontWeight: "bold", color: "#F2A71B" }}>
                    Colombia, literatura para el mundo
                </Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>La versión 25 del Feria Internacional del Libro en Santa Cruz de la Sierra, es una oportunidad para leer a Colombia en 215 años de vida Republicana y llegan para compartir lo mejor de sus expresiones culturales en torno al medio ambiente, la amazonia y el mundo afrodescendiente e indígena como parte de las apuestas del gobierno por fomentar la inclusión y concientizar sobre la crisis climática.</Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>La lectura, piedra angular en la adquisición de conocimiento, nos permite entender el mundo y todo lo que nos rodea. También, con ella podemos viajar a cualquier lugar sin desplazarnos, dando alas a nuestra imaginación e inspiración. Es una habilidad transferida, que marca e influencia nuestra forma de ser y, por lo tanto, nuestras vidas. </Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>Todo lo que nos rodea es lectura. Leer es comunicación, nos mantiene vivos, nos hace libres. </Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}></Text>
                <Text style={{ fontSize: 16, color: "#F2F2F2" }}>Colombia ha participado en los últimos 10 años como país invitado, en las Ferias Internacionales del Libro de Quito (2013), Oaxaca-México (2014), Río de Janeiro (2015), Perú (2016), Panamá (2017), Estambul (2018), Madrid (2021), Barcelona (2022), Cuba y Frankfurt (2023). </Text>
            </View>
        </ScrollView>
    );
};
