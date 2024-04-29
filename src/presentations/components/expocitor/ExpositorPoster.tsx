import React from "react";
import { View, StyleSheet } from "react-native";

import { Agendass } from "../../../core/entities/agenda.entity";
import { Expositor } from "../../../core/entities/expositor.entity";
import { ExpositorDPoster } from "./ExpositorDPoster";

interface Props {
    agendas: Expositor[]; // Lista de agendas
}

export const ExpositorPoster = ({ agendas }: Props) => {
    // Función para dividir la lista de agendas en filas de tres
    const splitAgendasIntoRows = (agendas: Expositor[]) => {
        const rows = [];
        for (let i = 0; i < agendas.length; i += 3) {
            rows.push(agendas.slice(i, i + 3));
        }
        return rows;
    };

    // Divide las agendas en filas
    const rows = splitAgendasIntoRows(agendas);

    return (
        <View style={styles.container}>
            {/* Mapea cada fila y muestra los pósters en una fila */}
            {rows.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {/* Mapea cada agenda en la fila y muestra su póster */}
                    {row.map((agenda) => (
                        <ExpositorDPoster
                            key={agenda.id} // Clave única para cada póster
                            agenda={agenda} // Agenda correspondiente al póster
                        />
                    ))}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
});
