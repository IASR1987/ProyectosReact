// src/screens/Logout.js
import React from 'react';
import { View, Text, Pressable,Image } from 'react-native';
import styles from './style.js';


export default function Close({ navigation }) {
const handleSubmit = (navigation) => {
    alert("Sesión cerrada correctamente.");
    navigation.navigate('Menú Inicial');
};
return (
    <View>
        <Image source={require('../../../assets/iconoGuadalcanal.jpg')}
            style={styles.iconoCoop}
            resizeMode="contain"  
        />
        <Pressable style={styles.boton} onPress={() => handleSubmit(navigation)} >
            <Text style={styles.textoBoton}>Cerrar Sesión</Text>
        </Pressable>
        <Pressable style={styles.boton} onPress={() => navigation.navigate('Menú Principal')} >
            <Text style={styles.textoBoton}>Volver al Menú Principal</Text>
        </Pressable>
    </View>
    );
}


