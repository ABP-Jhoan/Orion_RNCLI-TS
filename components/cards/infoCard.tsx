import React from "react"
import { View, Text, StyleSheet } from "react-native"

interface InfoCardProps{
    id?: number
    nombreVendedor: string
    fecha: string
    valor: string
    saldo: string
    fp: string
    usuario: number
}

export const InfoCard : React.FC<InfoCardProps> = ({id, nombreVendedor, fecha, fp, saldo, usuario, valor}) => {
    let day = fecha.split("/", 1)
    let monthYear = fecha.substring(3)
    return(
        <View style={Styles.container}>
            <View style={Styles.dateContainer}>
                <Text style={{textAlign: 'center'}}>{day}</Text>
                <Text style={Styles.dateText}>{monthYear}</Text>
            </View>
            <View>
                <Text style={Styles.importantText}>{nombreVendedor}</Text>
                <Text style={Styles.commonText}>VLR/NETO: <Text style={{color: '#5fb2f9'}}>{valor}</Text></Text>
                <Text style={Styles.commonText}>SALDO: <Text>{saldo}</Text></Text>
                <Text style={Styles.commonText}>FP: {fp}</Text>
                <Text style={Styles.commonText}>USUARIO: {usuario}</Text>
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
    dateContainer:{
        width: '25%',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5
    },
    importantText: {
        color: '#215877'
    },
    dateText:{
        width: '100%',
        textAlign: 'center',
        color: '#8f8f8f8f'        
    },
    commonText: {
        color: '#8f8f8f8f'
    }
})