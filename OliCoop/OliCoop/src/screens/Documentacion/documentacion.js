import { SafeAreaView, TouchableOpacity,Image, Text, View } from "react-native";
import styles from './styles';

const HorizontalLine = () => {
    return <View style={styles.line} />;
};

export default function SubCuaderno({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.celda}>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Opciones Documentación')}>
                <Image
                source={require('../../../assets/imagenes/informacion.png')} // URL de tu imagen
                style={styles.image}
                />
                <HorizontalLine />
                <Text style={styles.textoBoton}>SECRETARIA</Text>        
                </TouchableOpacity>
            </View>
            <View style={styles.celda}>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Opciones Documentación')}>
                <Image
                source={require('../../../assets/imagenes/ue.png')} // URL de tu imagen
                style={styles.image}
                />
                <HorizontalLine />
                <Text style={styles.textoBoton}>SUBVENCIONES</Text>        
                </TouchableOpacity>
            </View>

            
        </SafeAreaView>   
    )
}