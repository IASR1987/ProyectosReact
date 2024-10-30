import { Text, SafeAreaView, Image, View, TouchableOpacity, TextInput, Pressable } from 'react-native';
import styles from './style.js';



/*MENSAJE TRAS REGISTRAR PESADA*/
const handleSubmit = (navigation) => {
  alert("Realizando Búsqueda");
  navigation.navigate('Generar Documento')
}
export default function ContabilidadBusqueda({ navigation }) {
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
                FECHA
              </Text >
              <TextInput
                  style={styles.input}
                  placeholder="Indica la fecha"
              />
              <Text style={styles.texto}>
                TIPO DE MOVIMIENTO
              </Text>
              <TextInput
                  style={styles.input}
                  placeholder="Gasto o Ingreso"
              />
              <TouchableOpacity style={styles.boton} onPress={() => handleSubmit(navigation)}>
                          <Text style={styles.textoBoton}>BUSCAR</Text>
              </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

