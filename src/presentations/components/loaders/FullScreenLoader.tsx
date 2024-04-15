// Importa los componentes ActivityIndicator y View de react-native
import { ActivityIndicator, View } from "react-native";

// Define un componente funcional llamado FullScreenLoader que muestra un indicador de carga a pantalla completa
export const FullScreenLoader = () => {
  return (
    // Retorna un componente View que ocupa toda la pantalla y alinea su contenido al centro
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      {/* Muestra un indicador de carga grande con color indigo */}
      <ActivityIndicator size="large" color={"indigo"} />
    </View>
  );
};
