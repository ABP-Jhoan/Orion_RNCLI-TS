import React from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { iconMap } from "../../assets/icons/Icons"

interface FloatFunctionButtonProps{
    iconName: keyof typeof iconMap
    btnFunc?: (text:string) => void
    buttonColor?: string
  }

export const FloatFunctionButton : React.FC<FloatFunctionButtonProps> = ({iconName, buttonColor, btnFunc}) => {
    const Icon = iconMap[iconName]
    return(
        <TouchableOpacity style={[Styles.floatButton, {backgroundColor: buttonColor}]} onPress={btnFunc}>
            <Icon color="#fff" size={40}/>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    floatButton:{
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 40,
        right: 10
    }
})