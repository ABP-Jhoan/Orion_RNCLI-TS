import { Text, TouchableOpacity, Image, StyleSheet, View, KeyboardAvoidingView, ToastAndroid, Linking, Platform } from 'react-native';
import React, { useState } from 'react';
import { InputIcon } from "../components/inputs/InputIcon";
import { ConfButton } from "../components/buttons/configButton";

interface LoginProps{
    setIsLoggedIn : (logged : boolean) => void
}

export const LoginForm: React.FC<LoginProps> = ({setIsLoggedIn}) => {
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
    const login = () => {
        if (usuario.InputIcon == 'admin' && contrasena.InputIcon == '12345') {
            showToast('Login exitoso')
            setIsLoggedIn(true);
        }
        else{
            showToast('Credenciales incorrectas')
        }
    }
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            style={styles.container}
        >
            <Image style={styles.formImage} source={require('../assets/OrionLogo.png')}/>
            <Text style={{ color: '#000' }}>Usuario: admin</Text>
            <Text style={{ color: '#000' }}>Contraseña: 12345</Text>
            <InputIcon iconName="User" iconEye={false} secureTextEntry={false} textValue={usuario.InputIcon} changeFunc={handleUsuarioChange}/>
            <InputIcon iconName="Password" iconEye={true} secureTextEntry={true} textValue={contrasena.InputIcon} changeFunc={handleContrasenaChange}/>
            
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