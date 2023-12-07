import React, {useState} from 'react'
import { View, StyleSheet, Switch } from 'react-native'
import { RadialChart } from '../components/graphs/RadialChart'
import DotLoader from '../components/loaders/Loaders'
import { loading } from '../config/loading'
import { FloatButton, FloatActionButton} from '../components/buttons/FloatingButton'
import { Button } from 'react-native'
import { SwitchButton } from '../components/buttons/SwitchButton'

export const TestPage = () => {
    const actionButtons = [
        <FloatActionButton key={0} btnText='Nuevo Usuario' iconName='User' color='#5fb85f'/>,
        <FloatActionButton key={1} btnText='Actualizar' iconName='Def' color='#5fb2f9'/>
    ]
    return(
        <>
            <View style={Styles.container}>
                {loading() ? <DotLoader/> : <RadialChart/>}
                <SwitchButton/>
            </View>
            <FloatButton  actionButtons={actionButtons}/>
        </>
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