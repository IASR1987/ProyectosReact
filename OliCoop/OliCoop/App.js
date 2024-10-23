// Eliminar la duplicación de NavigationContainer
import 'react-native-gesture-handler'; // Esto va al principio

import React from 'react';
import Main  from './src/screens/main/main.js'; 
import Login from './src/screens/Inicio/Inicio.js';
import Register from './src/screens/Registro/Registro.js';
import MenuPrincipal from './src/screens/MenuPrincipal/menuPrincipal.js';
import Close from './src/screens/CerrarSesion/close.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


// Definición del Drawer Navigator
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Menú Principal" component={MenuPrincipal} />
      <Drawer.Screen name="Registro" component={Register} />
      <Drawer.Screen name="Cerrar Sesión" component={Close}/>
    </Drawer.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menú Inicial">
        <Stack.Screen name="Menú Inicial" component={Main} />
        <Stack.Screen name="Iniciar Sesión" component={Login} />
        <Stack.Screen name="Registro" component={Register} />
         {/* Una vez que el usuario está logueado, mostramos el Drawer */}
        <Stack.Screen name="Menú Principal" component={MyDrawer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
);
}

export default App;


