import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
import { Sun, Moon } from 'lucide-react-native'; // Importa los iconos según sea necesario


export const SwitchButton = () => {
  const [isChecked, setIsChecked] = useState(false);
  const showToast = (message : string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT)
  }
  const toggleSwitch = () => {
    setIsChecked((prevValue) => !prevValue);
    showToast("Cambiando de theme.")
  };

  return (
    <TouchableOpacity
      style={[styles.switchContainer, isChecked && styles.switchContainerChecked]}
      activeOpacity={0.7}
      onPress={toggleSwitch}
    >
      {isChecked ? <Sun color='#fcba03' size={20}/> : <Moon color='#fff' size={20}/>}
      <Text style={styles.text}>{isChecked ? 'Modo claro' : 'Modo oscuro'}</Text>
    </TouchableOpacity>
  );
};

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
});
