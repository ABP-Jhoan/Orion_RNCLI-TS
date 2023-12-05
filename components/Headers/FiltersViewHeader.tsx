import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface FilterViewHeaderProps{
    count : Object[]
}

export const FilterViewHeader : React.FC<FilterViewHeaderProps> = ({count}) => {
    return(
        <View style={Styles.header}>
            <View>
                <Text style={Styles.texto}>Filtros aplicados:</Text>
            </View>
            <View>
                <Text style={Styles.texto}>Resultado:</Text>
                <Text style={Styles.texto}># Filtros: </Text>
                <Text style={Styles.texto}># Registros: {count.length}/{count.length}</Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 150,
        backgroundColor: '#215877',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 20
    },
    texto:{
        color: '#fff'
    }
})