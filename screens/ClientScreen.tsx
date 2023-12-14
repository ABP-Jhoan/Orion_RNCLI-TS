import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Progress, ProgressFilledTrack } from "@gluestack-ui/themed";
import { useRoute } from "@react-navigation/native";
import data from '../data/clientes.json'
import { DollarSign } from "lucide-react-native";

interface SliderDefaultProps{
    color: string
}

const SliderDefault : React.FC<SliderDefaultProps> = ({color}) => {
    return(
        <TouchableOpacity style={Styles.sliderContainer}>
            <View style={[Styles.iconContainer, {backgroundColor: color}]}>
                <DollarSign color="#fff" size={40}/>
            </View>
            <View style={Styles.contentContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>Desc</Text>
                    <Text style={{color: color}}>45 %</Text>
                </View>
                <Text>0</Text>
                <Progress value={46}>
                    <ProgressFilledTrack bg={color}/>
                </Progress>
            </View>
        </TouchableOpacity>
    )
}

export const ClientView : React.FC = () => {
    const route = useRoute()
    const id = route.params?.id
    const datos = data.find((item) => item.id === id)
    return(
        <View style={{flex: 1, padding: 5}}>
            <Text>Cliente: {datos?.nombre}</Text>
            <Text>Número: {datos?.telf}</Text>
            
            <SliderDefault color="#009e1a"/>
        </View>
    )
}

const Styles = StyleSheet.create({
    sliderContainer:{
        width: '100%',
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 5
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