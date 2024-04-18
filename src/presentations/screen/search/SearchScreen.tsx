import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalStyles } from "../../../theme/theme";
import { FlatList } from "react-native";

import { useApi } from "../../hooks/useApi";
import { BuscarPosterParticipante } from "./BuscarPosterParticipante";

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState("");
  const { isLoading, paricipante } = useApi();

  const filteredParticipants = paricipante.filter((item) =>
    item.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={globalStyles.container}>
      <View
        style={[
          globalStyles.globalmargin,
          { paddingTop: top + 10 },
          { paddingBottom: top + 20 },
        ]}
      >
        <TextInput
          placeholder="Buscar Participante"
          mode="flat"
          autoFocus
          autoCorrect={false}
          onChangeText={(value) => setSearchQuery(value)}
          value={searchQuery}
        />
        {filteredParticipants.length === 0 && (
          <Text>No se encontraron resultados</Text>
        )}

        <FlatList
          style={globalStyles.contentContainer}
          data={filteredParticipants}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <BuscarPosterParticipante participantes={[item]} />
          )}
        />
      </View>
    </View>
  );
};
