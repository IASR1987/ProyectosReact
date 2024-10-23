import { Text, SafeAreaView, Image, View, TouchableOpacity, TextInput, Pressable } from 'react-native';
import styles from './style.js';

export default function Main({ navigation }) {
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
                NÚMERO DE SOCIO
              </Text >
              <TextInput
                  style={styles.input}
                  placeholder="Indica tu número de socio"
              />
              <Text style={styles.texto}>
                CONTRASEÑA
              </Text>
              <TextInput
                  style={styles.input}
                  placeholder="Indica tu contraseña"
              />
              <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Menú Principal')}>
                          <Text style={styles.textoBoton}>INICIAR SESIÓN</Text>
              </TouchableOpacity>
              <Pressable onPress={() => navigation.navigate('Menú Inicial')}>
                        <Text style={styles.textoEmergencia}>¿Olvidaste tu contraseña?</Text>
              </Pressable>

            </View>
        </SafeAreaView>
    );
};

