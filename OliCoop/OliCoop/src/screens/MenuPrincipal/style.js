import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    line: {
      borderBottomColor: 'black', // Cambia el color de la línea
      borderBottomWidth: 1, // Grosor de la línea
      width: '100%', // Abarca todo el ancho del contenedor
      marginVertical: 10, // Espaciado vertical (opcional)
    },
    texto: {
      padding: 10, // Espaciado interno (opcional)
      fontFamily: 'Roboto', // Cambia la fuente del texto
      fontSize: 35, // Cambia el tamaño del texto
    },
    row: {
      flexDirection: 'row',
      marginVertical:40,
      padding: 1,
    },
    imageContenedor: {
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center', // Centra horizontalmente
        marginVertical:40,
    },
    celda :{
      flex:1,
      flexDirection:'row',
      height: 180,
      justifyContent:'space-around'
    },
    image: {
      width: 120,
      height: 120,
      alignSelf: 'center',
      borderRadius: 10,    // Esquinas redondeadas (opcional)
    },
    image2: {
      width: 145,
      height: 120,
      alignSelf: 'center',
      borderRadius: 10, 
    },
    textoBoton: {
      fontSize: 15,
      alignSelf:'flex-start',
      fontWeight: 'bold'
    }

});

export default styles;