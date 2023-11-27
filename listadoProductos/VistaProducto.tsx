import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RadialChart } from '../components/graphs/RadialChart'
import DotLoader from '../components/loaders/Loaders'
import { loading } from '../config/loading'

export const TestPage = () => {
    return(
        <View style={Styles.container}>
            {loading() ? <DotLoader/> : <RadialChart/>}
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