/*
    Verifica los nombres y parámetros de cada ruta, como no se están recibiendo parámetros, se setea en "undefined"
    Aquí se pondría como parámetro el id del usuario si se tuviera un backend.
*/
export type RootStackParamList = {
  LoginForm: undefined;
  Home: undefined;
  Products: undefined;
};

// Importaciones propias de React Native y librerías.
import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
// Componentes para crear las rutas (Solo las vistas, no los componentes dentro de ellas).
import {LoginForm} from '../login/Login';
import {Home} from '../menu/Home';
import {DataList} from '../listadoProductos/ProductsView';

//? Creando la pila de direcciones.
const Stack = createStackNavigator<RootStackParamList>();

export const MainStack: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {/*<Stack.Screen name="Home" component={LoginForm}/>*/}
                {/*
                    //? Ternaria para evaluar si la sesión está iniciada o cerrada.
                    //? Caso 1. La sesión está iniciada y la página principal será el home.
                    //? Caso 2. La sesión está cerrada y mostrará el formulario de login.
                */}
                {isLoggedIn ? (
                    <Stack.Screen name="Home">
                        {props => <Home {...props} setIsLoggedIn={setIsLoggedIn} />}
                    </Stack.Screen>
                    ) : (
                    <Stack.Screen name="Login">
                        {props => <LoginForm {...props} setIsLoggedIn={setIsLoggedIn} />}
                    </Stack.Screen>
                )}
                {/*//? Otras rutas.*/}
                <Stack.Screen name="Products" component={DataList}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}