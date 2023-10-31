import { Text, View, StyleSheet } from 'react-native';
import {Box} from '@gluestack-ui/themed'
export const TabDos : React.FC = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Para el registro de estos datos deberá solicitar a su proveedor de servicio que le proporcione la información.</Text>
            <Box style={styles.cardBody}>
                <Box style={styles.cardTitle}>
                    <Text style={styles.titleText}>Ingrese datos de la licencia</Text>
                </Box>
                <Text>New text</Text>
            </Box>
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
        height: 500,
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