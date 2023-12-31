import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const btnTypes = {
    Config: 'Config',
    Visual: 'Visual',
    Pricipal: 'Pricipal'
}

interface buttonProps{
    btnText: string
    btnClass: keyof typeof btnTypes
    btnFunc: () => void
}

export const ConfButton : React.FC<buttonProps> = ({btnText, btnClass, btnFunc}) => {
    let btnStyles = styles.def
    if (btnClass == 'Config') {
        btnStyles = styles.config
    }
    else if(btnClass == 'Visual') {
        btnStyles = styles.visual
    }
    else if(btnClass == 'Pricipal') {
        btnStyles = styles.Pricipal
    }
    return(
        <TouchableOpacity style={[styles.defStyles, btnStyles]} onPress={btnFunc}>
            <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    def:{
        backgroundColor: '#fff'
    },
    defStyles:{
        justifyContent: 'center',
        height: 50,
        borderRadius: 5,
        marginBottom: 5,
        marginTop: 5,
    },
    config:{
        backgroundColor: '#5eb85f',
    },
    visual:{
        backgroundColor: '#5fb2f9',
    },
    Pricipal:{
        backgroundColor: '#215877',
    },
    btnText:{
        textAlign: 'center',
        fontSize: 20,
        color: '#fff'
    }
})