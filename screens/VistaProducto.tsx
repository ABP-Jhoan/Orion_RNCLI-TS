import React, { useState } from 'react'
import { View, StyleSheet, Button, Alert } from 'react-native'
import { FloatButton, FloatActionButton} from '../components/buttons/FloatingButton'
import { SwitchButton } from '../components/buttons/SwitchButton'
import { useStyles } from '../config/GlobalStyles'
import { DatePicker } from '../components/selectors/DateSelector'

export const TestPage = () => {
    const themeStyles = useStyles()
    const [fechaInicio, setFechaInicio] = useState<Date|null>(null)
    const [fechaFinal, setFechaFinal] = useState<Date|null>(null)

    function handleSubmit(){
        let diaInicio = fechaInicio?.getDate()
        let diaFinal = fechaFinal?.getDate()
        if (diaInicio > diaFinal) {
            Alert.alert("El día de INICIO no puede ser mayor al día de FIN.")
        }
        else{
            Alert.alert("Todo chimbita.")
        }
    }

    const actionButtons = [
        <FloatActionButton key={0} btnText='Nuevo Usuario' iconName='User' color='#5fb85f'/>,
        <FloatActionButton key={1} btnText='Actualizar' iconName='Def' color='#5fb2f9'/>
    ]
    return(
        <>
            <View style={[Styles.container, {backgroundColor: themeStyles.backgroundColor}]}>
                <SwitchButton/>
                <DatePicker label='DatePicker' pickerFunc={(date) => setFechaInicio(date)}/>
                <DatePicker label='DatePicker' pickerFunc={(date) => setFechaFinal(date)}/>
                <Button title='Submit' onPress={handleSubmit}/>
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