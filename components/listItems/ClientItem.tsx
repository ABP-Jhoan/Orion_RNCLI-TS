import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useStyles } from '../../config/GlobalStyles'

interface ClientItemProps{
    id: number
    clientName: string
    telf: number
    route: string
    backGroundColor: string
}

export const ClientItem : React.FC<ClientItemProps> = ({id, clientName = "Default", telf, backGroundColor, route}) => {
    const themeStyles = useStyles()
    const navigate = useNavigation()
    return(
        <TouchableOpacity style={styles.container} onPress={() => navigate.navigate(route, {clientId: id})}>
            <View style={[styles.iconContainer, {backgroundColor: backGroundColor}]}>
                <Text style={{color: themeStyles.resaltadoPrincipal}}>{id}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.btnText, {color: themeStyles.resaltadoPrincipal}]}>{clientName}</Text>
                <Text style={{fontSize: 15, color: themeStyles.fontColor}}>Identificación: {id}</Text>
                <Text style={{fontSize: 15, color: themeStyles.fontColor}}>Telfs: {telf}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 90,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer:{
        width: '75%',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: '#8f8f8f8f',
        justifyContent: 'space-between',
        padding: 10,
    },
    btnText:{
        fontSize: 20,
    },
    iconContainer:{
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})