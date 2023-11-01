import { Text, View, StyleSheet } from 'react-native';
import {Box, Checkbox, CheckboxIndicator, CheckboxLabel, CheckboxIcon, CheckIcon} from '@gluestack-ui/themed'
import { CommonInput } from '../../components/inputs/commonInput';
import { ConfButton } from '../../components/buttons/configButton';
import { useState } from 'react';

export const TabDos : React.FC = () => {
    //const [error, setError] = useState(false) //? Estado de error para pintar los inputs que presenten errores o estén vacíos.
    const [textoUno, setTextoUno] = useState({CommonInput:''}) //? Estado de cada input para poder escribir y guardar sus valores.
    const [textoDos, setTextoDos] = useState({CommonInput:''})
    const [checked, setChecked] = useState(false)

    const handleValorUno = (text : string) => {
        setTextoUno({...CommonInput, CommonInput:text})
    }
    const handleValorDos = (text : string) => {
        setTextoDos({...CommonInput, CommonInput:text})
    }
    const prueba = () => {
        //? Validaciones de condiciones que debe cumplir cada campo del formulario.
        if (textoUno.CommonInput === '') {
            alert('Campo textoUno vacío')
            //setError(true)
        }
        else{
            alert('Todo bien')
            //setError(false)
        }
    }
    const checkear = () => {
        if (checked) {

            setChecked(false)
        }
        else{

            setChecked(true)
        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Para el registro de estos datos deberá solicitar a su proveedor de servicio que le proporcione la información.</Text>
            <Box style={styles.cardBody}>
                <Box style={styles.cardTitle}>
                    <Text style={styles.titleText}>Ingrese datos de la licencia</Text>
                </Box>
                <CommonInput labelTitle='Código' placeholder='Código' textValue={textoUno.CommonInput} changeFunc={handleValorUno}/>
                <CommonInput labelTitle='Token' placeholder='Token' textValue={textoDos.CommonInput} changeFunc={handleValorDos}/>
                <View style={styles.checkContainer}>
                    {// TODO: Convertir en componente individual }
                    <Checkbox size="md" isInvalid={false} isDisabled={false} value='something' aria-label='something' onChange={checkear}>
                        <CheckboxIndicator mr="$2" style={checked ? styles.checkStyle : null}>
                            <CheckboxIcon as={CheckIcon} />
                        </CheckboxIndicator>
                        <CheckboxLabel>Desea iniciar sesión con esta Licencia</CheckboxLabel>
                    </Checkbox>
                </View>
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
    },
    checkContainer:{
        padding: 15
    },
    checkStyle:{
        borderColor: '#5FB85F',
        backgroundColor: '#5FB85F'
    }
})