import { Text, View, StyleSheet } from 'react-native';

export const TabUno : React.FC = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Este es el tab número uno</Text>
            <Text style={styles.boton} onPress={() => navigation.navigate('Products')}>Ir a otra parte</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20
    },
    boton:{
        color: 'white',
        backgroundColor: '#0074e0',
        padding: 10,
        fontSize: 20,
        borderRadius: 10,
        marginBottom: 5,
        marginTop: 15
    }
})