// Importa la función createNativeStackNavigator desde "@react-navigation/native-stack"
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import TodoPabellones from "../screen/todoLosPabellones/TodoPabellones";


// Define el tipo de parámetros de la pila de navegación
export type RootStackParams = {
    Lista: undefined;

};

// Crea una nueva pila de navegación con los parámetros RootStackParams
const MyStack = createNativeStackNavigator<RootStackParams>();

// Define el componente Navigation que contiene la pila de navegación
export const NavegacionPabellones = () => {
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

            <MyStack.Screen name="Lista" options={{ title: "Lista De Pabellones" }} component={TodoPabellones} />
            {/* Pantalla Home */}



            {/* Pantalla Details */}
        </MyStack.Navigator>
    );
};
