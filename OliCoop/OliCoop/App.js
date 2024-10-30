// Eliminar la duplicación de NavigationContainer
import 'react-native-gesture-handler'; // Esto va al principio

import React from 'react';
import Main  from './src/screens/main/main.js';
//LOGIN 
import Login from './src/screens/Inicio/Inicio.js';
//REGISTRO
import Register from './src/screens/Registro/Registro.js';
//MENU PRINCIPAL
import MenuPrincipal from './src/screens/MenuPrincipal/menuPrincipal.js';
//CERRAR SESIÓN
import Close from './src/screens/CerrarSesion/close.js';
//CUADERNO
import Cuaderno from './src/screens/Cuaderno/cuaderno.js';
import subCuaderno from './src/screens/CuadernosubMenu/SubCuaderno.js'
import RegistroCuaderno from './src/screens/CuadernoRegistroAbonoFito/registroCuaderno.js'
import CuadernoBusqueda from './src/screens/CuadernoBusqueda/CuadernoBusqueda.js'

//CONTABILIDAD
import Contabilidad from './src/screens/Contabilidad/contabilidad.js'
import subCont from './src/screens/ContabilidadSubMenu/SubContabilidad.js'
import contBusqueda from './src/screens/ContabilidadBusqueda/contBusqueda.js'
//CAMPAÑA
import campanna from './src/screens/Campanna/Campanna.js'
import subCampanna from './src/screens/CampannaSubMenu/SubCampanna.js'
import CampannaEntrega from './src/screens/CampannaEntrega/Entrega.js'
import CampannaBusqueda from './src/screens/CampannaBusqueda/Busqueda.js'
//DOCUMENTACION
import documentacion from './src/screens/Documentacion/documentacion.js'
import documentacionSubmenu from './src/screens/DocumentacionSubmenu/SubDocument.js'
import Solicitud from './src/screens/DocumentosSolicitud/solicitud.js'
//Generar Documento
import GenerarDocumento from './src/screens/GenerarDocumento/generarDocumento.js'

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
      <Drawer.Screen name="Campaña" component={campanna} />
      <Drawer.Screen name="Cuaderno" component={Cuaderno} />
      <Drawer.Screen name="Contabilidad" component={Contabilidad} />
      <Drawer.Screen name="Documentación" component={documentacion} />
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
        {/*Cuaderno*/}
        <Stack.Screen name="Cuaderno" component={Cuaderno} />
        <Stack.Screen name="Registro Cuaderno" component={RegistroCuaderno}/>
        <Stack.Screen name="Búsqueda Cuaderno" component={CuadernoBusqueda}/>
        {/*Opciones*/}
        <Stack.Screen name='Opciones' component={subCuaderno}/>
        {/*Campaña*/}
        <Stack.Screen name="Campaña" component={campanna}/>
        <Stack.Screen name='Opciones Consulta Campaña' component={subCampanna}/>
        <Stack.Screen name="Entrega" component={CampannaEntrega}/>
        <Stack.Screen name="Busqueda Campaña" component={CampannaBusqueda}/>
        {/*Contabilidad*/}
        <Stack.Screen name="Contabilidad" component={Contabilidad}/>
        <Stack.Screen name='Opciones Contabilidad' component={subCont}/>
        <Stack.Screen name='Opciones Consulta Contabilidad' component={contBusqueda}/>
        {/*Documentación*/}
        <Stack.Screen name="Documentación" component={documentacion}/>
        <Stack.Screen name='Opciones Documentación' component={documentacionSubmenu}/>
        <Stack.Screen name="Solicitud" component={Solicitud}/>
        {/*Generar Docuemto*/ }
        <Stack.Screen name="Generar Documento" component={GenerarDocumento}/>	
      </Stack.Navigator>
    </NavigationContainer>
);
}

export default App;


