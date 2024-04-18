// Importa las funciones necesarias desde "@react-navigation/material-bottom-tabs"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Importa los componentes necesarios desde react-native
import { Ionicons } from "../components/shared/Ionicons";
import { Navigation } from "./Navegations";
import { AgendaFechaDetailsScreen } from "../screen/agenda/fechas/AgendaFechaDetailsScreen";
import { AgendaFechaFechasScreen } from "../screen/agenda/AgendaFechasScreen";
import { SearchScreen } from "../screen/search/SearchScreen";
import { PabellonesScreen } from "../screen/pabellones/PabellonesScreen";

const Tab = createMaterialBottomTabNavigator();

// Define el componente MaterialBottomNavigator que contiene la navegación mediante pestañas
export const MaterialBottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          title: "INICIO",
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" />,
        }}
        component={Navigation}
      />
      <Tab.Screen
        name="Events"
        options={{
          title: "EVENTOS",
          tabBarIcon: ({ color }) => <Ionicons name="calendar-outline" />,
        }}
        component={AgendaFechaFechasScreen} // Cambiado a AgendaFechaDetailsScreen
      />
      <Tab.Screen
        name="Pabellones"
        options={{
          title: "PABELLONES",
          tabBarIcon: ({ color }) => <Ionicons name="walk-outline" />,
        }}
        component={PabellonesScreen} // Cambiado a AgendaFechaDetailsScreen
      />

      <Tab.Screen
        name="Search"
        options={{
          title: "SEARCH",
          tabBarIcon: ({ color }) => <Ionicons name="search-outline" />,
        }}
        component={SearchScreen}
      />
    </Tab.Navigator>
  );
};
