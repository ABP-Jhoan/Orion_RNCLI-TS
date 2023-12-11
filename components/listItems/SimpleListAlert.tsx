import React from "react"
import {View, Text, StyleSheet} from 'react-native'

interface SimpleListItemProps{
    PName: string
    Codigo: string
    Grupo?: string
    UE: string
    Bodega: string
    Stock: number
    Alerta: number
}

const SimpleListItem : React.FC<SimpleListItemProps> = ({PName,Codigo,Grupo,UE,Bodega,Stock,Alerta}) => {
    return(
        <View style={Style.container}>
            <Text style={Style.title}>{PName}</Text>
            <Text>Código: {Codigo}</Text>
            <View style={{flexDirection: 'row'}}>
                <Text>Grupo: {Grupo} </Text>
                <Text>UE:{UE}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text>{Bodega}: {Stock} </Text>
                <Text>Alerta: <Text style={{color: 'red'}}>{Alerta}</Text></Text>
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    container:{
        width: '100%',
        marginBottom: 20,
        paddingLeft: 5
    },
    title:{
        fontSize: 17,
        color: '#215877'
    }
})

export default SimpleListItem