import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { useStyles } from "../../config/GlobalStyles"

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
    const themeStyles = useStyles()
    let day = fecha.split("/", 1)
    let monthYear = fecha.substring(3)
    return(
        <View style={[Styles.container, {backgroundColor: themeStyles.backgroundColor}]}>
            <View style={Styles.dateContainer}>
                <Text style={{textAlign: 'center',  color: themeStyles.resaltadoPrincipal}}>{day}</Text>
                <Text style={[Styles.dateText, {color: themeStyles.fontCardColor}]}>{monthYear}</Text>
            </View>
            <View>
                <Text style={{color: themeStyles.resaltadoPrincipal}}>{nombreVendedor}</Text>
                <Text style={{color: themeStyles.fontCardColor}}>VLR/NETO: <Text style={{color: themeStyles.resaltadoSecundario}}>{valor}</Text></Text>
                <Text style={{color: themeStyles.fontCardColor}}>SALDO: <Text>{saldo}</Text></Text>
                <Text style={{color: themeStyles.fontCardColor}}>FP: {fp}</Text>
                <Text style={{color: themeStyles.fontCardColor}}>USUARIO: {usuario}</Text>
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
    dateText:{
        width: '100%',
        textAlign: 'center',
    }
})