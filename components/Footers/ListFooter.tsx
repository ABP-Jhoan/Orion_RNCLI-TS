import React, { lazy, Suspense, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

interface ListFooterProps{
    mostrados: number
    total: number
}

export const ListFooter : React.FC<ListFooterProps> = ({mostrados, total}) => {
    return(
        <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Total registros: {mostrados}/{total}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
      width: '100%',
      height: 50,
      position: 'absolute',
      bottom: 0,
      right: 0,
      padding: 10,
      backgroundColor: '#215877',
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    infoText: {
      fontSize: 20,
      color: '#fff',
    },
  });