import React, { useRef, useState,useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Switch } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
import { iconMap } from '../assets/icons/Icons'
import { ChevronLeft, ChevronRight } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native';

//! PROP interfaces de los componentes
//? Botón que desencadena una acción dentro de la app.
interface SwipeActionButtonProps{
    icon: keyof typeof iconMap
    btnText: string
    btnFunc?: (text:string) => void
}
//? Botón que lleva a otra vista dentro de la app.
interface SwipeViewButtonProps{
    icon: keyof typeof iconMap
    btnText : string
    route: string
}
//? Interfaz del botón
interface SwipeButtonProps{
    btnText : string
    actionButtons : React.ReactElement<SwipeActionButtonProps>[]
}
interface UserSwipeButtonProps{
    iconName: keyof typeof iconMap
    user : string
    role: string
    status: string
    actionButtons : React.ReactElement<SwipeActionButtonProps>[]
}

interface DefaultUserActionButtonProps{
    btnText: string
    btnFunc?: (text:string) => void
}

//? Botón que ejecuta una función.
export const SwipeActionButton : React.FC<SwipeActionButtonProps> = ({icon = 'Config', btnText = 'BTN', btnFunc}) => {
    const Icon = iconMap[icon]
    return(
        <TouchableOpacity style={Styles.actionBtn} onPress={() => btnFunc}>
            <Icon style={{marginLeft: 11}} color='#fff' size={50}/>
            <Text style={{color: '#fff', textAlign: 'center'}}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export const DefaultUserActionButton : React.FC<DefaultUserActionButtonProps> = ({btnText = 'BTN', btnFunc}) => {
    const [isEnabled, setIsEnabled] = useState(true);

    useEffect(() => {
        // Actualizar el estado del Switch cuando cambie la prop btnText
        setIsEnabled(btnText === 'ACTIVO');
    }, [btnText]);

    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState); // Llamar a la función asociada con el cambio de estado del Switch
    };

    return(
        <View style={Styles.userActionDefault}>
            <Switch
                trackColor={{true:'#00d443' , false:'#d40000'}}
                thumbColor={'#8f8f8f'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{height: 50, alignSelf: 'center'}}
            />
            <Text style={{color: '#fff', textAlign: 'center'}}>{isEnabled ? 'DESACTIVAR' : 'ACTIVAR'}</Text>
        </View>
    )
}

//? Botón que me lleva a otra vista.
export const SwipeNavButton : React.FC<SwipeViewButtonProps> = ({icon = 'Config', btnText = 'BTN', route}) => {
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
                    <ChevronRight color='#215877' size={50}/>
                </TouchableOpacity>
            </View>
        </Swipeable>
    )
}

export const UserSwipeButton : React.FC<UserSwipeButtonProps> = ({iconName, user, role, status, actionButtons}) => {
    const swipeActionTrigger = useRef(null)
    const Icon = iconMap[iconName]
    function openActions() {
        if (swipeActionTrigger.current) {
            swipeActionTrigger.current.openRight()
        }
    }
    return(
        <Swipeable renderRightActions={() => [<DefaultUserActionButton btnText={status}/>, actionButtons]} ref={swipeActionTrigger}>
            <View style={Styles.swipeButton}>
                <View style={{flexDirection: 'row'}}>
                    <View style={Styles.userSwipeIcon}>
                        <Icon color='#215877' size={50} style={Styles.userSwipeIcon}/>
                    </View>
                    <View>
                        <Text style={{fontSize: 20, color:'#215877'}}>{user}</Text>
                        <Text>{role}</Text>
                        <Text>Estado: <Text style={{color:'#5294ff'}}>{status}</Text></Text>
                    </View>
                </View>
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
        <SwipeActionButton key={0} icon='Reports2' btnText='DETALLE' btnFunc={something}/>,
        <SwipeActionButton key={1} icon='Home' btnText='DELETE'/>,
        <SwipeNavButton key={2} icon='Config' btnText='WHERE' route='Home'/>
    ]
    const array2 = [
        <SwipeActionButton key={0} icon='Config' btnText='CONFIG'/>,
        <SwipeActionButton key={1} icon='Search' btnText='SEARCH' btnFunc={something}/>
    ]
    return(
        <View style={Styles.container}>
            <SwipeButton btnText='Hola chato' actionButtons={array}/>
            <UserSwipeButton user='ORION' iconName='User' role='Super administrador' status='ACTIVO' actionButtons={array2}/>
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
    },
    userSwipeIcon:{
        marginRight: 10,
        justifyContent: 'center'
    },
    userActionDefault:{
        width: 110,
        backgroundColor: '#215877',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5
    }
})