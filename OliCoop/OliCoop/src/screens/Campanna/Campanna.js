import { SafeAreaView, TouchableOpacity,Image, Text, View } from "react-native";
import styles from './styles';

const HorizontalLine = () => {
    return <View style={styles.line} />;
};

export default function Campanna({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.celda}>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Entrega')}>
                <Image
                source={require('../../../assets/imagenes/entrega.png')} // URL de tu imagen
                style={styles.image}
                />
                <HorizontalLine />
                <Text style={styles.textoBoton}>ENTREGAS</Text>        
                </TouchableOpacity>
            </View>
            <View style={styles.celda}>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Opciones Consulta Campaña')}>
                <Image
                source={require('../../../assets/imagenes/lupa.png')} // URL de tu imagen
                style={styles.image}
                />
                <HorizontalLine />
                <Text style={styles.textoBoton}>CONSULTAS</Text>        
                </TouchableOpacity>
            </View>

            
        </SafeAreaView>   
    )
}