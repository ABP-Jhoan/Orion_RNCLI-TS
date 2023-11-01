import React, {useState} from "react"
import { View, Text, TextInput, StyleSheet } from 'react-native'

interface inputProps{
    labelTitle: string
    placeholder?: string
    textValue: string
    //TODO: Seguir investigando sobre los campos requeridos y cómo validarlos individualmente.
    //error: boolean
    changeFunc?:(text: string) => void
}

export const CommonInput : React.FC<inputProps> = ({labelTitle, placeholder, textValue, changeFunc}) => {
    // let defInputStyles = styles.def
    // if (error) {
    //     defInputStyles = styles.InputError
    // }
    return(
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{labelTitle}</Text>
            <TextInput style={[styles.input]}
                placeholder={placeholder}
                value={textValue}
                onChangeText={changeFunc}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    // def:{
    //     borderBottomColor: '#000',
    // },
    // InputError:{
    //     backgroundColor: '#D8535055'
    // },
    inputContainer:{
        marginTop: 15,
        padding: 15
    },
    label:{
        width: '100%',
        marginBottom: 15,
    },
    input:{
        height: 40,
        borderWidth: 0,
        borderBottomWidth: 1,
        paddingLeft: 5
    }
})