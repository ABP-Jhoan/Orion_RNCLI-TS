import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native'
import { InfoCard } from '../components/cards/infoCard';
import { AreaChartComp } from '../components/graphs/AreaChart';
import { ScrollView } from 'react-native-gesture-handler';
import data from '../data/chartData.json'
import DotLoader from '../components/loaders/Loaders';
import { loading } from '../config/loading'

export const TestPageTwo = () => {
    return(
        <View style={Styles.container}>
        {loading() ? <DotLoader/> :
        <>
            <AreaChartComp/>
            <ScrollView style={{width:'100%'}}>
                {data.map((item) => 
                    <InfoCard
                        key={item.id}
                        nombreVendedor={item.Nombre}
                        fecha={item.Fecha}
                        valor={item['VLR/NETO']}
                        saldo={item.SALDO}
                        fp={item.FP}
                        usuario={item.USUARIO}
                    />)
                }
            </ScrollView>
        </>
        }
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
        padding: 0,
        alignItems: 'center'
    }
})