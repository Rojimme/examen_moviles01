import {StyleSheet} from 'react-native';

		export const style_01 = StyleSheet.create({

//Circulos de cada animal
            itemContainer: {
                flexDirection: 'row',
                alignItems: 'center',
                padding: 20, 
                marginVertical: 5, 
                marginHorizontal: 85, 
                shadowColor: "#000",
                backgroundColor: '#F2CA50',
                borderRadius: 50, 
                borderWidth: 2,  // Esto añade un borde de 2 pixels al elemento
                borderColor: '#6FBF74',
              },
// DE LA BARRA TIPO MENU
              navBar: {
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingVertical: 9, 
                backgroundColor: '#E9E7D0',
                borderWidth: 3,  // Esto añade un borde de 2 pixels al elemento
                borderColor: '#6FBF74',
              },

//LETRAS DE LA BARRA
            letrasBarras: {
                fontSize: 15,
                color: '#6FBF74',
              },
// Color de fondo
      container: {
        flex: 1,
        backgroundColor: '#fff', 
      },
//Nombre de pokemones
pokemonName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: -15,
    color: '#084DA6',
  },
//IMAGEN DEL LOGO PRINCIPAL
      logo: {
        height: 100, 
        resizeMode: 'contain', 
      },
//Imagenes de los pokemons
      pokemonImagenes: {
        height: 50,
        borderRadius: 25, 
        marginRight: 10, 
        width: 90,   
      },
//Imagen segunda
      animales: {
        height: 225, 
        width: '100%', // Esto hará que la imagen ocupe todo el ancho disponible
        resizeMode: 'contain'
      },
        });
	