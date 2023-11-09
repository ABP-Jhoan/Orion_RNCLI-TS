import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface HomeProps{
    navigation : NavigationProp<ParamListBase>
}

export const Home: React.FC<HomeProps> = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Bienvenido</Text>
            <Text style={styles.commonText} onPress={() => navigation.navigate('TestPage')}>Página de pruebas</Text>
            <Text style={styles.commonText} onPress={() => navigation.navigate('TestTwo')}>Página de pruebas 2</Text>
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