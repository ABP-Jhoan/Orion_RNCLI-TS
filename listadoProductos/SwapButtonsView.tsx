import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
import { iconMap } from '../assets/icons/Icons'
import { ChevronLeft } from 'lucide-react-native'

interface SwipeActionButtonProps{
    icon: keyof typeof iconMap
    btnText: string
    btnFunc?: (text:string) => void
}

interface SwipeButtonProps{
    btnText : string
    actionButtons : React.ReactElement<SwipeActionButtonProps>[]
}

export const SwipeActionButton : React.FC<SwipeActionButtonProps> = ({icon = 'Config', btnText = 'BTN'}) => {
    const Icon = iconMap[icon]
    return(
        <TouchableOpacity style={Styles.actionBtn}>
            <Icon style={{marginLeft: 11}} color='#fff' size={50}/>
            <Text style={{color: '#fff', textAlign: 'center'}}>{btnText}</Text>
        </TouchableOpacity>
    )
}

const SwipeButton : React.FC<SwipeButtonProps> = ({btnText, actionButtons}) => {
    return(
        <Swipeable renderRightActions={() => [actionButtons]}>
            <View style={Styles.swipeButton}>
                <Text style={{ fontSize: 24 }}>{btnText}</Text>
                <ChevronLeft color='#215877' size={50}/>
            </View>
        </Swipeable>
    )
}

export const SwapView : React.FC = () => {
    //? Arrays para definir los botones que se usarán dentro del componente SwipeButton.
    const array = [
        <SwipeActionButton icon='Reports2' btnText='DETALLE'/>,
        <SwipeActionButton icon='Home' btnText='DELETE'/>
    ]
    const array2 = [
        <SwipeActionButton icon='Log' btnText='OTHER'/>,
        <SwipeActionButton icon='Search' btnText='NO SE'/>
    ]
    return(
        <View style={Styles.container}>
            <SwipeButton btnText='Hola chato' actionButtons={array}/>
            <SwipeButton btnText='Otro botón' actionButtons={array2}/>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        padding: 0,
    },
    swipeButton:{
        backgroundColor: 'white',
        width: '100%',
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 20,
        flexDirection: 'row',
        alignContent: 'center'
    },
    actionBtn:{
        width: 80,
        backgroundColor: '#215877',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5
    }
})