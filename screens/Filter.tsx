import React from "react"
import { ScrollView, View, TouchableOpacity, Text, StyleSheet } from "react-native"
import { Plus, Minus } from "lucide-react-native"
import { LabeledSelector } from "../components/selectors/LabeledSelector"
import { useStyles } from "../config/GlobalStyles"

export const FilterView : React.FC = () => {
    const themeStyles = useStyles()
    return(
        <ScrollView style={[{backgroundColor: themeStyles.backgroundColor}]}>
            <View style={Styles.ButtonsContainer}>
                <TouchableOpacity style={[Styles.filterButton, Styles.addBtn]}><Plus color="#fff" size={30}/></TouchableOpacity>
                <TouchableOpacity style={[Styles.filterButton, Styles.delBtn]}><Minus color="#fff" size={30}/></TouchableOpacity>
                <TouchableOpacity style={Styles.showBtn}><Text style={{color: '#fff'}}>Mostrar Artículos</Text></TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    ButtonsContainer:{
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 15,
    },
    showBtn:{
        margin: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5fb2f9',
        padding: 10
    },
    filterButton:{
        width: 50,
        height: 50,
        margin: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addBtn:{
        backgroundColor: '#5fb85f'
    },
    delBtn:{
        backgroundColor: '#d85350'
    },
})