import React from 'react'
import { View, Text } from 'react-native'
import { PieChart } from "react-native-gifted-charts"

export const RadialChart : React.FC = () => {
    const pieData = [
        {value: 50, color: '#177AD5', text: '50%'},
        {value: 30, color: '#79D2DE', text: '30%'},
        {value: 20, color: '#ED6665', text: '20%'},
    ];
    return(
        <View>
            <PieChart
                strokeColor="white"
                strokeWidth={4}
                donut
                data={pieData}
                innerCircleColor="#fff"
                innerCircleBorderWidth={4}
                innerCircleBorderColor={'white'}
                showValuesAsLabels={true}
                showText
                textSize={18}
                showTextBackground={false}
                centerLabelComponent={() => {
                  return (
                    <View>
                      <Text style={{color: '#000', fontSize: 36}}>90</Text>
                      <Text style={{color: '#000', fontSize: 18}}>Total</Text>
                    </View>
                  );
                }}
            />
        </View>
    )
}