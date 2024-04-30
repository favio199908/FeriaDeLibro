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

import { ExpositorScreen } from "../screen/expositor/ExpositorScreen";

import CameraScreen from "../screen/juego/CameraScreen";

import PabellonesScreens from "../screen/juego/PabellonesScreen";
import { SalonesScreen } from "../screen/salones/SalonesScreen";
import SalonComponent from "../screen/todosLosSalones/TodoSalones";
import TodoPabellones from "../screen/todoLosPabellones/TodoPabellones";


// Define el tipo de parámetros de la pila de navegación
export type RootStackParams = {
  Inicio: undefined;

  Details: { participanteId: number }; // La pantalla Details toma un parámetro participanteId de tipo number
  DetailsFecha: { Fecha: string };
  Colombia: undefined;
  Municipio: undefined;
  Expositores: undefined;
  Mapa: undefined;
  PabellonesScreen: undefined;
  Camera: undefined;
  SalonesPorFecha: undefined;
  Salones: undefined;
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
      <MyStack.Screen
        name="PabellonesScreen"
        options={{ title: "Pabellones" }}
        component={PabellonesScreens}
      />
      <MyStack.Screen
        name="Camera"
        options={{ title: "camara" }}
        component={CameraScreen}
      />
      <MyStack.Screen
        name="SalonesPorFecha"
        options={{ title: "Buscar Salones" }}
        component={SalonesScreen}
      />
      <MyStack.Screen
        name="Salones"
        options={{ title: "Salones" }}
        component={SalonComponent}
      />




      {/* Pantalla Details */}
    </MyStack.Navigator>
  );
};
