
import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';

//Vid 235, configurando React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//a las paginas que navegaremos 
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

//Vid 235 ,es el que tendra todos los metodos para 
const Stack = createStackNavigator();

//Vid 235 , usamos el componente  <NavigationContainer>
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          //Esta será nuestra página principal.
          initialRouteName="Inicio"
          screenOptions={{
            headerTitleAlign: 'right',
            headerStyle: {
              backgroundColor: '#F4511E',

            },
            headerTintColor: '#fff',//Vid 240 
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen
            // Vid 235 
            name="Inicio"
            component={Inicio}
          />
          <Stack.Screen
            //Vid 239,cambiamos el Header,segunda pantalla 
            name="Nosotros"
            component={Nosotros}
            options={({ route }) => ({
              title: route.params.clienteId
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
