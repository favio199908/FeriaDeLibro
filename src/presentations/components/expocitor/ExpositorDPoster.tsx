import React from "react";
import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navegations/Navegations";
import { Agendass } from "../../../core/entities/agenda.entity";
import { Expositor } from "../../../core/entities/expositor.entity";

interface Props {
    agenda: Expositor;
    height?: number;
    width?: number;
}

export const ExpositorDPoster = ({
    agenda,
    height = 150,
    width = 100,
}: Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <Pressable

            style={({ pressed }) => ({
                width,
                height,
                marginHorizontal: 5,
                paddingBottom: 1,
                paddingHorizontal: 5,
                opacity: pressed ? 0.9 : 1,
            })}
        >
            <View style={styles.imagecontainer}>
                <View style={styles.textContainertop}>
                    <Text style={styles.dateText}>{agenda.nombre}</Text>
                </View>
                <View style={styles.imageContainers}>
                    <Image
                        style={styles.images}
                        source={{
                            uri: agenda.foto
                                ? agenda.foto
                                : "http://feria.programatupotencial.com/Logotipos/user.png",
                        }}
                    />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.dateText}>Pabellon</Text>
                    <Text style={styles.monthText}>{agenda.pabellon}</Text>
                    <Text style={styles.dateText}>Local</Text>
                    <Text style={styles.fullDateText}>{agenda.local}</Text>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    imageContainers: {
        marginRight: 10,
    },
    images: {

        alignItems: "center",
        justifyContent: "center",
        width: 90,
        height: 90,
        borderRadius: 40,
        backgroundColor: "lightgray", // Puedes cambiar el color del círculo aquí
        marginBottom: 10,
    },
    image: {
        color: "white",
        fontSize: 78, // Tamaño grande para resaltar el mes
        fontWeight: "bold", // Negrita para mayor énfasis
        textAlign: "center", // Centra el texto horizontalmente
        marginBottom: 5, // Espacio entre el mes y la fecha
    },
    imagecontainer: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        backgroundColor: "#41C9E2", // Cambia el color de fondo de la imagen
    },
    textContainertop: {
        position: "relative",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 141, 218, 0.7)", // Cambia el color de fondo del texto
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
    },
    textContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 141, 218, 0.7)", // Cambia el color de fondo del texto
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomEndRadius: 18,
        borderBottomStartRadius: 18,
    },
    monthText: {
        color: "white",
        fontSize: 5, // Tamaño grande para resaltar el mes
        fontWeight: "bold", // Negrita para mayor énfasis
        textAlign: "center", // Centra el texto horizontalmente
        marginBottom: 5, // Espacio entre el mes y la fecha
    },
    dateText: {
        color: "white",
        fontSize: 5,
        textAlign: "center", // Centra el texto horizontalmente
    },
    fullDateText: {
        color: "white",
        fontSize: 5,
        textAlign: "center", // Centra el texto horizontalmente
    },
});
