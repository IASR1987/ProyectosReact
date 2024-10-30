import { SafeAreaView, TouchableOpacity,Image, Text, View } from "react-native";
import styles from './styles';

const HorizontalLine = () => {
    return <View style={styles.line} />;
};

export default function SubCampanna({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.celda}>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Generar Documento')}>
                <Image
                source={require('../../../assets/imagenes/registro.png')} // URL de tu imagen
                style={styles.image}
                />
                <HorizontalLine />
                <Text style={styles.textoBoton}>GENERAR INFORME CAMPAÑA</Text>        
                </TouchableOpacity>
            </View>
            <View style={styles.celda}>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Busqueda Campaña')}>
                <Image
                source={require('../../../assets/imagenes/lupa.png')} // URL de tu imagen
                style={styles.image}
                />
                <HorizontalLine />
                <Text style={styles.textoBoton}>CONSULTAS PERSONALIZADAS</Text>        
                </TouchableOpacity>
            </View>

            
        </SafeAreaView>   
    )
}