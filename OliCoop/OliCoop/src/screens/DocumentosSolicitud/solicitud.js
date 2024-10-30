import { Text, SafeAreaView, Image, View, TouchableOpacity, TextInput, Pressable } from 'react-native';
import styles from './style.js';



/*MENSAJE TRAS REGISTRAR PESADA*/
const handleSubmit = (navigation) => {
  alert("Generando consulta");
  navigation.navigate('Menú Principal')
}
export default function DocumentacionSolicitud({ navigation }) {
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
                Solicitudes
              </Text >
              <TextInput
                  style={styles.inputSolic}
                  placeholder="Indica tu reclamación"
              />
              <Text style={styles.texto}>
                INDICA TU NÚMERO DE SOCIO
              </Text>
              <TextInput
                  style={styles.input}
                  placeholder="numero de socio"
              />
              <TouchableOpacity style={styles.boton} onPress={() => handleSubmit(navigation)}>
                          <Text style={styles.textoBoton}>BUSCAR</Text>
              </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

