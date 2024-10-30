// src/screens/Logout.js
import React from 'react';
import { View, Text, Image,TouchableOpacity} from 'react-native';
import styles from './style.js';


export default function GenerarDocumento({ navigation }) {

return (
    <View>
        <Image source={require('../../../assets/imagenes/documentoGenerado.png')}
            style={styles.iconoCoop}
            resizeMode="contain"
        />
        <Text style={styles.texto}>Documento Generado</Text>
        <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Menú Principal')}>
            <Text style={styles.texto}>Volver al Menú Inicial</Text>
        </TouchableOpacity>
    </View>
    );
}


