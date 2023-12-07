import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavIconButton } from "../components/buttons/NavButtons";

export const Home: React.FC = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Bienvenido</Text>
            <NavIconButton iconName='Config' btnText='Pie chart' backGroundColor='#851800' route='PieChart'/>
            <NavIconButton iconName='Reports' btnText='Aria chart' backGroundColor='#215877' route='AriaChart'/>
            <NavIconButton iconName='Search' btnText='Swipe buttons' backGroundColor='#00853c' route='SwapButtons'/>
            <NavIconButton iconName='List' btnText='Inventory' backGroundColor='#00553d' route='Inventory'/>
            <NavIconButton iconName='Log' btnText='Log Eventos' backGroundColor='#00153d' route='Loader'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 865,
    },
    pageTitle:{
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 10
    },
})