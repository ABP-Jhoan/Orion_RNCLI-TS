// Imports propios de React Native y librerías.
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// Imports para crear las pastañas (solo vistas, no componentes dentro de ellas).
import {TabUno} from '../tabNav/tabUno/TabUno';
import {TabDos} from '../tabNav/tabDos/TabDos';

//? Creando la pila de pestañas.
const Tab = createMaterialTopTabNavigator();

export const TabContainer : React.FC = () => {
    return(
        <Tab.Navigator 
            //? Propiedades que ayudan a definir cual será la pestaña por defecto y el estilo del indicador.
            initialRouteName="TabOne"
            screenOptions={{tabBarIndicatorStyle:{backgroundColor: '#215877', height: 5}}}
        >
            <Tab.Screen name="TabOne" component={TabUno} options={{ tabBarLabel: 'Iniciar' }}/>
            <Tab.Screen name="TabTwo" component={TabDos} options={{ tabBarLabel: 'Registro' }}/>
        </Tab.Navigator>
    )
}