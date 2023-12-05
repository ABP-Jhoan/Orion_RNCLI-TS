import React from 'react'
import { View, StyleSheet} from 'react-native'
import { LogListItem } from '../components/listItems/LogListItem'
import { FilterViewHeader } from '../components/Headers/FiltersViewHeader'
import data from '../data/log.json'

export const LogView : React.FC = () => {
    return(
        <View>
            <FilterViewHeader count={data}/>
            {data.map((log) => (
                <LogListItem key={log.id} fecha={log.fecha} nombreEvento={log.evento} tipoEvento={log.tipo} usuario={log.usuario}/>
            ))}
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        padding: 10
    }
})