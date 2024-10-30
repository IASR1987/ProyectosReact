import {} from 'react-native';
import styles from './style.js';
import {  SafeAreaView, View,TouchableOpacity,Image,Text } from 'react-native';



export default function Cuaderno({navigation}) {

    const HorizontalLine = () => {
        return <View style={styles.line} />;
    };
    
return(
    <SafeAreaView style={styles.container}>
        <View style={styles.table}>
        <View style={styles.row}>
                <View style={styles.celda}>
                    <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Opciones')}>
                        <Image
                        source={require('../../../assets/imagenes/abono.png')} // URL de tu imagen
                        style={styles.image}
                        />
                        <HorizontalLine />
                        <Text style={styles.textoBoton}>ABONO</Text> 
                    </TouchableOpacity>
                </View> 
                <View style={styles.celda}>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Opciones')}>
                        <Image
                        source={require('../../../assets/imagenes/toxico.png')} // URL de tu imagen
                        style={styles.image}
                        />
                        <HorizontalLine />
                        <Text style={styles.textoBoton}>FITOS</Text> 
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.celda}>
                    <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Opciones')}>
                        <Image
                        source={require('../../../assets/imagenes/poda.png')} // URL de tu imagen
                        style={styles.image}
                        />
                        <HorizontalLine />
                        <Text style={styles.textoBoton}>PODAS</Text> 
                    </TouchableOpacity>
                </View> 
                <View style={styles.celda}>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Opciones')}>
                        <Image
                        source={require('../../../assets/imagenes/residuos.png')} // URL de tu imagen
                        style={styles.image}
                        />
                        <HorizontalLine />
                        <Text style={styles.textoBoton}>RESIDUOS</Text> 
                    </TouchableOpacity>
                </View>
            </View>
                <View style={styles.celda2}>
                    <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Opciones')}>
                        <Image
                        source={require('../../../assets/imagenes/parcelas.png')} // URL de tu imagen
                        style={styles.image}
                        />
                        <HorizontalLine />
                        <Text style={styles.textoBoton}>PARCELAS</Text> 
                    </TouchableOpacity>
                </View> 
        </View>
    </SafeAreaView>
)

}