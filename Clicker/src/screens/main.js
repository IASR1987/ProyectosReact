import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import { useState } from 'react';
import styles from '../styles/styles.js';

// Variable para contar los clics
let contador = 0;

export default function Main() {
    // Estado para manejar el tamaño de la imagen
    const [click, setTamanno] = useState(false);
    // Estado para contar los clics
    const [clickCount, setClickCount] = useState(0);
    //muestra el +1 en la sandía
    const[numero, setNumero] = useState(false);
     //funcion para manejar la resta
    const [click3, setTamanno3] = useState(false);
     //cambia el numero que sale en la sandía
    const [numero3, setNumero3] = useState(false);
    //funcion para manejar multiplicadores
    const [click2, setTamanno2] = useState(false);
    //cambia el numero que sale en la sandía
    const [numero2, setNumero2] = useState(false);	

    // Función para manejar el clic y aumentar el contador
    const handlePressIn = () => {
        if(click2){
            setClickCount(contadorClick => contadorClick + 5);//de 5 en 5 en la sandía
            setNumero(false);//desactiva el +1
            setNumero2(true);//+5 en la sandía
            setNumero(false);//desactiva el -5
        }else if(click3){
            setClickCount(contadorClick => contadorClick - 5);//de 5 en 5 en la sandía
            setNumero(false);//desactiva el +1
            setNumero2(false);//+5 en
            setNumero3(true);//-5 en la sandía
        } else{
            setClickCount(contadorClick => contadorClick + 1);
            setTamanno(true); // Cambia a imagen pequeña al presionar
            setNumero(true);//+1 en la sandía
            setNumero2(false);//descativa el multiplicador
            setNumero3(false);//desactiva el -5
        }

        
    };
    //maneja cuando no esta pulsado el boton
    const handlePressOut = () => {
        setTamanno(false);
        setNumero(false);
        setNumero2(false);
        setNumero3(false)
    }
    
    //funcion para manejar el multiplicador
    const handleMultiplicador = () => {
        setTamanno2(true);
        setTimeout(() => {
            setTamanno2(false); // Desactiva el multiplicador después de 3 segundos
        }, 3000); // 3000 ms = 3 segundos
    }


    //funcion para manejar el multiplicador
    const handleResta = () => {
        setTamanno3(true);
        setTimeout(() => {
            setTamanno3(false); // Desactiva el multiplicador después de 3 segundos
        }, 3000); // 3000 ms = 3 segundos
    }
     // Reinicia el contador
     const handleReset = () => {
        setClickCount(0);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image 
                source={require('../../assets/imagenes/fondoCielo.jpg')} 
                style={styles.fondo} 
            />
            
            <View style={styles.topRight}>
                <Image
                    source={require('../../assets/imagenes/funny-cool.gif')}
                    style={styles.sol}  // Aplica un estilo para la imagen
                />
            </View>
            <View style={styles.viewContainer}>
                <Pressable 
                    style={styles.touchArea}
                    onPressIn={() => handlePressIn()}  // Cambia a imagen pequeña al presionar
                    onPressOut={() => handlePressOut()} // Vuelve a la imagen grande al soltar
                >
                    <Image
                        source={require('../sandia.png')} // Ruta a tu imagen
                        style={click ? styles.imagePeque : styles.image} // Aplica el tamaño según el estado
                    />
                    <Text style={styles.texto}>
                        {numero ? '+1' : ''} 
                        {numero2 ? '+5' : ''} 
                        {numero3 ? '-5' : ''}
                    </Text>
                </Pressable>
                
            </View>
            
            <Text style={styles.texto2}>
                    {clickCount}
            </Text>
            
            <View style={styles.multiplicadores}>
                <View style={styles.multi}>
                    <Pressable style={styles.porDos}
                        onPress={() => handleMultiplicador()}
                            disabled={click3}>
                        <Image
                            source={require('./../../assets/imagenes/sandias.png')} // Ruta a tu imagen
                            style={click2 ? styles.imageMultiMini : styles.imageMulti} // Aplica el tamaño según el estado}
                        />
                    </Pressable>
                </View> 
                <View style={styles.multi}>
                    <Pressable style={styles.porDos}
                        onPress={()=> handleResta()}
                        disabled={click2}>
                        <Image
                            source={require('./../../assets/imagenes/caraSusto.png')} // Ruta a tu imagen
                            style={click3 ? styles.imageSustoMini : styles.imageSusto} // Aplica el tamaño según el estado}
                        />
                    </Pressable>
                </View>
                <View style={styles.multi}>
                    <Pressable style={styles.porDos}
                    onPress={handleReset}
                    disabled={click2 || click3}>
                        <Image
                            source={require('./../../assets/imagenes/CaraTriste.png')} // Ruta a tu imagen
                            style={styles.imageTriste}
                        />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};
