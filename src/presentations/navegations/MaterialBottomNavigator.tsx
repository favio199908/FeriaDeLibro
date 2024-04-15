// Importa las funciones necesarias desde "@react-navigation/material-bottom-tabs"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Importa los componentes necesarios desde react-native
import { Ionicons } from "../components/shared/Ionicons";
import { Navigation } from "./Navegations";
import { AgendaFechaDetailsScreen } from "../screen/agenda/fechas/AgendaFechaDetailsScreen";
import { AgendaFechaFechasScreen } from "../screen/agenda/AgendaFechasScreen";

const Tab = createMaterialBottomTabNavigator();

// Define el componente MaterialBottomNavigator que contiene la navegación mediante pestañas
export const MaterialBottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Casa"
        options={{
          title: "HOME",
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" />,
        }}
        component={Navigation}
      />
      <Tab.Screen
        name="Events"
        options={{
          title: "EVENTS",
          tabBarIcon: ({ color }) => <Ionicons name="calendar-outline" />,
        }}
        component={AgendaFechaFechasScreen} // Cambiado a AgendaFechaDetailsScreen
      />
      <Tab.Screen
        name="Books"
        options={{
          title: "BOOKS",
          tabBarIcon: ({ color }) => <Ionicons name="library-outline" />,
        }}
        component={AgendaFechaDetailsScreen} // Cambiado a AgendaFechaDetailsScreen
      />

      <Tab.Screen
        name="Settings"
        options={{
          title: "SETTINGS",
          tabBarIcon: ({ color }) => <Ionicons name="settings-outline" />,
        }}
        component={AgendaFechaDetailsScreen} // Cambiado a AgendaFechaDetailsScreen
      />
    </Tab.Navigator>
  );
};
