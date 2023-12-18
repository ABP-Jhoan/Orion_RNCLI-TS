import React from "react"
import { View, StyleSheet } from "react-native"
import { NavIconButton } from "../components/buttons/NavButtons"
import { useStyles } from "../config/GlobalStyles"

export const Home: React.FC = () => {
    const themeStyles = useStyles()
    return(
        <View style={[styles.container, {backgroundColor: themeStyles.backgroundColor}]}>
            <NavIconButton iconName='Config' btnText='Pie chart' backGroundColor='#851800' route='PieChart'/>
            <NavIconButton iconName='Filter' btnText='Instrucciones' backGroundColor='#ADC34A' route='Instructions'/>
            <NavIconButton iconName='Reports' btnText='Aria chart' backGroundColor='#215877' route='AriaChart'/>
            <NavIconButton iconName='Search' btnText='Swipe buttons' backGroundColor='#00853c' route='SwapButtons'/>
            <NavIconButton iconName='List' btnText='Inventory' backGroundColor='#00553d' route='Inventory'/>
            <NavIconButton iconName='Log' btnText='Log Eventos' backGroundColor='#00153d' route='Loader'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})