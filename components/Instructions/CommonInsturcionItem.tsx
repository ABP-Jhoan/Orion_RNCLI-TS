import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useStyles } from "../../config/GlobalStyles";

interface CommonInstructionItemProps{
    text : string
}

export const CommonInstructionItem : React.FC<CommonInstructionItemProps> = ({text}) => {
    const themeStyles = useStyles()
    return(
        <View style={[Styles.instructionContainer, {borderBottomColor: themeStyles.resaltadoSecundario}]}>
            <Text style={{color: themeStyles.fontColor}}>{text}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    instructionContainer:{
        borderWidth: 0,
        borderBottomWidth: 1,
        paddingBottom: 20,
    }
})