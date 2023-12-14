import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useStyles } from '../../config/GlobalStyles';

interface CounterFooterProps{
    total: number
}

export const CounterFooter : React.FC<CounterFooterProps> = ({total}) => {
    const themeStyles = useStyles()
    return(
        <View style={[styles.infoContainer, {backgroundColor: themeStyles.secondaryColor}]}>
            <Text style={styles.infoText}>Total registros: {total}</Text>
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
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    infoText: {
      fontSize: 20,
      color: '#fff',
    },
  });