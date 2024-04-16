import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { TextInput, Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalStyles } from "../../../theme/theme";
import { FlatList } from "react-native";

import { Participante } from "../../../core/entities/participante.entity";
import { ParticipanteF } from "../../components/participantes/ParticipantesF";

interface Props {
  partic: Participante[];
}

export const SearchScreen = ({ partic }: Props) => {
  const { top } = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Participante[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchSearchResults = async (query: string) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://feria.programatupotencial.com/api/participante/busqueda/${encodeURIComponent(
          query
        )}`
      );
      const data = await response.json();
      setSearchResults(data); // Assuming data is an array of Participante items
      setLoading(false);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      fetchSearchResults(searchQuery);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <View style={[globalStyles.globalmargin, { paddingTop: top }]}>
      <TextInput
        placeholder="Buscar Participante"
        mode="flat"
        autoFocus
        autoCorrect={false}
        onChangeText={(value) => setSearchQuery(value)}
        value={searchQuery}
      />
      {loading && <ActivityIndicator style={{ paddingTop: 0 }} />}
      {!loading && searchResults.length === 0 && (
        <Text>No se encontraron resultados</Text>
      )}
      <FlatList
        data={searchResults.length > 0 ? searchResults : partic}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ParticipanteF parti={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
