// Importa las funciones necesarias desde "@react-navigation/material-bottom-tabs"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Importa los componentes necesarios desde react-native
import { Ionicons } from "../components/shared/Ionicons";
import { Navigation } from "./Navegations";
import { AgendaFechaFechasScreen } from "../screen/agenda/AgendaFechasScreen";
import { SearchScreen } from "../screen/search/SearchScreen";
import { PabellonesScreen } from "../screen/pabellones/PabellonesScreen";
import { NavegacionPabellones } from "./NavegacionPabellones";



const Tab = createMaterialBottomTabNavigator();

// Define el componente MaterialBottomNavigator que contiene la navegación mediante pestañas
export const MaterialBottomNavigator = () => {
  return (
    <Tab.Navigator // Aquí puedes definir opciones de estilo para la barra de pestañas
      // Por ejemplo, puedes cambiar el color de fondo de la barra de pestañas
      barStyle={{ backgroundColor: "#20448C" }}
      activeColor="#F2A71B"
      inactiveColor="#F2F2F2"

    >
      <Tab.Screen
        name="Home"
        options={{
          title: "INICIO",

          tabBarIcon: ({ color }) => <Ionicons name="home-outline" color="#1261A6" />,
        }}
        component={Navigation}
      />
      <Tab.Screen
        name="Events"
        options={{
          title: "EVENTOS",
          tabBarIcon: ({ color }) => <Ionicons name="calendar-outline" color="#1261A6" />,
        }}
        component={AgendaFechaFechasScreen} // Cambiado a AgendaFechaDetailsScreen
      />
      <Tab.Screen
        name="Pabellones"
        options={{
          title: "PABELLONES",
          tabBarIcon: ({ color }) => <Ionicons name="walk-outline" color="#1261A6" />,
        }}
        component={NavegacionPabellones} // Cambiado a AgendaFechaDetailsScreen
      />

      <Tab.Screen
        name="Search"
        options={{
          title: "BUSCAR",
          tabBarIcon: ({ color }) => <Ionicons name="search-outline" color="#1261A6" />,
        }}
        component={SearchScreen}
      />

    </Tab.Navigator>
  );
};
