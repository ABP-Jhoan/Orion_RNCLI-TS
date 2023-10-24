import React from "react";
import { StyleSheet, View, Text } from "react-native";

// Interface para definir el tipo de dato que serán las props, esto es por TypeScript.
interface properties{
    name: string;
    desc: string;
}
// Componente "card" en el que se presenta la información de cada "producto".
export function Product(props:properties){
    return(
        <View style={styles.card}>
            <Text style={styles.titulo}>{props.name}</Text>
            <Text style={styles.descriptionTitle}>Descripción:</Text>
            <Text>{props.desc}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    titulo:{
        fontSize: 20
    },
    descriptionTitle:{
        fontSize: 15
    },
    card:{
        backgroundColor: '#d1e000',
        borderRadius: 10,
        marginBottom: 15,
        opacity: 1,
        padding: 10
    }
})