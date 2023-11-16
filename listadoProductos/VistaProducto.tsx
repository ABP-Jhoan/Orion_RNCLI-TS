import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RadialChart } from '../components/graphs/RadialChart'

export const TestPage = () => {
    return(
        <View style={Styles.container}>
            <RadialChart/>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: 10,
        alignItems: 'center',
    },
    texto: {
        color: '#fff',
    }
})