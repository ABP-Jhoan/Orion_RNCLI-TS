import React from "react"
import { ScrollView, View, Text, StyleSheet } from "react-native"
import { useRoute } from "@react-navigation/native"
import data from '../../data/clientes.json'
import { NavIconButton } from "../../components/buttons/IconButton"

export const DetalleClient : React.FC = () => {
    const route : any = useRoute()
    const {clientId, details} = route.params
    const datos = data.find((item) => item.id === clientId)
    console.log(JSON.stringify(details))
    
    return(
        <ScrollView>
            <View><Text>Nombre: {datos?.nombre}</Text></View>
            <NavIconButton btnText="Anywhere" iconName="Danger" route="Home" btnType="Config"/>
        </ScrollView>
    )
}

const Style = StyleSheet.create({
    itemContainer:{
        borderBottomColor: "#000"
    }
})