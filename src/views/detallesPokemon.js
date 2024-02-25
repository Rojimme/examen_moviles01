import React, { Fragment, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, FlatList } from 'react-native';


//Parte de datos donde tengo el estilo detallado de la informacion, NO CREE EL STYLES

const EstiloDetallado = StyleSheet.create({
  contenedorPrincipal: { flex: 1, padding: 20 },
  imagen: { width: 200, height: 200, alignSelf: 'center' },
  textoTitulo: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 8 },
  caracteristicasTexto: { fontSize: 16, marginTop: 5 },
  listaContenedor: { marginTop: 10 },
  listaItem: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderColor: '#cccccc' },
  listaTitulo: { fontWeight: 'bold' },
});

//CARGAR LA FUNCION 

function PantallaDetallePokemon({ route }) {
  const [detallePokemon, setDetallePokemon] = useState({});
  const [cargando, setCargando] = useState(true);
  const { pokemonName } = route.params;

  //Forma de llamar el api que el profesor nos dio 
  useEffect(() => {
    async function cargarDatosPokemon() {
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      const datos = await respuesta.json();
      setDetallePokemon(datos);
      setCargando(false);
    }
    cargarDatosPokemon();
  }, [pokemonName]);
      
  if (cargando) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }
// ESTA ES LA INFORMACION QUE VOY A MOSTRAR DEL POKEMN 
  const caracteristicasPokemon = [
    { titulo: 'ID', valor: detallePokemon.id?.toString() },
    { titulo: 'Altura', valor: detallePokemon.height },
    { titulo: 'Peso', valor: detallePokemon.weight },
    { titulo: 'Tipo', valor: detallePokemon.types?.map((t) => t.type.name).join(', ') },
  ];

  return (
    <View style={EstiloDetallado.contenedorPrincipal}>
      <Text style={EstiloDetallado.textoTitulo}>{detallePokemon.name?.toUpperCase()}</Text>
      <Image
        style={EstiloDetallado.imagen}
        source={{ uri: detallePokemon.sprites?.front_default }}
      />
      <FlatList
        data={caracteristicasPokemon}
        keyExtractor={(item) => item.titulo}
        renderItem={({ item }) => (
          <View style={EstiloDetallado.listaContenedor}>
            <Text style={EstiloDetallado.caracteristicasTexto}>{item.titulo}: {item.valor}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default PantallaDetallePokemon;