import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useStyles } from "../../config/GlobalStyles";
import { iconMap } from "../../assets/icons/Icons";
import { useDispatch } from "react-redux";

interface ButtonInstructionItemProps{
    iconName : keyof typeof iconMap
    buttonColor: string
    text : string
    btnFunc : (text : string) => void
}

export const ButtonInstructionItem : React.FC<ButtonInstructionItemProps> = ({iconName, buttonColor, text, btnFunc}) => {
    const Icon = iconMap[iconName]
    const themeStyles = useStyles()
    return(
        <View style={[Styles.instructionContainer, {borderBottomColor: themeStyles.resaltadoSecundario}]}>
            <Text style={{color: themeStyles.fontColor}}>{text}</Text>
            <TouchableOpacity style={[Styles.instructionButton, {backgroundColor: buttonColor}]} onPress={btnFunc}>
                <Icon color="#fff" size={40}/>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    instructionContainer:{
        borderWidth: 0,
        borderBottomWidth: 1,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    instructionButton:{
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    }
})