// Importa la función createNativeStackNavigator desde "@react-navigation/native-stack"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importa los componentes de pantalla HomeScreen y DetailsScreen desde sus respectivas ubicaciones
import { HomeScreen } from "../screen/home/HomeScreen";
import { DetailsScreen } from "../screen/details/DetailsScreen";
import { AgendaFechaDetailsScreen } from "../screen/agenda/fechas/AgendaFechaDetailsScreen";

// Define el tipo de parámetros de la pila de navegación
export type RootStackParams = {
  Home: undefined; // La pantalla Home no toma ningún parámetro
  Details: { participanteId: number }; // La pantalla Details toma un parámetro participanteId de tipo number
  DetailsFecha: { Fecha: string };
};

// Crea una nueva pila de navegación con los parámetros RootStackParams
const MyStack = createNativeStackNavigator<RootStackParams>();

// Define el componente Navigation que contiene la pila de navegación
export const Navigation = () => {
  return (
    // Renderiza la pila de navegación con dos pantallas: Home y Details
    <MyStack.Navigator>
      <MyStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: "#008DDA", // Color de fondo del encabezado
          },
          contentStyle: {
            backgroundColor: "#F0F0F0", // Color de fondo del contenido
          },
          headerTintColor: "#FFFFFF", // Color del texto del encabezado (blanco)
        }}
      />
      {/* Pantalla Home */}
      <MyStack.Screen name="Details" component={DetailsScreen} />
      {/* Pantalla Details */}
      <MyStack.Screen
        name="DetailsFecha"
        component={AgendaFechaDetailsScreen}
      />
      {/* Pantalla Details */}
    </MyStack.Navigator>
  );
};
