import { Text, SafeAreaView, Image, View, TouchableOpacity, TextInput, Pressable } from 'react-native';
import styles from './style.js';



/*MENSAJE TRAS REGISTRAR PESADA*/
const handleSubmit = (navigation) => {
  alert("Buscando...");
  navigation.navigate('Generar Documento');
}
export default function BusquedaCampanna({ navigation }) {
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
                  placeholder="Indica la parceela"
              />
              <Text style={styles.texto}>
                DÍA DE LA ENTREGA
              </Text>
              <TextInput
                  style={styles.input}
                  placeholder="Indica día de la entrega"
              />
              <TouchableOpacity style={styles.boton} onPress={() => handleSubmit(navigation)}>
                          <Text style={styles.textoBoton}>BUSCAR</Text>
              </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

