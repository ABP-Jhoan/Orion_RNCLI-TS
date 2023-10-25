//? Imports propios de React y librerías.
import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native'
import {User} from 'lucide-react-native'

//? Definición de propiedades y tipos que recibirá el componente.
interface InputProps{
    iconName: String,
    placeHolder: String,
    secureTextEntry: boolean,
    value: String,

}

export const InputIcon : React.FC = () => {
    return(
        <View style={styles.container}>
            <User color='#fff' size={40} style={styles.icon}/>
            <TextInput style={styles.textArea}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        width: '100%',
        backgroundColor: '#0074e0',
        borderColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10
    },
    icon:{
        width: 30
    },
    textArea:{
        color: '#fff',
        width: '80%',
    }
})