import {TextInput, View,Text, TouchableOpacity} from 'react-native';
import styles from './style.js';


const handleSubmit = (navigation) => {
    alert("Usuario registrado correctamente");
    navigation.navigate('Menú Inicial');
};
const Registro = ({ navigation }) => {
    return (
        <View style={styles.botonera}>
            <Text style={styles.texto}>
                Nombre y Apellidos
            </Text >
            <TextInput
                style={styles.input}
                placeholder="Nombre"
            />
            <Text style={styles.texto}>
                Contraseña(8 caracteres mín.)
            </Text >
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
            />
            <Text style={styles.texto}>
                Repetir Contraseña
            </Text >
            <TextInput
                style={styles.input}
                placeholder="Repetir Contraseña" 
            />
            <Text style={styles.texto}>
                Número de Socio
            </Text >
            <TextInput
                style={styles.input}
                placeholder="Número de Socio"
            />
            <Text style={styles.texto}>
                Correo Electrónico
            </Text >
            <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
            />
            <TouchableOpacity style={styles.boton} onPress={() => handleSubmit(navigation)}>
                        <Text style={styles.textoBoton}>REGISTRA USUARIO</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Registro;