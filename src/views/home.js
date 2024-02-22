import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, FlatList, Image, View } from 'react-native';
import { style_01 } from '../styles/style_01';
import { atraparPrimero, atraparSegundo, atraparTercero, atraparCuatro, atraparCinco } from '../components/atraparPrimero';

const Home = ({ navigation }) => {
  const [pokemons, actualizarPokemons] = useState([]);
  const [generacion, establecerGeneracion] = useState('First');

  useEffect(() => {
    cargarPokemons(generacion);
  }, [generacion]);

  const cargarPokemons = async (gen) => {
    let resultado = [];
    switch (gen) {
      case 'First': resultado = await atraparPrimero(); break;
      case 'Second': resultado = await atraparSegundo(); break;
      case 'Third': resultado = await atraparTercero(); break;
      case 'Fourth': resultado = await atraparCuatro(); break;
      case 'Fifth': resultado = await atraparCinco(); break;
      default: resultado = []; break;
    }
    actualizarPokemons(resultado);
  };

  const ElementoPokemon = ({ item }) => (
    <TouchableOpacity
      style={style_01.itemContainer}
      onPress={() => navigation.navigate('DetallesPokemon', { pokemon: item })}
    >
      <Image
        source={{ uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png` }}
        style={style_01.pokemonImagenes}
      />
      <Text style={style_01.pokemonName}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={style_01.container}>
      <View style={style_01.header}>
        <Image 
          source={require('../img/logo.png')}
          style={style_01.logo}
        />
		<Image style ={style_01.animales} source={require('../img/pocke.jpg')} />
      </View>
	  <View style={style_01.navBar}>
        {['First', 'Second', 'Third', 'Fourth', 'Fifth'].map((gen) => (
          <TouchableOpacity key={gen} onPress={() => establecerGeneracion(gen)}>
            <Text style={style_01.letrasBarras}>{`${gen} Gen`}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={pokemons}
        renderItem={ElementoPokemon}
        keyExtractor={(item) => item.name}
      />
      
    </SafeAreaView>
  );
};

export default Home;
