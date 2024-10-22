import { SafeAreaView } from "react-native";


const HorizontalLine = () => {
    return <View style={styles.line} />;
  };

export default function MenuPrincipal({navigation}) {
    return(
        <SafeAreaView>
            <Text>Nombre de usuario</Text>
            HorizontalLine()
        </SafeAreaView>
    )
}