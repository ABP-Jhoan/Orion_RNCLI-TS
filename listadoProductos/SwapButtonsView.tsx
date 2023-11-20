import React, { useRef } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
import { iconMap } from '../assets/icons/Icons'
import { ChevronLeft } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native';

//! PROP interfaces de los componentes
//? Botón que desencadena una acción dentro de la app.
interface SwipeActionButtonProps{
    icon: keyof typeof iconMap
    btnText: string
    btnFunc?: (text:string) => void
}
//? Botón que lleva aa otra vista dentro de la app.
interface SwipeViewButtonProps{
    icon: keyof typeof iconMap
    btnText : string
    route: string
}

interface SwipeButtonProps{
    btnText : string
    actionButtons : React.ReactElement<SwipeActionButtonProps>[]
}

export const SwipeActionButton : React.FC<SwipeActionButtonProps> = ({icon = 'Config', btnText = 'BTN', btnFunc}) => {
    const Icon = iconMap[icon]
    return(
        <TouchableOpacity style={Styles.actionBtn} onPress={() => btnFunc}>
            <Icon style={{marginLeft: 11}} color='#fff' size={50}/>
            <Text style={{color: '#fff', textAlign: 'center'}}>{btnText}</Text>
        </TouchableOpacity>
    )
}
export const SwipeViewButton : React.FC<SwipeViewButtonProps> = ({icon = 'Config', btnText = 'BTN', route}) => {
    const navigation = useNavigation()
    const Icon = iconMap[icon]
    return(
        <TouchableOpacity style={Styles.actionBtn} onPress={() => navigation.navigate(route)}>
            <Icon style={{marginLeft: 11}} color='#fff' size={50}/>
            <Text style={{color: '#fff', textAlign: 'center'}}>{btnText}</Text>
        </TouchableOpacity>
    )
}

const SwipeButton : React.FC<SwipeButtonProps> = ({btnText, actionButtons}) => {
    const swipeActionTrigger = useRef(null)
    function openActions() {
        if (swipeActionTrigger.current) {
            swipeActionTrigger.current.openRight()
        }
    }
    return(
        <Swipeable renderRightActions={() => [actionButtons]} ref={swipeActionTrigger}>
            <View style={Styles.swipeButton}>
                <Text style={{ fontSize: 24 }}>{btnText}</Text>
                <TouchableOpacity onPress={openActions}>
                    <ChevronLeft color='#215877' size={50}/>
                </TouchableOpacity>
            </View>
        </Swipeable>
    )
}
export const SwapView : React.FC = () => {
    function something() {
        alert('Doing something')
    }
    //? Arrays para definir los botones que se usarán dentro del componente SwipeButton.
    const array = [
        <SwipeActionButton icon='Reports2' btnText='DETALLE' btnFunc={something}/>,
        <SwipeActionButton icon='Home' btnText='DELETE'/>,
        <SwipeViewButton icon='Config' btnText='WHERE' route='Home'/>
    ]
    const array2 = [
        <SwipeActionButton icon='Log' btnText='OTHER'/>,
        <SwipeActionButton icon='Search' btnText='NO SE' btnFunc={something}/>
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