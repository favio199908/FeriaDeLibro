import React from "react";
import { Pressable, ScrollView, Image, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useApi } from "../../hooks/useApi";

import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";

import { globalStyles } from "../../../theme/theme";
import { Ionicons } from "../../components/shared/Ionicons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../navegations/Navegations";


export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading } = useApi();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  function handleIconPress(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <ScrollView style={globalStyles.container}>

      <View style={[globalStyles.contentContainer, { marginTop: top }]}>
        <Image source={require('../../../assets/logo.png')} style={globalStyles.icon} />
        <ScrollView style={globalStyles.container}>
          <View style={[globalStyles.gridContainer, { marginTop: top }]}>
            {/* 9 Pressables con iconos */}
            <Pressable onPress={() =>
              navigation.navigate("Colombia")
            } style={globalStyles.iconContainer}>
              <Image source={require('../../../assets/colombiamaschica.png')} style={globalStyles.iconCircle} />
              <Text style={globalStyles.buttonText}>Pais Invitado</Text>
            </Pressable>
            <Pressable onPress={() =>
              navigation.navigate("Municipio")
            } style={globalStyles.iconContainer}>

              <Image source={require('../../../assets/municipio.png')} style={globalStyles.iconCircle} />

              <Text style={globalStyles.buttonText}>Municipio Invitado</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Mapa")} style={globalStyles.iconContainer}>
              <View style={globalStyles.iconCircle}>
                <Ionicons name="location-outline" size={30} color="black" />
              </View>
              <Text style={globalStyles.buttonText}>Mapa Feria De Libro</Text>
            </Pressable>
            <Pressable onPress={() => handleIconPress("map-outline")} style={globalStyles.iconContainer}>
              <View style={globalStyles.iconCircle}>
                <Ionicons name="cash-outline" size={30} color="black" />
              </View>
              <Text style={globalStyles.buttonText}>Patrocinador</Text>
            </Pressable>
            <Pressable onPress={() => handleIconPress("bulb-outline")} style={globalStyles.iconContainer}>
              <View style={globalStyles.iconCircle}>
                <Ionicons name="bulb-outline" size={30} color="black" />
              </View>
              <Text style={globalStyles.buttonText}>Organizan</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Mapa")} style={globalStyles.iconContainer}>
              <View style={globalStyles.iconCircle}>
                <Ionicons name="fast-food-outline" size={30} color="black" />
              </View>
              <Text style={globalStyles.buttonText}>Auspician</Text>
            </Pressable>
            <Pressable onPress={() => handleIconPress("map-outline")} style={globalStyles.iconContainer}>
              <View style={globalStyles.iconCircle}>
                <Ionicons name="star-outline" size={30} color="black" />
              </View>
              <Text style={globalStyles.buttonText}>Invitado De Honor</Text>
            </Pressable>
            <Pressable onPress={() =>
              navigation.navigate("Expositores")} style={globalStyles.iconContainer}>
              <View style={globalStyles.iconCircle}>
                <Ionicons name="people-outline" size={40} color="black" />

              </View>
              <Text style={globalStyles.buttonText}>Expositores</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("PabellonesScreen")

            } style={globalStyles.iconContainer}>
              <View style={globalStyles.iconCircle}>
                <Ionicons name="game-controller-outline" size={30} color="black" />
              </View>
              <Text style={globalStyles.buttonText}>Juego</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("SalonesPorFecha")

            } style={globalStyles.iconContainer}>
              <View style={globalStyles.iconCircle}>
                <Ionicons name="business-outline" size={30} color="black" />

              </View>
              <Text style={globalStyles.buttonText}>Buscar Salones</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Salones")

            } style={globalStyles.iconContainer}>
              <View style={globalStyles.iconCircle}>
                <Ionicons name="business-outline" size={30} color="black" />

              </View>
              <Text style={globalStyles.buttonText}>Salones</Text>
            </Pressable>
          </View>
        </ScrollView>

      </View >
    </ScrollView >
  );
};
