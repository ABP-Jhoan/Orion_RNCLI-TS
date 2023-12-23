import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Progress, ProgressFilledTrack } from "@gluestack-ui/themed";
import { useRoute } from "@react-navigation/native";
import data from '../data/clientes.json'
import { DollarSign } from "lucide-react-native";
import { useStyles } from "../config/GlobalStyles";
import { NavIconButton } from "../components/buttons/IconButton";

interface SliderDefaultProps{
    color: string
}

const SliderDefault : React.FC<SliderDefaultProps> = ({color}) => {
    const themeStyles = useStyles()
    return(
        <View style={Styles.sliderContainer}>
            <View style={[Styles.iconContainer, {backgroundColor: color}]}>
                <DollarSign color="#fff" size={40}/>
            </View>
            <View style={Styles.contentContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color: themeStyles.fontColor}}>Desc</Text>
                    <Text style={{color: color}}>45 %</Text>
                </View>
                <Text style={{color: themeStyles.fontColor}}>0</Text>
                <Progress value={45} style={{marginTop: 20}}>
                    <ProgressFilledTrack bg={color}/>
                </Progress>
            </View>
        </View>
    )
}

export const ClientView : React.FC = () => {
    const themeStyles = useStyles()
    const route : any = useRoute()
    const id = route.params?.id
    const datos = data.find((item) => item.id === id)
    return(
        <View style={[Styles.viewContainer,{backgroundColor: themeStyles.backgroundColor}]}>
            <View style={Styles.graphContainer}>
                <Text style={{color: themeStyles.fontColor}}>Cliente: {datos?.nombre}</Text>
                <Text style={{color: themeStyles.fontColor}}>Número: {datos?.telf}</Text>
                <NavIconButton btnText="Ver resumen detallado" iconName="Search2" btnType="Visual" route={"Resumen Detalle Cliente"}/>
            </View>
            <ScrollView>
                <SliderDefault color="#009e1a"/>
                <SliderDefault color="#009e1a"/>
                <SliderDefault color="#009e1a"/>
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
        height: 400
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