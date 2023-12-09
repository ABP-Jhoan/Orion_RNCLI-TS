import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native'
import { Sun, Moon } from 'lucide-react-native'
import { useAppSelector, useAppDispatch } from '../../config/Redux/hooks'
import { changeState } from '../../config/Redux/Slices/ThemeSlice'

export const SwitchButton = () => {
  const theme = useAppSelector((state) => state.theme.theme)
  const dispatch = useAppDispatch()

  const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT)
  }

  const toggleSwitch = () => {
    showToast("Cambiando de theme.")
    dispatch(changeState(!theme))
  }

  return (
    <TouchableOpacity
      style={[styles.switchContainer, theme && styles.switchContainerChecked]}
      activeOpacity={0.7}
      onPress={toggleSwitch}
    >
      {theme ? <Sun color='#fcba03' size={20}/> : <Moon color='#fff' size={20}/>}
      <Text style={styles.text}>{theme ? 'Modo claro' : 'Modo oscuro'}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#767577',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  switchContainerChecked: {
    backgroundColor: '#81b0ff',
  },
  text: {
    marginLeft: 10,
    color: 'white',
  },
})
