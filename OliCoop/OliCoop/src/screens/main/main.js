import { StyleSheet, Text, SafeAreaView, Image, View, TouchableOpacity} from 'react-native';

export default function Main({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textoCabecera}>OliCoop</Text>
            <View style={styles.imageContenedor}>
              <Image source={require('../../../assets/iconoGuadalcanal.jpg')}
                  style={styles.iconoCoop}
                  resizeMode="contain"  
              />
            </View>
            <View style={styles.botonera}>
              <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Iniciar Sesión')}>
                          <Text style={styles.textoBoton}>INICIAR SESIÓN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Registro')}>
                          <Text style={styles.textoBoton}>REGISTRO DE USUARIO</Text>
              </TouchableOpacity>                
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9e1d9',
  },
  textoCabecera: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
    fontFamily: 'sans-serif',
  },
  iconoCoop: {
    width: 200,
    height: 200,
    marginTop: 20,
    
  },
  imageContenedor: {
    alignSelf: 'center',
  },
  boton: {
    backgroundColor: '#808000',
    padding: 10,  // Margen interior
    width: 200,  // Ancho del botón
    alignSelf: 'center',
    borderRadius: 10,  // Bordes redondeados
    marginVertical: 10,  // Margen vertical
    // Estilos de sombra para Android
    elevation: 15,                  // Altura de la sombra
  },
  textoBoton: {
    color: '#fff',  // Color del texto en blanco
    fontSize: 16,   // Tamaño de la fuente
    textAlign: 'center',
  },
});