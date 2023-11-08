import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const TestPage = () => {
    return(
        <View style={Styles.container}>
            <Text style={Styles.texto}>Esto es una página de pruebas.</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#215877',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        color: '#fff',
    }
})