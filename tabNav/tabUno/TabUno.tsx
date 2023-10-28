import { Text, View, StyleSheet } from 'react-native';
import { BoxComp } from '../../components/cards/Card';

export const TabUno : React.FC = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Para cambiar de licencia, seleccione el código deseado en el selector y oprima INICIAR</Text>
            <BoxComp/>
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
    }
})