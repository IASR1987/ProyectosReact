import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fondo: {
        position: 'absolute',// no afecta a otras imagenes que queramos poner encima
    },
    viewContainer: {
        alignItems: 'flex-end',
    },
    touchArea: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#215621',  // Necesario para sombra en Android
        borderRadius : 140,  // Ajusta el tamaño del botón
    },
    image: {
        marginTop: 0,
        width: 300,  // Ajusta el tamaño de la imagen grande
        height: 300,
    },
    imagePeque: {
        width: 290,  // Ajusta el tamaño de la imagen pequeña
        height: 290,
    },
    texto: {
        position: 'absolute',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'yellow',
    },
    texto2: {
        position: 'absolute',
        fontSize: 50,
        fontWeight: 'bold',
        color: 'yellow',
        bottom: 170,
    },
    multiplicadores: {
        position: 'absolute',
        bottom: 40,
        flexDirection: 'row',
    },
    multi: {
        position: 'relative',
        width: 110,
        marginHorizontal: 8,
    },
    imageMulti:{
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: 10,
        width: 112,
        height: 110,
        elevation: 8,
    },
    porDos:{
        width: 110,
        height: 110,
    },
    imageMultiMini:{
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: 10,
        width: 110,
        height: 100,
        opacity: 0.5,
    },
    imageTriste:{
        alignSelf: 'center',
        width: 90,
        height: 100,
    },
    imageSusto:{
        alignSelf: 'center',
        marginTop: 10,
        width: 125,
        height: 75,
    },
    imageSustoMini:{
        alignSelf: 'center',
        opacity: 0.5,
        marginTop: 10,
        width: 115,
        height: 75,
    },
    sol:{
        width: 200,
        height: 200,
    },
    topRight: {
        position: 'absolute',
        top: 50,                  // Ajusta la distancia desde la parte superior
        right: 20,                // Ajusta la distancia desde la derecha
    },
});


export default styles;