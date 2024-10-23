import { TouchableOpacity, SafeAreaView, Text, View, Image } from "react-native";
import styles from './style.js';

const HorizontalLine = () => {
    return <View style={styles.line} />;
};

export default function MenuPrincipal({navigation}) {
    return(
        <SafeAreaView>
            <View>
                <Text style={styles.texto}>
                Nombre de usuario
                </Text>
                <HorizontalLine />
            </View>
            <View style={styles.imageContenedor}>
                <View style={styles.row}>
                    <View style={styles.celda}>
                        <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Camapña')}>
                            <Image
                            source={require('../../../assets/imagenes/aceituna.jpg')} // URL de tu imagen
                            style={styles.image}
                            />
                            <HorizontalLine />
                            <Text style={styles.textoBoton}>CAMPAÑA</Text>        
                        </TouchableOpacity>
                    </View>
                    <View style={styles.celda}>
                        <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Campaña')}>
                            <Image
                            source={require('../../../assets/imagenes/cuaderno.jpg')} // URL de tu imagen
                            style={styles.image2}
                            />
                            <HorizontalLine />
                            <Text style={styles.textoBoton}>CUADERNO</Text>        
                        </TouchableOpacity>    
        
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.celda}>
                        <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Camapña')}>
                            <Image
                            source={require('../../../assets/imagenes/contabilidad.jpg')} // URL de tu imagen
                            style={styles.image}
                            />
                            <HorizontalLine />
                            <Text style={styles.textoBoton}>CONTABILIDAD</Text>        
                        </TouchableOpacity>
                    </View>
                    <View style={styles.celda}>
                        <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Camapña')}>
                            <Image
                            source={require('../../../assets/imagenes/documentación.jpg')} // URL de tu imagen
                            style={styles.image2}
                            />
                            <HorizontalLine />
                            <Text style={styles.textoBoton}>DOCUMENTACIÓN</Text>        
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        
        </SafeAreaView>
    )
}