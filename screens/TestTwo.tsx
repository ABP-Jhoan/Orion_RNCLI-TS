import React, {lazy, Suspense} from 'react'
import { View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import data from '../data/chartData.json'
import { LoaderView } from '../components/loaders/LoadingScreen'
import { InfoCard } from '../components/cards/infoCard'
//import AreaChartComp from '../components/graphs/AreaChart'

const HeavyComponent = lazy(() => import('../components/graphs/AreaChart'))

export const TestPageTwo = () => {
    return(
        <View style={Styles.container}>
            <Suspense fallback={<LoaderView/>}>
                <HeavyComponent/>
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
            </Suspense>
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