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
            <View style={{justifyContent: 'center', alignContent: 'center', padding: 5}}>
                <Text style={{textAlign: 'center'}}>{day}</Text>
                <Text style={Styles.commonText}>{monthYear}</Text>
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
    importantText: {
        color: '#215877'
    },
    commonText: {
        color: '#8f8f8f8f'
    }
})