import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9e1d9',
  },
  iconoCoop: {
    alignSelf: 'center'
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
  },
  textoBoton: {
    color: '#fff',  // Color del texto en blanco
    fontSize: 16,   // Tamaño de la fuente
    textAlign: 'center',
  }
});

export default styles;
