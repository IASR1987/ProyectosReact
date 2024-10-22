//Registro
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  botonera: {
    flex: 1,
    padding: 10,
    backgroundColor: 'BLACK',
    justifyContent: 'space-around',
  },
  input: {
    width: 300,
    height: 40,
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginVertical: 10,
      // Estilos de sombra para Android
      elevation: 15,                  // Altura de la sombra
  },
  texto:{
    fontSize: 20,
    fontStyle: 'bold',
    color: '#333333',
    marginLeft: 20,
    fontFamily: 'sans-serif',
  },
  boton: {
    backgroundColor: '#808000',
    padding: 10,  // Margen interior
    width: 200,  // Ancho del botón
    justifyContent: 'flex-end',
    alignSelf: 'center',
    borderRadius: 10,  // Bordes redondeados
    marginVertical: 20,  // Margen vertical
    // Estilos de sombra para Android
    elevation: 15,                  // Altura de la sombra
  },
  textoBoton: {
    color: '#fff',  // Color del texto en blanco
    fontSize: 16,   // Tamaño de la fuente
    textAlign: 'center',
  }
});

export default styles;
