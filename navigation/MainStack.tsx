// Importaciones propias de React Native y librerías.
import React, {useState, useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Componentes para crear las rutas (Solo las vistas, no los componentes dentro de ellas).
import { LoginForm } from '../login/Login';
import { DrawNavigation } from "./DrawerNavigation";
import { TestPage } from "../screens/VistaProducto";
import { TestPageTwo } from "../screens/TestTwo";
import { SwapView } from "../screens/SwapButtonsView";
import { ListView } from "../screens/InventoryView";
import { LogView } from "../screens/LogView";
import { useStyles } from "../config/GlobalStyles";
import { InstructionsView } from "../screens/Instructions";
import { BusquedaView } from "../screens/ClienteBustqueda";
import { ClientView } from "../screens/ClientScreen";

//? Creando la pila de direcciones.
const Stack = createStackNavigator();

export function MainStack(){
    const themeStyles = useStyles()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <NavigationContainer>
            <Stack.Navigator
                //? Ternaria para activar o desactivar las opciones de retorno y otras opciones de estilo.
                screenOptions = {({route}) => ({
                    headerShown: route.name == 'Login' || route.name == 'Something' ? false : true,
                    headerTintColor: '#fff',
                    headerStyle: {backgroundColor: themeStyles.secondaryColor, height: 70}
                })}
            >
                {/*
                    //? Ternaria para evaluar si la sesión está iniciada o cerrada.
                    //? Caso 1. La sesión está iniciada y la página principal será el home.
                    //? Caso 2. La sesión está cerrada y mostrará el formulario de login.
                */}
                {isLoggedIn ? (
                    <Stack.Screen name="Something">
                        {props => <DrawNavigation {...props} setIsLoggedIn={setIsLoggedIn}/>}
                    </Stack.Screen>
                ) : (
                    <Stack.Screen name="Login">
                        {props => <LoginForm {...props} setIsLoggedIn={setIsLoggedIn} />}
                    </Stack.Screen>
                )}
                {/*//? Rutas de la navegación principal.*/}
                <Stack.Screen name="PieChart" component={TestPage}/>
                <Stack.Screen name="AriaChart" component={TestPageTwo}/>
                <Stack.Screen name="SwapButtons" component={SwapView}/>
                <Stack.Screen name="Inventory" component={ListView}/>
                <Stack.Screen name="Loader" component={LogView}/>
                <Stack.Screen name="Instructions" component={InstructionsView}/>
                <Stack.Screen name="Busqueda de Clientes" component={BusquedaView}/>
                <Stack.Screen name="Resumen Cliente" component={ClientView} initialParams={{id:0}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}