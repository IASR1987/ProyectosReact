import { Text, SafeAreaView, Image, View, TouchableOpacity, TextInput, Pressable } from 'react-native';
import styles from './style.js';



/*MENSAJE TRAS REGISTRAR PESADA*/
const handleSubmit = (navigation) => {
  alert("Buscando...");
  navigation.navigate('Generar Documento');
}
export default function CuadernoBusqueda({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContenedor}>
              <Image source={require('../../../assets/iconoGuadalcanal.jpg')}
                  style={styles.iconoCoop}
                  resizeMode="contain"  
              /> 
            </View>
            <View style={styles.botonera}>
              <Text style={styles.texto}>
                TIPO DE TRATAMIENTO
              </Text >
              <TextInput
                  style={styles.input}
                  placeholder="Indica el tratamiento"
              />
              <Text style={styles.texto}>
                FECHA DE LA APLICACIÓN
              </Text>
              <TextInput
                  style={styles.input}
                  placeholder="Indica fecha de la aplicación/tratamiento"
              />
              <TouchableOpacity style={styles.boton} onPress={() => handleSubmit(navigation)}>
                          <Text style={styles.textoBoton}>BUSCAR</Text>
              </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

