import React from 'react';
import { View, Text } from 'react-native';
import { PosterCarusel } from '../../components/participantes/PosterCarrusel';
import { HorizontalCarrusel } from '../../components/participantes/HorizontalCarrusel';
import { APosterCarusel } from '../../components/agendaFechas/APosterCarrusel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useApi } from '../../hooks/useApi';
import { useAgenda } from '../../hooks/useAgenda';


export const Inicio = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, paricipante } = useApi();
  const { agenda } = useAgenda();
  return (
    <View
      style={{
        position: 'absolute',
        width: 426,
        height: 235,
        right: 3,
        top: 591,
        backgroundColor: 'red', // Aquí puedes cambiar el color de fondo según tu necesidad
      }}
    ><PosterCarusel participantes={paricipante} />
      <HorizontalCarrusel participante={paricipante} nombre="PARTICIPANTES" />
      <APosterCarusel agendas={agenda} /><View
        style={{
          position: 'absolute',
          width: 380,
          height: 29,
          left: 26,
          top: 7,
          backgroundColor: 'green', // Puedes cambiar el color de fondo según necesites
        }}
      ><Text>Titulo</Text></View><View
        style={{
          position: 'absolute',
          width: 384,
          height: 176,
          left: 25,
          top: 52,
          backgroundColor: 'blue', // Puedes cambiar el color de fondo según necesites
        }}
      ><View
          style={{
            position: 'absolute',
            left: '31.77%',
            right: '58.33%',
            top: '65.34%',
            bottom: '18.18%',
            backgroundColor: 'yellow', // Puedes cambiar el color de fondo según necesites
          }}
        /></View></View>


  );
};


