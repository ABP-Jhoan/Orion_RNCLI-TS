import { Button, TextInput, Text, TouchableOpacity, Image, StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';


export const LoginForm: React.FC = ({setIsLoggedIn}) => {
    // Constantes con estado por defecto vacío, aquí se guardarán los datos ingresados.
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const handleUsuarioChange = (text: string) => {
       setUsuario(text);
    };
    const handleContrasenaChange = (text: string) => {
       setContrasena(text);
    };
    //? Función donde se realiza el procesamiento de credenciales
    const login = () => {
        if (usuario == 'admin' && contrasena == '12345') {
            alert('Login exitoso');
            setIsLoggedIn(true);
        }
        else{
            alert('Credenciales incorrectas');
        }
    }
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            style={styles.container}
        >
            <Image style={styles.formImage} source={require('../assets/OrionLogo.png')}/>
            <Text style={{ color: '#fff' }}>Usuario: admin</Text>
            <Text style={{ color: '#fff' }}>Contraseña: 12345</Text>
            <TextInput
                style={styles.textInpu}
                placeholder="User"
                value={usuario}
                onChangeText={handleUsuarioChange}
            />
            <TextInput
                style={styles.textInpu}
                placeholder="Password"
                secureTextEntry={true}
                value={contrasena}
                onChangeText={handleContrasenaChange}
            />
            <Button style={styles.loginButton} title='Iniciar sesión' onPress={login}/>
            <View style={styles.legend}>
                <Text style={{ color: 'white' }}>Problemas al iniciar sesión?, </Text>
                <TouchableOpacity>
                    <Text style={{ color: '#000' }} onpress={() => Linking.openURL('https://www.example.com')}>
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
        backgroundColor: '#41587d',
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