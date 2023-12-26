import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { iconMap } from "../../assets/icons/Icons"
import { useNavigation } from "@react-navigation/native"

const btnTypes = {
    Config: 'Config',
    Visual: 'Visual'
}

interface FunctionalIconButtonProps{
    btnText : string
    iconName : keyof typeof iconMap
    btnType? : keyof typeof btnTypes
    btnFunc? : () => void
}
interface NavIconButtonProps{
    id? : number
    btnText : string
    iconName : keyof typeof iconMap
    btnType? : keyof typeof btnTypes
    route : string
}

export const FunctionalIconButton : React.FC<FunctionalIconButtonProps> = ({btnText = 'Default', btnType, iconName = 'def', btnFunc}) => {
    const Icon = iconMap[iconName]
    let backType = "#fff"
    if (btnType == 'Config') {
        backType = "#5eb85f"
    }
    else if(btnType == 'Visual') {
        backType = "#5fb2f9"
    }
    return(
        <TouchableOpacity style={[Styles.container, {backgroundColor: backType}]}>
            <Icon color="#fff" size={30}/>
            <Text style={Styles.buttonText}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export const NavIconButton : React.FC<NavIconButtonProps> = ({id, btnText = 'Default', btnType, iconName = 'def', route}) => {
    const navigation = useNavigation()
    const Icon = iconMap[iconName]
    let backType = "#fff"
    if (btnType == 'Config') {
        backType = "#5eb85f"
    }
    else if(btnType == 'Visual') {
        backType = "#5fb2f9"
    }
    return(
        <TouchableOpacity style={[Styles.container, {backgroundColor: backType}]} onPress={() => navigation.navigate(route, {clientId: id})}>
            <Icon color="#fff" size={30}/>
            <Text style={Styles.buttonText}>{btnText}</Text>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    container:{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText:{
        marginLeft: 10,
        color: '#fff',
        fontSize: 20
    }
})