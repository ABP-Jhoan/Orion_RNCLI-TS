import React from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native"
import { Progress, ProgressFilledTrack } from "@gluestack-ui/themed"
import { useRoute } from "@react-navigation/native"
import data from '../data/clientes.json'
import { DollarSign } from "lucide-react-native"
import { useStyles } from "../config/GlobalStyles"
import { NavIconButton } from "../components/buttons/IconButton"
import { RadialChart } from "../components/graphs/RadialChart"

interface SliderDefaultProps{
    title: string
    color: string
    value: number
    max: number
}

const SliderDefault : React.FC<SliderDefaultProps> = ({title, color, value, max}) => {
    const themeStyles : any = useStyles()
    let promedio : number = (value / max) * 100
    const formatNumber : string = new Intl.NumberFormat().format(value)
    return(
        <View style={Styles.sliderContainer}>
            <View style={[Styles.iconContainer, {backgroundColor: color}]}>
                <DollarSign color="#fff" size={40}/>
            </View>
            <View style={Styles.contentContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color: themeStyles.fontColor}}>{title}</Text>
                    <Text style={{color: color}}>{promedio.toFixed(2)} %</Text>
                </View>
                <Text style={{color: themeStyles.fontColor}}>{formatNumber}</Text>
                <Progress value={promedio} style={{marginTop: 20}}>
                    <ProgressFilledTrack bg={color}/>
                </Progress>
            </View>
        </View>
    )
}

export const ClientView : React.FC = () => {
    const themeStyles = useStyles()
    const route : any = useRoute()
    const {clientId} = route.params
    const datos : {id: number, nombre: string, telf: number, total: number, ventas: number, desc: number, iva: number} = data.find((item) => item.id === clientId)
    
    const ventas : number = (datos?.ventas / datos?.total) * 100
    const desc : number = (datos?.desc / datos?.total) * 100
    const iva : number = (datos?.iva / datos?.total) * 100

    const chartData = [
        {value: ventas, color: '#5fb85f', text: `${ventas.toFixed(1)}%`},
        {value: desc, color: '#f5a142', text: `${desc.toFixed(1)}%`},
        {value: iva, color: '#f5d442', text: `${iva.toFixed(1)}%`},
    ];

    return(
        <View style={[Styles.viewContainer,{backgroundColor: themeStyles.backgroundColor}]}>
            <View style={Styles.graphContainer}>
                <RadialChart data={chartData}  total={datos?.total}/>
                <View style={{width: 300, justifyContent:'center'}}>
                    <NavIconButton id={datos?.id} detalles={chartData} btnText="Ver resumen detallado" iconName="Search2" btnType="Visual" route={"Resumen Detalle Cliente"}/>
                </View>
            </View>
            <ScrollView>
                <SliderDefault title="Venta total" color="#215877" value={datos?.total} max={datos?.total}/>
                <SliderDefault title="Costo ventas" color="#5fb85f" value={datos?.ventas} max={datos?.total}/>
                <SliderDefault title="Desc comerciales" color="#f5a142" value={datos?.desc} max={datos?.total}/>
                <SliderDefault title="IVA" color="#f5d442" value={datos?.iva} max={datos?.total}/>
            </ScrollView>
        </View>
    )
}

const Styles = StyleSheet.create({
    viewContainer:{
        flex: 1,
        padding: 5,
    },
    graphContainer:{
        height: 400,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    sliderContainer:{
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding: 5,
    },
    iconContainer:{
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainer:{
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 15
    }
})