import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Home: React.FC = ({navigation, setIsLoggedIn}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Bienvenido</Text>
            <Text style={styles.commonText} onPress={() => navigation.navigate('Products')}>Lista de productos</Text>
            <Text style={styles.commonText} onPress={() => navigation.navigate('Configurar licencia')}>Vista de pestañas</Text>
            <Text style={styles.logOut} onPress={() => setIsLoggedIn(false)}>Cerrar sesión</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 865,
        padding: 20
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