import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Componentes para crear las rutas (Solo las vistas, no los componentes dentro de ellas).
import {DataList} from '../listadoProductos/ProductsView';

//? Creando la pila de direcciones.
const BasicStack = createStackNavigator();

export const BasicNavigation : React.FC = () => {
    return(
        <>
            <BasicStack.Navigator
                screenOptions={{headerShown: false}}
            >
                <BasicStack.Screen name="Products" component={DataList}/>
            </BasicStack.Navigator>
        </>
    )
}