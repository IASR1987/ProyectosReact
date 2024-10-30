import { SafeAreaView, TouchableOpacity,Image, Text, View } from "react-native";
import styles from './styles';

const HorizontalLine = () => {
    return <View style={styles.line} />;
};

export default function SubCuaderno({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.celda}>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Registro Cuaderno')}>
                <Image
                source={require('../../../assets/imagenes/registro.png')} // URL de tu imagen
                style={styles.image}
                />
                <HorizontalLine />
                <Text style={styles.textoBoton}>REGISTRO</Text>        
                </TouchableOpacity>
            </View>
            <View style={styles.celda}>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Búsqueda Cuaderno')}>
                <Image
                source={require('../../../assets/imagenes/lupa.png')} // URL de tu imagen
                style={styles.image}
                />
                <HorizontalLine />
                <Text style={styles.textoBoton}>CONSULTA</Text>        
                </TouchableOpacity>
            </View>

            
        </SafeAreaView>   
    )
}