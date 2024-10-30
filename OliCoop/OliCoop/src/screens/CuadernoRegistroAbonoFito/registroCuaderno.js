import {TextInput, View,Text, TouchableOpacity} from 'react-native';
import styles from './style.js';


const handleSubmit = (navigation) => {
    alert("Procedimiento Registrado");
    navigation.navigate('Menú Principal');
};
const RegistroCuaderno = ({ navigation }) => {
    return (
        <View style={styles.botonera}>
            <Text style={styles.texto}>
                Tipo de Aplicación
            </Text >
            <TextInput
                style={styles.input}
                placeholder="tipo de aplicación"
            />
            <Text style={styles.texto}>
                Fecha
            </Text >
            <TextInput
                style={styles.input}
                placeholder="fecha"
            />
            <Text style={styles.texto}>
                Producto utilizado
            </Text >
            <TextInput
                style={styles.input}
                placeholder="Producto utilizado" 
            />
            <Text style={styles.texto}>
                Parcela
            </Text >
            <TextInput
                style={styles.input}
                placeholder="parcela"
            />
            <Text style={styles.texto}>
            Cantidad por hectarea
            </Text >
            <TextInput
                style={styles.input}
                placeholder="cantidad por hectarea"
            />
            <TouchableOpacity style={styles.boton} onPress={() => handleSubmit(navigation)}>
                        <Text style={styles.textoBoton}>REGISTRA BÚSQUEDA</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RegistroCuaderno;