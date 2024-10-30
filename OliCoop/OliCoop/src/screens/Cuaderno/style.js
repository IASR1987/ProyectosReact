import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        borderBottomColor: 'black', // Cambia el color de la línea
        borderBottomWidth: 1, // Grosor de la línea
        width: '100%', // Abarca todo el ancho del contenedor
        marginVertical: 5, // Espaciado vertical (opcional)
    },
    table: {
        width: '100%',
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        marginVertical: 10
    },
    celda: {
        width: 150,
        height: 150,
        margin: 20,

    },
    image: {
        width: 150,
        height: 150,
    },
    celda2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    textoBoton: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default styles;