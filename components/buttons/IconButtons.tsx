import React, {useState} from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { iconMap } from '../../assets/icons/Icons'

interface NavIconButtonProps{
    iconName: keyof typeof iconMap
    btnText: string
    navigate: NavigationProp<ParamListBase>
    route: string
}

export const NavIconButton : React.FC<NavIconButtonProps> = ({iconName = "Def", btnText = "New Button", navigate, route}) => {
    const Icon = iconMap[iconName]
    function navegar() {
        navigate.navigate(route)
    }
    return(
        <TouchableOpacity style={styles.container} onPress={navegar}>
            <Icon style={styles.icon} size={20}/>
            <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 20,
        height: 50,
        width: '100%',
        backgroundColor: '#a7bbc6',
        borderColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 5
    },
    btnText:{
        fontSize: 20,
        color: '#000'
    },
    icon:{
        color: '#000',
        margin: 10
    },
})