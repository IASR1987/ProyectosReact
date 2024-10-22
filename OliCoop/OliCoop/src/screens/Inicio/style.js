import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9e1d9',
  },
  iconoCoop: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  imageContenedor: {
    alignSelf: 'center',
  },
  botonera: {
    flex: 1,
  },
  texto:{
    fontSize: 20,
    fontStyle: 'bold',
    color: '#333333',
    marginLeft: 30,
    fontFamily: 'sans-serif',
  },
  boton: {
    backgroundColor: '#808000',
    padding: 10,  // Margen interior
    width: 200,  // Ancho del botón
    alignSelf: 'center',
    borderRadius: 10,  // Bordes redondeados
    marginVertical: 30,  // Margen vertical
    // Estilos de sombra para Android
    elevation: 15,                  // Altura de la sombra
  },
  textoBoton: {
    color: '#fff',  // Color del texto en blanco
    fontSize: 16,   // Tamaño de la fuente
    textAlign: 'center',
  },
  input: {
    width: 300,
    height: 40,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginVertical: 10,
      // Estilos de sombra para Android
      elevation: 15,                  // Altura de la sombra
  },
  textoEmergencia: {
    color: '#000',
    fontSize: 15,
    marginTop: 180,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
});

export default styles;
