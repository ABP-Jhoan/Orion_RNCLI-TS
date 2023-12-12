import React from 'react'
import {TextInput, StyleSheet} from 'react-native'
import { useStyles } from '../../config/GlobalStyles'
import { useAppSelector } from '../../config/Redux/hooks'

interface CommonInputProps{
    textValue?: string
    placeholder? : string
    changeFunc? : (text: string) => void
}

export const CommonInput : React.FC<CommonInputProps> = ({textValue, placeholder, changeFunc}) => {
    const theme = useAppSelector((state) => state.theme.theme)
    return(
        <TextInput
            style={[Styles.input, {color: theme ? '#000' : '#8f8f8f'}]}
            placeholder={placeholder}
            placeholderTextColor={theme ? '#000' : '#8f8f8f'}
            value={textValue}
            onChange={changeFunc}
        />
    )
}

const Styles = StyleSheet.create({
    input:{
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: '#8f8f8f8f',
        marginTop: 20
    }
})