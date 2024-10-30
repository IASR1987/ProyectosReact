import { StyleSheet }  from "react-native";

const styles= StyleSheet.create({
    line: {
        borderBottomColor: 'black', // Cambia el color de la línea
        borderBottomWidth: 1, // Grosor de la línea
        width: '100%', // Abarca todo el ancho del contenedor
        marginVertical: 10, // Espaciado vertical (opcional)

    },
    container: {
        flex: 1,
    },
    image: {
        width: 190,
        height: 150,
        alignSelf: 'center',
    },
    celda: {
        width: 150,
        alignSelf: 'center',
        marginVertical: 60,
    },
    textoBoton: {
        fontFamily: 'Roboto',
        fontSize: 15,
        textAlign: 'center',
    }
})

export default styles;