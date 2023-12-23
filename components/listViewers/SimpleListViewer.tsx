import React, { Suspense, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { LoaderView } from '../loaders/LoadingScreen';
import { useStyles } from '../../config/GlobalStyles';

interface SimpleListViewProps{
  listados : any
  total : any
  children : React.ReactElement[]
  scroll : () => void
}

export const InventoryView: React.FC<SimpleListViewProps> = ({children, listados, total, scroll}) => {
  const themeStyles = useStyles()
  return (
    <>
        <ScrollView
            style={styles.view}
            onScroll={scroll}
            scrollEventThrottle={16}
        >
        {children}
        </ScrollView>
        <View style={[styles.footerContainer, {backgroundColor: themeStyles.secondaryColor}]}>
            <Text style={styles.infoText}>Total registros: {listados}/{total}</Text>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 0,
    marginBottom: 50,
    flex: 1
  },
  infoText: {
    fontSize: 20,
    color: '#fff',
  },
  footerContainer: {
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

export default InventoryView;
