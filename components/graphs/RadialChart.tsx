import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { PieChart } from "react-native-gifted-charts"

interface RadialChartProps{
  data? : [{value: number, color: string, text: string}]
  total : number | undefined
}

export const RadialChart : React.FC<RadialChartProps> = ({data = [], total = 0}) => {
    const formatNumber : string = new Intl.NumberFormat().format(total)
    return(
        <View style={{margin: 10}}>
            <PieChart
                textColor='#fff'
                strokeColor="white"
                strokeWidth={0}
                donut
                data={data}
                innerCircleColor="#fff"
                innerCircleBorderWidth={0}
                innerCircleBorderColor={'white'}
                showValuesAsLabels={true}
                showText
                textSize={18}
                showTextBackground={false}
                labelsPosition='outward'
                centerLabelComponent={() => {
                  return (
                    <View>
                      <Text style={[ Styles.centerLabel,{fontSize: 18}]}>Total</Text>
                      <Text style={[ Styles.centerLabel,{fontSize: 16}]}>{formatNumber}</Text>
                    </View>
                  );
                }}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
  centerLabel: {
    color: '#000',
    fontSize: 18,
    width: '100%',
    textAlign: 'center'
  }
})