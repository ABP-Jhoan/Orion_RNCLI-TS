import { useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import {Box} from '@gluestack-ui/themed'
import { LabeledInput } from '../../components/inputs/LabeledInput';
import { ConfButton } from '../../components/buttons/configButton';
import { OrionCheckBox } from '../../components/selectors/ChechBox_RadioButton';

export const TabDos : React.FC = () => {
    //const [error, setError] = useState(false) //? Estado de error para pintar los inputs que presenten errores o estén vacíos.
    const [textoUno, setTextoUno] = useState({LabeledInput:''}) //? Estado de cada input para poder escribir y guardar sus valores.
    const [textoDos, setTextoDos] = useState({LabeledInput:''})

    const handleValorUno = (text : string) => {
        setTextoUno({...LabeledInput, LabeledInput:text})
    }
    const handleValorDos = (text : string) => {
        setTextoDos({...LabeledInput, LabeledInput:text})
    }
    const prueba = () => {
        //? Validaciones de condiciones que debe cumplir cada campo del formulario.
        if (textoUno.LabeledInput === '') {
            Alert.alert('Campo textoUno vacío')
            //setError(true)
        }
        else{
            Alert.alert('Todo bien')
            //setError(false)
        }
    }
    function checkeado() {
        Alert.alert('Checked')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Para el registro de estos datos deberá solicitar a su proveedor de servicio que le proporcione la información.</Text>
            <Box style={styles.cardBody}>
                <Box style={styles.cardTitle}>
                    <Text style={styles.titleText}>Ingrese datos de la licencia</Text>
                </Box>
                <LabeledInput labelTitle='Código' placeholder='Código' textValue={textoUno.LabeledInput} changeFunc={handleValorUno}/>
                <LabeledInput labelTitle='Token' placeholder='Token' textValue={textoDos.LabeledInput} changeFunc={handleValorDos}/>
                <OrionCheckBox label='Desea iniciar sesión con esta Licencia' onCheck={checkeado}/>
            </Box>
            <ConfButton btnText='Probar' btnClass='Config' btnFunc={prueba}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20
    },
    text:{
        marginLeft: 0,
        width: '100%',
        fontSize: 15,
        marginBottom: 20,
        color: '#000'
    },
    cardBody:{
        borderColor: '#8f8f8f8f',
        borderWidth: 1,
        borderRadius: 5,
        overflow: 'hidden'
    },
    cardTitle:{
        height: 50,
        backgroundColor: '#6fb9c3',
        justifyContent: 'center'
    },
    titleText:{
        paddingLeft: 10,
        color: '#fff'
    }
})