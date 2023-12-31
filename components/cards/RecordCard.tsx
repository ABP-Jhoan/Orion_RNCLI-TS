import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { iconMap } from '../../assets/icons/Icons'

interface RecordCardProps{
    iconName: keyof typeof iconMap
    route: string
    titulo: string
    colorTitle: string
}

export const RecordCard : React.FC<RecordCardProps> = ({iconName = 'Def',route, titulo, colorTitle}) => {
    const Icon = iconMap[iconName]
    const navigation = useNavigation()
    return(
        <TouchableOpacity style={[Styles.cardContainer]} onPress={() => navigation.navigate(route)}>
            <Text style={[Styles.cardTitle, {backgroundColor: colorTitle}]}>{titulo}</Text>
            <View style={Styles.info}>
                <Icon color='#8f8f8f' size={60}/>
                <Text style={{fontSize: 18, marginLeft: 10}}>Total: <Text style={{color: colorTitle}}>000</Text></Text>
            </View>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    cardContainer:{
        width: '100%',
        height: 120,
        borderWidth: 1,
        borderColor: '#8f8f8f8f',
        flex: 1,
        margin: 3
    },
    cardTitle:{
        width: '100%',
        color: '#fff',
        height: 50,
        textAlignVertical: 'center',
        fontSize: 20,
        paddingLeft: 10
    },
    info:{
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
})