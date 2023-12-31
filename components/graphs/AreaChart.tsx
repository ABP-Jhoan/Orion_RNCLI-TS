import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LineChart } from 'react-native-gifted-charts'
import { screenWidth } from 'react-native-gifted-charts/src/utils/constants'
import { useStyles } from '../../config/GlobalStyles'

const AreaChartComp : React.FC = () => {
    const themeStyles = useStyles()
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
        <View style={{padding: 0}}>
            <View style={[Styles.chartContainer, {backgroundColor: themeStyles.secondaryColor}]}>
                {currentData.length == 0 ? <Text>No hay datos que mostrar</Text> :
                    <LineChart
                        isAnimated
                        thickness={2}
                        color="#07BAD1"
                        maxValue={350}
                        noOfSections={3}
                        animateOnDataChange
                        animationDuration={3000}
                        onDataChangeAnimationDuration={300}
                        areaChart
                        yAxisTextStyle={{color: 'lightgray'}}
                        data={currentData}
                        startFillColor={'rgb(84,219,234)'}
                        endFillColor={'rgb(84,219,234)'}
                        startOpacity={0.5}
                        endOpacity={0}
                        spacing={17.5}
                        adjustToWidth={true}
                        backgroundColor={themeStyles.secondaryColor}
                        rulesColor="trznsparent"
                        initialSpacing={5}
                        endSpacing={5}
                        yAxisColor="transparent"
                        xAxisColor="transparent"
                        hideYAxisText
                        hideRules
                        dataPointsColor={'rgb(84,219,234)'}
                        curved
                        height={150}
                        width={screenWidth}
                    />
                }
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 0,
        alignItems: 'center'
    },
    chartContainer: {
        width: '100%',
        height: 176,
        alignItems: 'center',
        padding: 0,
        paddingBottom: 0,
        marginLeft: -12,
    },
    texto: {
        color: '#000',
    },
})

export default AreaChartComp