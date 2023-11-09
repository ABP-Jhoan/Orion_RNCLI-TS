import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LineChart } from 'react-native-gifted-charts'
import { screenWidth } from 'react-native-gifted-charts/src/utils/constants';
import { InfoCard } from '../components/cards/infoCard';
import { ScrollView } from 'react-native-gesture-handler';
import data from '../data/chartData.json'

export const TestPageTwo = () => {
    const latestData = [
        {value: 100,},
        {value: 120,},
        {value: 210,},
        {value: 250,},
        {value: 320,},
        {value: 310,},
        {value: 270,},
        {value: 240,},
        {value: 130,},
        {value: 120,},
        {value: 100,},
        {value: 210,},
        {value: 270,},
        {value: 240,},
        {value: 120,},
        {value: 100,},
        {value: 210,},
        {value: 20, },
        {value: 100,},
        
        {value: 300,},
        {value: 120,},
        {value: 10,},
        {value: 220, },
        {value: 265,},
    ];
    const [currentData, setCurrentData] = useState(latestData)
    //TODO: Hacer que el gráfico cargue más despacio para que se pueda ver la animación.
    return(
        <View style={Styles.container}>
            <View style={{padding: 0}}>
                <View style={Styles.chartContainer}>
                    <LineChart
                        isAnimated
                        thickness={2}
                        color="#07BAD1"
                        maxValue={350}
                        noOfSections={3}
                        animateOnDataChange
                        animationDuration={2000}
                        onDataChangeAnimationDuration={300}
                        areaChart
                        yAxisTextStyle={{color: 'lightgray'}}
                        data={currentData}
                        //hideDataPoints
                        startFillColor={'rgb(84,219,234)'}
                        endFillColor={'rgb(84,219,234)'}
                        startOpacity={0.5}
                        endOpacity={0}
                        spacing={22}
                        backgroundColor="#215877"
                        rulesColor="trznsparent"
                        //rulesType="solid"
                        initialSpacing={0}
                        endSpacing={0}
                        yAxisColor="transparent"
                        xAxisColor="transparent"

                        hideYAxisText
                        hideRules
                        dataPointsColor={'rgb(84,219,234)'}
                        curved
                        height={150}
                        width={screenWidth}
                    />
                </View>
            </View>
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
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
        padding: 0,
        alignItems: 'center'
    },
    chartContainer: {
        width: '100%',
        height: 176,
        backgroundColor: '#215877',
        alignItems: 'center',
        padding: 0,
        paddingBottom: 0,
    },
    texto: {
        color: '#000',
    },
})