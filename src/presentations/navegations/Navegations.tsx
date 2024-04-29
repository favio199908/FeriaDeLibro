// Importa la función createNativeStackNavigator desde "@react-navigation/native-stack"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importa los componentes de pantalla HomeScreen y DetailsScreen desde sus respectivas ubicaciones
import { HomeScreen } from "../screen/home/HomeScreen";
import { DetailsScreen } from "../screen/details/DetailsScreen";
import { AgendaFechaDetailsScreen } from "../screen/agenda/fechas/AgendaFechaDetailsScreen";
import { globalStyles } from '../../theme/theme';
import { ColombiaScreen } from '../screen/colombia/ColombiaScreen';
import { MunicipioScreen } from "../screen/municipio/MunicipoScreen";
import { MapaScreen } from "../screen/mapa/MapaScreen";
import { AgendaFechaFechasScreen } from "../screen/agenda/AgendaFechasScreen";
import { ExpositorScreen } from "../screen/expositor/ExpositorScreen";

// Define el tipo de parámetros de la pila de navegación
export type RootStackParams = {
  Inicio: undefined;

  Details: { participanteId: number }; // La pantalla Details toma un parámetro participanteId de tipo number
  DetailsFecha: { Fecha: string };
  Colombia: undefined;
  Municipio: undefined;
  Expositores: undefined;
  Mapa: undefined;
};

// Crea una nueva pila de navegación con los parámetros RootStackParams
const MyStack = createNativeStackNavigator<RootStackParams>();

// Define el componente Navigation que contiene la pila de navegación
export const Navigation = () => {
  return (
    // Renderiza la pila de navegación con dos pantallas: Home y Details
    <MyStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#20448C', // Cambia el   color de la barra de navegación aquí
      },
      headerTintColor: '#F2F2F2', // Cambia el color del texto en la barra de navegación aquí
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }} >
      <MyStack.Screen name="Inicio" component={HomeScreen} />
      {/* Pantalla Home */}

      <MyStack.Screen
        name="Details"
        options={{ title: "Detalles de un Participante" }}
        component={DetailsScreen}
      />
      {/* Pantalla Details */}
      <MyStack.Screen
        name="DetailsFecha"
        options={{ title: "Eventos" }}
        component={AgendaFechaDetailsScreen}
      />
      <MyStack.Screen
        name="Colombia"
        options={{ title: "Colombia" }}
        component={ColombiaScreen}
      />
      <MyStack.Screen
        name="Municipio"
        options={{ title: "Municipio Invitado" }}
        component={MunicipioScreen}
      />
      <MyStack.Screen
        name="Mapa"
        options={{ title: "Mapa" }}
        component={MapaScreen}
      />
      <MyStack.Screen
        name="Expositores"
        options={{ title: "Expositores" }}
        component={ExpositorScreen}
      />


      {/* Pantalla Details */}
    </MyStack.Navigator>
  );
};
