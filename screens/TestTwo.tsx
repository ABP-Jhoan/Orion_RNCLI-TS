import React, {lazy, Suspense} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import data from '../data/chartData.json'
import { LoaderView } from '../components/loaders/LoadingScreen'
import { InfoCard } from '../components/cards/infoCard'
import { useStyles } from '../config/GlobalStyles'
//import AreaChartComp from '../components/graphs/AreaChart'

const HeavyComponent = lazy(() => import('../components/graphs/AreaChart'))

export const TestPageTwo = () => {
    const themeStyles = useStyles()
    return(
        <View style={[Styles.container, {backgroundColor: themeStyles.secondaryColor}]}>
            <Suspense fallback={<LoaderView/>}>
                <HeavyComponent/>
                <ScrollView style={{width:'100%'}}>
                    {data.map((item) => 
                        <InfoCard
                            key={item.id}
                            titulo={item.Nombre}
                            fecha={item.Fecha}
                            content={[
                                <Text key={0} style={{color: themeStyles.fontCardColor}}>VLR/NETO: <Text style={{color: themeStyles.resaltadoSecundario}}>{item['VLR/NETO']}</Text></Text>,
                                <Text key={1} style={{color: themeStyles.fontCardColor}}>SALDO: <Text>{item.SALDO}</Text></Text>,
                                <Text key={2} style={{color: themeStyles.fontCardColor}}>FP: {item.FP}</Text>,
                                <Text key={3} style={{color: themeStyles.fontCardColor}}>USUARIO: {item.USUARIO}</Text>
                            ]}
                        />)
                    }
                </ScrollView>
            </Suspense>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        padding: 0,
        alignItems: 'center'
    }
})