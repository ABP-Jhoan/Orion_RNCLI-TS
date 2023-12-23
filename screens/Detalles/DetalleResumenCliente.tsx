import React from "react"
import { ScrollView, View, Text, StyleSheet } from "react-native"
import { useRoute } from "@react-navigation/native"
import data from '../../data/clientes.json'

export const DetalleClient : React.FC = () => {
    const route : any = useRoute()
    const id = route.params?.id
    const datos = data.find((item) => item.id === id)
    return(
        <ScrollView>
            <View><Text>Nombre: {datos?.nombre}</Text></View>
        </ScrollView>
    )
}

const Style = StyleSheet.create({
    itemContainer:{
        borderBottomColor: "#000"
    }
})