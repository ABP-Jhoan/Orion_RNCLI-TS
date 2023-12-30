import React from "react"
import { TouchableOpacity, View, Text, StyleSheet } from "react-native"
import { useStyles } from "../../config/GlobalStyles"

interface InfoCardProps{
    id?: number
    titulo: string
    fecha: string
    content: React.ReactElement[]
}

export const InfoCard : React.FC<InfoCardProps> = ({id, titulo, fecha, content}) => {
    const themeStyles = useStyles()
    let day = fecha.split("/", 1)
    let monthYear = fecha.substring(3)
    return(
        <TouchableOpacity style={[Styles.container, {backgroundColor: themeStyles.backgroundColor}]}>
            <View style={Styles.dateContainer}>
                <Text style={{textAlign: 'center',  color: themeStyles.resaltadoPrincipal}}>{day}</Text>
                <Text style={[Styles.dateText, {color: themeStyles.fontCardColor}]}>{monthYear}</Text>
            </View>
            <View>
                <Text style={{color: themeStyles.resaltadoPrincipal}}>{titulo}</Text>
                {content}
            </View>
        </TouchableOpacity>
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