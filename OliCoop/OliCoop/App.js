import React from 'react';
import Main  from './src/screens/main/main.js'; 
import Login from './src/screens/Inicio/Inicio.js';
import Register from './src/screens/Registro/Registro.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menú Inicial" component={Main} />
        <Stack.Screen name="Iniciar Sesión" component={Login} />
        <Stack.Screen name="Registro" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
);
}

export default App;


