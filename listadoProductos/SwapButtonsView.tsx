import React, {useRef, useState} from 'react'
import { View, StyleSheet, Text, TouchableOpacity, PanResponder, Animated } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
import { iconMap } from '../assets/icons/Icons'
import { ChevronLeft } from 'lucide-react-native'

interface ActionButtonProps{
    icon: keyof typeof iconMap
    btnText: string
    btnFunc?: (text:string) => void
}

const ActionButton : React.FC<ActionButtonProps> = ({icon = 'Config', btnText = 'BTN'}) => {
    const Icon = iconMap[icon]
    return(
        <TouchableOpacity style={Styles.actionBtn}>
            <Icon style={Styles.icon} size={50}/>
            <Text style={{color: '#fff'}}>{btnText}</Text>
        </TouchableOpacity>
    )
}

const SwipeButton : React.FC = () => {
    return(
        <Swipeable renderRightActions={() => [
            <ActionButton icon='Reports2' btnText='DETALLE'/>,
            <ActionButton icon='Home' btnText='DELETE'/>
        ]}>
            <View style={Styles.swipeButton}>
                <Text style={{ fontSize: 24 }}>
                    Hola chato
                </Text>
                <ChevronLeft color='#215877' size={50}/>
            </View>
        </Swipeable>
    )
}

export const SwapView : React.FC = () => {
    return(
        <View style={Styles.container}>
            <SwipeButton/>
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
        backgroundColor: '#215877',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5
    },
    icon:{
        marginLeft: 6,
        color: '#fff'
    }
})