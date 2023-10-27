//? Imports propios de React y librerías.
import React, { useState } from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {Eye, EyeOff} from "lucide-react-native";
import {iconMap} from '../../assets/icons/Icons'

//? Definición de propiedades y tipos que recibirá el componente.
interface InputProps{
    iconName: keyof typeof iconMap
    iconEye?: boolean
    iconSize?: number
    placeHolder?:string
    secureTextEntry: boolean
    textValue?: string
    changeFunc?:(text: string) => void
}
export const InputIcon : React.FC<InputProps> = ({iconName = 'User', iconSize = 30, placeHolder, secureTextEntry, textValue, iconEye, changeFunc}) => {
    //? Constante para importar iconos predeterminados de manera sancilla.
    const Icon = iconMap[iconName]
    const [text, setText] = useState(secureTextEntry)
    //? Constante para cambiar el icono en el campo de la contraseña (importo solo los iconos necesarios).
    const EyeIcon = text ? Eye : EyeOff

    function showPss() {
        if (iconEye) {
            setText(true)
            iconEye = false
        }else{
            setText(false)
            iconEye = true
        }
    }
    return(
        <View style={styles.container}>
            <Icon style={styles.icon} size={iconSize}/>
            <TextInput style={styles.textArea}
                placeholder={placeHolder}
                secureTextEntry={text}
                value={textValue}
                onChangeText={changeFunc}
            />
            {iconEye ? 
                <TouchableOpacity onPress={showPss}>
                    <EyeIcon style={styles.icon} size={iconSize}/>
                </TouchableOpacity>
                : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 20,
        width: '100%',
        backgroundColor: '#a7bbc6',
        borderColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10
    },
    icon:{
        color: '#fff',
        margin: 10
    },
    textArea:{
        color: '#215877',
        width: '70%',
    }
})