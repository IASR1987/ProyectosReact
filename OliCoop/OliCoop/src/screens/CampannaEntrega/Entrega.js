import { Text, SafeAreaView, Image, View, TouchableOpacity, TextInput, Pressable } from 'react-native';
import styles from './style.js';



/*MENSAJE TRAS REGISTRAR PESADA*/
const handleSubmit = (navigation) => {
  alert("Pesada registrada correctamente");
  navigation.navigate('Campaña')
}
export default function Entrega({ navigation }) {
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
                NÚMERO DE PARCELA
              </Text >
              <TextInput
                  style={styles.input}
                  placeholder="Indica la parcela"
              />
              <Text style={styles.texto}>
                TIPO DE ACEITUNA
              </Text>
              <TextInput
                  style={styles.input}
                  placeholder="Indica tipo de Aceituna"
              />
              <TouchableOpacity style={styles.boton} onPress={() => handleSubmit(navigation)}>
                          <Text style={styles.textoBoton}>REGISTRAR PESADA</Text>
              </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

