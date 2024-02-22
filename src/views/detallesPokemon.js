import React from 'react';
import { SafeAreaView, View, Image, Text } from 'react-native';
import { style_02 } from '../styles/style_02';


const detallesPokemon = ({ navigation }) => {
 
  return (
    <SafeAreaView style={style_02}>
      <View style={style_02}>
        <Image 
          source={require('../img/logo.png')}
          style={style_02}
        />
        <Text style={style_02}>Pokémon Information</Text>
      </View>
    </SafeAreaView>
  );
};
export default detallesPokemon;