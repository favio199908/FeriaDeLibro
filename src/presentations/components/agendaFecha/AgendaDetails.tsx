import { Text, View } from "react-native";

import React from "react";

import { Agenda } from "../../../infrastructure/interfaces/api-db.responses";

interface Props {
  agenda: Agenda;
}

export const AgendaDetails = ({ agenda }: Props) => {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold" }}>
          Biografia
        </Text>

        <Text style={{ fontSize: 16 }}>{agenda.expositor}</Text>
      </View>

      <View style={{ marginTop: 10, marginBottom: 50 }}>
        <Text
          style={{
            fontSize: 23,
            marginVertical: 10,
            fontWeight: "bold",
            marginHorizontal: 20,
          }}
        ></Text>
      </View>
    </>
  );
};
