import React, { lazy, Suspense, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import DotLoader from '../loaders/Loaders';
import { ListFooter } from '../Footers/ListFooter';

interface SimpleListViewProps{
  listados : any
  total : any
  children : any
  scroll : () => void
}

export const InventoryView: React.FC<SimpleListViewProps> = ({children, listados, total, scroll}) => {
  return (
    <>
        <ScrollView
            style={styles.view}
            onScroll={scroll}
            scrollEventThrottle={16}
        >
          <Suspense fallback={<DotLoader />}>
              {children}
          </Suspense>
        </ScrollView>
        <ListFooter mostrados={listados} total={total}/>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 0,
    marginBottom: 50
  },
  infoContainer: {
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#215877'
  },
  infoText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default InventoryView;
