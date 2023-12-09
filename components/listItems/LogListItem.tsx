import React from "react"
import { View, Text, StyleSheet } from "react-native"

interface InfoCardProps{
    id?: number
    fecha: string
    nombreEvento: string
    tipoEvento: string
    usuario: string
}

export const LogListItem : React.FC<InfoCardProps> = ({id, nombreEvento, fecha, tipoEvento, usuario}) => {
    let day = fecha.split("/", 1)
    let monthYear = fecha.substring(3)
    return(
        <View style={Styles.container}>
            <View style={Styles.dateContainer}>
                <Text style={{textAlign: 'center', color: '#215877'}}>{day}</Text>
                <Text style={Styles.dateText}>{monthYear}</Text>
            </View>
            <View style={Styles.textContainer}>
                <Text style={Styles.importantText}>{nombreEvento}</Text>
                <Text style={Styles.commonText}>TIPO: {tipoEvento}</Text>
                <Text style={Styles.commonText}>USUARIO: <Text>{usuario}</Text></Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        flex: 0,
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 10
    },
    textContainer:{
        width: '100%',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#8f8f8f8f',
        paddingBottom: 15,
        paddingTop: 10
    },
    dateContainer:{
        width: '25%',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5
    },
    importantText: {
        color: '#215877',
        fontSize: 15
    },
    dateText:{
        width: '100%',
        textAlign: 'center',
        color: '#8f8f8f'
    },
    commonText: {
        color: '#8f8f8f'
    }
})