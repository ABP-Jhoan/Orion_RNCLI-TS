import {Text, StyleSheet, ScrollView} from 'react-native'
import {Product} from './ProductCard'
import info from '../data/info.json'

// Componente en el que se mapea el JSON y listarán los productos mostrados cada uno en un "productCard".
export const DataList: React.FC = () => {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Listado de productos Disponibles</Text>
            {/* //? Mapeamos la variable info para obtener sus objetos y mostrarlos en un componente "Product". */}
            {info.map((item) =>
                <Product
                    key={item.id}
                    name={item.title}
                    desc={item.body}
                />
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title:{
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 50
    }
});