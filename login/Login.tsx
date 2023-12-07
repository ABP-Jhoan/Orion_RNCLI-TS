import { Text, TouchableOpacity, Image, StyleSheet, View, KeyboardAvoidingView, ToastAndroid, Linking, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InputIcon } from "../components/inputs/InputIcon";
import { ConfButton } from "../components/buttons/configButton";
import { useAppSelector, useAppDispatch } from '../config/Redux/hooks'
import { lightStyles, darkStyles } from '../config/GlobalStyles';

interface LoginProps{
    setIsLoggedIn : (logged : boolean) => void
}

export const LoginForm: React.FC<LoginProps> = ({setIsLoggedIn}) => {
    const theme = useAppSelector((state) => state.theme.theme)

    // Constantes con estado por defecto vacío, aquí se guardarán los datos ingresados.
    const [usuario, setUsuario] = useState({InputIcon:''});
    const [contrasena, setContrasena] = useState({InputIcon:''});
    const handleUsuarioChange = (text: string) => {
       setUsuario({...usuario, InputIcon:text});
    };
    const handleContrasenaChange = (text: string) => {
        setContrasena({...contrasena, InputIcon:text});
    };
    //? Función donde se realiza el procesamiento de credenciales
    const showToast = (message : string) => {
        ToastAndroid.show(message, ToastAndroid.SHORT)
    }
    const login = async () => {
        let email = usuario.InputIcon
        let password = contrasena.InputIcon
        if (email == '' || password == '') {
            showToast("Por favor ingrese sus credenciales de acceso.")
        }
        else{
            try {
                const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
                    email,
                    password
                })
                console.log(response.data.access_token)
                showToast('Inicio de sesión exitoso')
                setIsLoggedIn(true);
            } catch (error) {
                console.log("Error en la autenticación: " + error + ", credenciales ingresadas: " + email + " " + password)
                showToast('Credenciales incorrectas')
            }
        }
    }
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            style={[styles.container, {backgroundColor: theme ? lightStyles.backgroundColor : darkStyles.backgroundColor}]}
        >
            <Image style={styles.formImage} source={require('../assets/images/OrionLogo.png')}/>
            <Text style={[styles.testingLabel, {color: theme ? lightStyles.fontColor : darkStyles.fontColor}]}>App Orion for testing purposes</Text>
            <Text style={{color: theme ? lightStyles.fontColor : darkStyles.fontColor}}>User: john@mail.com</Text>
            <Text style={{color: theme ? lightStyles.fontColor : darkStyles.fontColor}}>Pass: changeme</Text>
            <InputIcon iconName="User"
                iconEye={false}
                secureTextEntry={false}
                textValue={usuario.InputIcon}
                changeFunc={handleUsuarioChange}/>
            <InputIcon iconName="Password" 
                iconEye={true} 
                secureTextEntry={true} 
                textValue={contrasena.InputIcon}
                changeFunc={handleContrasenaChange}/>
            
            <ConfButton btnText='Iniciar sesión' btnClass='Pricipal' btnFunc={login}/>
            <View style={styles.legend}>
                <Text style={{ color: '#000' }}>Problemas al iniciar sesión?, </Text>
                <TouchableOpacity>
                    <Text style={{ color: '#000' }} onPress={() => Linking.openURL('https://www.example.com')}>
                        contactenos.
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 885,
        paddingTop: 100,
        padding: 20,
        flex: 1,
        justifyContent: 'center',
    },
    formImage: {
        alignSelf: 'center'
    },
    testingLabel:{
        width: '100%',
        textAlign: 'center',
        color: '#215877',
        marginBottom: 10,
        fontSize: 15
    },
    textInpu: {
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        height: 40,
        textAlign: 'center'
    },
    legend: {
        textAlign: 'center',
        width: '100%',
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})