import React from "react";
import { StyleSheet } from "react-native";
import { Box, Text } from '@gluestack-ui/themed';

export const DefCard : React.FC = () => {
    return(        
        <Box style={styles.container}>
            <Text color="black" textAlign="justify">
                Puede registrar multiples licencias de Orión en la app movil. si desea hacerlo, presione <Text color="#5294ff">AQUÍ</Text>
            </Text>
        </Box>
    )
}

export const DemoCard : React.FC = () => {
    return(
        <Box style={styles.container}>
            <Text style={styles.DEMOInfoText}>
                Al elegir la LICENCIA DEMO el sistema le asignará un Usuario y Clave automáticos al momento de iniciar sesión. Si desea cambiar a DEMO por favor presione el botón INICIAR.
            </Text>
        </Box>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%'
    },
    DEMOInfoText:{
        padding: 5,
        backgroundColor: '#5294ff',
        color: '#fff',
        textAlign: 'justify'
    }
})