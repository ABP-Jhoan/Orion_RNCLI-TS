export type TabStackParamList = {
    TabOne: undefined;
    TabTwo: undefined;
}
// Imports propios de React Native y librerías.
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
// Imports para crear las pastañas (solo vistas, no componentes dentro de ellas).
import {TabUno} from '../tabNav/tabUno/TabUno';
import {TabDos} from '../tabNav/tabDos/TabDos';

//? Creando la pila de pestañas.
const Tab = createMaterialTopTabNavigator<TabStackParamList>();

export const TabContainer : React.FC = () => {
    return(
        <Tab.Navigator 
            initialRouteName="TabOne">
            <Tab.Screen name="TabOne" component={TabUno}/>
            <Tab.Screen name="TabTwo" component={TabDos}/>
        </Tab.Navigator>
    )
}