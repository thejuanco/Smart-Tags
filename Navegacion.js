import React from "react";
// Importando la variable desde la dependencia
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'

//Importando la stack 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Image } from 'react-native';

//Importando las vistas
import Inicio from "./view/Inicio";
import Tareas from "./view/Tareas";
import Calendario from "./view/Calendario";
import Perfil from "./view/Perfil";
import Configuracion from "./view/Configuracion";
import Card1 from "./view/Card1";
import Card2 from "./view/Card2";


// Creando la variable
const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

//Creando el stack
function MyStack(){
  return (
    <Stack.Navigator
      initialRouteName="Perfil"
    >
      <Stack.Screen name="Perfil" component={Perfil} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Configuracion" component={Configuracion}
        options={{

        }}
      />
      <Stack.Screen name="Card1" component={Card1}/>
      <Stack.Screen name="Card2" component={Card2}/>
    </Stack.Navigator>
  )
}

// Creando la navegacion
function MyTabs() {
  return (
    <Tab.Navigator
      //Establecer la ruta inicial
      initialRouteName='Inicio'
      //Diferentes opciones de personalizacion
    >

      <Tab.Screen name="Inicio" component={Inicio} 
        options={{
          //Renombrar el Label
          tabBarLabel: 'Inicio',
          //Agregando un icono de manera local
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('./src/img/homeNegro.png')
                  : require('./src/img/home.png')
              }
              style={{
                width: 21,
                height: 21
              }}
            />
          )
        }}
      />

      <Tab.Screen name="Tareas" component={Tareas} 
        options={{
          //Agregando un icono de manera local
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('./src/img/notaNegro.png')
                  : require('./src/img/nota.png')
              }
              style={{
                width: 21,
                height: 21
              }}
            />
          )
        }}
      />

      <Tab.Screen name="Calendario" component={Calendario} 
        options={{
          //Agregando un icono de manera local
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('./src/img/calendarioNegro.png')
                  : require('./src/img/calendario.png')
              }
              style={{
                width: 21,
                height: 21
              }}
            />
          )
        }}
      />

      <Tab.Screen name="Perfil" component={MyStack} 
        options={{
          //Agregando un icono de manera local
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? require('./src/img/usuarioPerfilNegro.png')
                  : require('./src/img/usuarioPerfil.png')
              }
              style={{
                width: 21,
                height: 21
              }}
            />
          )
        }}
      />

    </Tab.Navigator>
  );
}

export default function Navegacion() {
  return (
      <NavigationContainer>
          <MyTabs/>
      </NavigationContainer>
  )
}