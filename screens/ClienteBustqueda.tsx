import React from "react";
import { View, StyleSheet } from "react-native";
import { useStyles } from "../config/GlobalStyles";
import { CommonInput } from "../components/inputs/Commoninput";

export const BusquedaView : React.FC = () => {
    const themeStyles = useStyles()
    return(
        <View style={[Styles.container, {backgroundColor: themeStyles.backgroundColor}]}>
            <CommonInput placeholder="Razón Social/Apellido"/>
            <CommonInput placeholder="Contacto"/>
            <CommonInput placeholder="Identificación"/>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        padding: 15,
        flex: 1
    }
})