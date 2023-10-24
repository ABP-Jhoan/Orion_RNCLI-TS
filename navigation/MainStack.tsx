// Importaciones propias de React Native y librerías.
import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Componentes para crear las rutas (Solo las vistas, no los componentes dentro de ellas).
import {LoginForm} from '../login/Login';
import {Home} from '../menu/Home';
import {DataList} from '../listadoProductos/ProductsView';
import {TabContainer} from '../tabNav/TabContainer'

//? Creando la pila de direcciones.
const Stack = createStackNavigator();

export function MainStack(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <NavigationContainer>
            <Stack.Navigator
                //? Ternaria para activar o desactivar las opciones de retorno y otras opciones de estilo.
                screenOptions = {({route}) => ({
                    headerShown: route.name !== 'Login' ? true : false,
                    headerTintColor: '#fff',
                    headerStyle: {backgroundColor: '#0074e0', height: 70}
                })}
            >
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
                <Stack.Screen name="Configurar licencia" component={TabContainer}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}