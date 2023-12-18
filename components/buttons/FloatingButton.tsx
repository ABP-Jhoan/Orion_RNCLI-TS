import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated'
import { TapGestureHandler } from 'react-native-gesture-handler'
import { Plus, RefreshCw } from 'lucide-react-native'
import { iconMap } from '../../assets/icons/Icons'
import { useNavigation } from '@react-navigation/native'

interface FloatActionButtonProps{
  iconName: keyof typeof iconMap
  btnText: string
  btnFunc?: () => void
  color?: string
}

interface FloatButtonProps{
  actionButtons: React.ReactElement<FloatActionButtonProps>[]
}

interface ReloadFloatButtonProps{
  ruta: string
}

export const FloatActionButton : React.FC<FloatActionButtonProps> = ({btnText, iconName, btnFunc, color = '#215877'}) => {
  const Icon = iconMap[iconName]
  function btnFunction() {
    btnFunc
  }
  return(
    <TouchableOpacity style={{flexDirection: 'row', marginBottom: 20}} onPress={btnFunction}>
      <Text style={[styles.actionText, {backgroundColor: color}]}>{btnText}</Text>
      <Text style={[styles.actionIcon, {backgroundColor: color}]}><Icon color='#fff' size={30}/></Text>
    </TouchableOpacity>
  )
}

export const FloatButton : React.FC<FloatButtonProps> = ({actionButtons}) => {
  const [isRotated, setRotated] = useState(false)
  const rotationValue = useSharedValue(0)

  //? Rotación del botón, acción de "activo"/"inactivo".
  function rotateComponent(){
    rotationValue.value = withSpring(isRotated ? 0 : 45)
    setRotated(!isRotated)
  }
  //? Función para cerrar dando tap en la pantalla fuera del botón.
  function backClose(){
    if (isRotated) {
        rotationValue.value = withSpring(isRotated ? 0 : 45)
        setRotated(false)
    }
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotationValue.value}deg` }],
    }
  })

  return (
    <TapGestureHandler onActivated={backClose}>
        <View style={[styles.container, isRotated ? {backgroundColor: '#8f8f8f8f'} : {height: 0, position:'absolute', bottom: 0}]}>
            <View style={styles.optionsContainer}>
                {isRotated ? actionButtons : null}
                <TapGestureHandler onActivated={rotateComponent}>
                        <Animated.View style={[styles.box, animatedStyle]}>
                            <Plus color='#fff' size={30}/>
                        </Animated.View>
                </TapGestureHandler>
            </View>
        </View>
    </TapGestureHandler>
  )
}

//! RELOAD BUTTON
export const ReloadFloatButton : React.FC<ReloadFloatButtonProps> = ({ruta}) => {
  const navigation = useNavigation()
  return(
    <TouchableOpacity style={styles.reloadButton} onPress={() => navigation.navigate(ruta)}>
      <RefreshCw color='#fff' size={30}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  //? Botón flotante con botones de acción.
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  optionsContainer:{
    position: 'absolute',
    bottom: 60,
    right: 20,
    alignItems: 'flex-end'
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  //? Botones de acciónes
  actionText: {
    padding: 10, color: '#fff',
    marginRight: 10,
    borderRadius: 5
  },
  actionIcon: {
    width: 40,
    borderRadius: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  //? Botón flotante de recarga de página.
  reloadButton: {
    backgroundColor: '#5eb85f',
    width: 60, 
    height: 60, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 60,
    marginRight: 10
  }
})
