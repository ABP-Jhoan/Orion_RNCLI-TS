import {Text, StyleSheet, ScrollView} from 'react-native'
import {Product} from './ProductCard'
import info from '../data/info.json'
import { useStyles } from '../config/GlobalStyles'

// Componente en el que se mapea el JSON y listarán los productos mostrados cada uno en un "productCard".
export const DataList: React.FC = () => {
    const themeStyles = useStyles()
    return(
        <ScrollView style={[styles.container, {backgroundColor: themeStyles.backgroundColor}]}>
            <Text style={[styles.title, {color: themeStyles.fontColor}]}>Listado de productos Disponibles</Text>
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