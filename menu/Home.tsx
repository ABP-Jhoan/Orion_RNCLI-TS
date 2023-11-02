import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import {ConfButton} from '../components/buttons/configButton'

interface HomeProps{
    navigation : NavigationProp<ParamListBase>;
    setIsLoggedIn : (logged : boolean) => void
}

export const Home: React.FC<HomeProps> = ({navigation, setIsLoggedIn}) => {
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

function alert(arg0: string) {
    throw new Error("Function not implemented.");
}
