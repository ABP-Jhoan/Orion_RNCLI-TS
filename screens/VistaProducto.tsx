import React, {useState} from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { RadialChart } from '../components/graphs/RadialChart'
import DotLoader from '../components/loaders/Loaders'
import { loading } from '../config/loading'
import { FloatButton, FloatActionButton} from '../components/buttons/FloatingButton'
import { SwitchButton } from '../components/buttons/SwitchButton'
import { useStyles } from '../config/GlobalStyles'
import { ModalView } from '../components/modals/Modal'
import { useAppDispatch } from '../config/Redux/hooks'
import { showModal } from '../config/Redux/Slices/ShowModelSlice'
import { ClientModalForm } from '../components/modals/ClientModalForm'

export const TestPage = () => {
    const themeStyles = useStyles()
    const dispatch = useAppDispatch()
    const actionButtons = [
        <FloatActionButton key={0} btnText='Nuevo Usuario' iconName='User' color='#5fb85f'/>,
        <FloatActionButton key={1} btnText='Actualizar' iconName='Def' color='#5fb2f9'/>
    ]
    return(
        <>
            <View style={[Styles.container, {backgroundColor: themeStyles.backgroundColor}]}>
                {loading() ? <DotLoader/> : <RadialChart/>}
                <SwitchButton/>
                <Button title='Mostrar modal' onPress={() => dispatch(showModal(true))}/>
                <ClientModalForm/>
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