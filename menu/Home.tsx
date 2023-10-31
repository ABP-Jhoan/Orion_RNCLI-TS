import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {ConfButton} from '../components/buttons/configButton'

export const Home: React.FC = ({navigation, setIsLoggedIn}) => {
    function sayHello() {
        alert('Hola chato')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Bienvenido</Text>
            <Text style={styles.commonText} onPress={() => navigation.navigate('Products')}>Lista de productos</Text>
            <Text style={styles.commonText} onPress={() => navigation.navigate('Configurar licencia')}>Vista de pestañas</Text>
            <Text style={styles.logOut} onPress={() => setIsLoggedIn(false)}>Cerrar sesión</Text>
            <ConfButton btnText="Botoncito" btnClass="Config" btnFunc={sayHello}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 865,
        padding: 20
    },
    miniContainer:{
        marginTop: 15,
        backgroundColor: '#d6d6d6',
        borderRadius: 10
    },
    pageTitle:{
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 50
    },
    commonText:{
        color: 'white',
        backgroundColor: '#0074e0',
        padding: 10,
        fontSize: 20,
        borderRadius: 10,
        marginBottom: 5
    },
    logOut:{
        color: 'white',
        backgroundColor: '#e00b00',
        padding: 10,
        fontSize: 20,
        borderRadius: 10
    }
})