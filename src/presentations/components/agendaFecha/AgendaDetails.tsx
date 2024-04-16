import { FlatList, Text, View } from "react-native";

import React from "react";

import { AgendaF } from "../agenda/AgendaF";
import { Fecha } from "../../../core/entities/agenda.entity";

interface Props {
  agen: Fecha[];
}

export const AgendaDetails = ({ agen }: Props) => {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <FlatList
          data={agen}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <AgendaF agen={item} />}
        />
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
