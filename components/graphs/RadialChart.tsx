import React from 'react'
import { View, Text } from 'react-native'
import { PieChart } from "react-native-gifted-charts"

export const RadialChart : React.FC = () => {
    const pieData = [
        {value: 50, color: '#177AD5', text: '50%'},
        {value: 15, color: '#5f009e', text: '15%'},
        {value: 20, color: '#009e54', text: '20%'},
        {value: 15, color: '#00619e', text: '15%'}
    ];
    return(
        <View>
            <PieChart
                textColor='#fff'
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
                      <Text style={{color: '#000', fontSize: 18}}>Total</Text>
                      <Text style={{color: '#000', fontSize: 36}}>90</Text>
                    </View>
                  );
                }}
            />
        </View>
    )
}