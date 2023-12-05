import React, {useState} from 'react'
import { View, StyleSheet, Switch } from 'react-native'
import { RadialChart } from '../components/graphs/RadialChart'
import DotLoader from '../components/loaders/Loaders'
import { loading } from '../config/loading'
import { RotatingComponent } from '../components/buttons/FloatingButton'

export const TestPage = () => {
    return(
        <View style={Styles.container}>
            {loading() ? <DotLoader/> : <RadialChart/>}
            <RotatingComponent/>
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