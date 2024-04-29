// Importa StackScreenProps desde "@react-navigation/stack" para tipar las propiedades de la pantalla
import { StackScreenProps } from "@react-navigation/stack";

// Importa el componente FullScreenLoader desde su ubicación
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";

// Importa RootStackParams desde el archivo de navegación para tipar los parámetros de la pantalla
import { RootStackParams } from "../../navegations/Navegations";

// Importa el custom hook useAp desde su ubicación
import { useAp } from "../../hooks/useAp";

// Importa ScrollView desde "react-native" para permitir el desplazamiento vertical
import { ScrollView, View } from "react-native";

// Importa ParticipanteDetails y ParticipanteHeader desde sus respectivas ubicaciones
import { ParticipanteDetails } from "../../components/participante/ParticipanteDetails";
import { ParticipanteHeader } from "../../components/participante/ParticipanteHeader";
import { globalStyles } from '../../../theme/theme';

// Define la interfaz Props que extiende StackScreenProps con los parámetros de la pantalla Details
interface Props extends StackScreenProps<RootStackParams, "Details"> { }

// Define el componente DetailsScreen
export const DetailsScreen = ({ route }: Props) => {
  // Extrae el participanteId de los parámetros de la ruta
  const { participanteId } = route.params;

  // Utiliza el custom hook useAp para obtener la información del participante
  const { isLoading, participante } = useAp(participanteId);

  // Renderiza un componente de carga si isLoading es true
  if (isLoading) {
    return <FullScreenLoader />;
  }

  // Renderiza la pantalla de detalles del participante
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        {/* Renderiza el encabezado del participante */}
        <ParticipanteHeader
          foto={participante!.foto}
          nombre={participante!.nombre}
          profesion={participante!.profesion}

        />
        {/* Renderiza los detalles del participante */}
        <ParticipanteDetails participante={participante!} />
      </View>
    </ScrollView>
  );
};
