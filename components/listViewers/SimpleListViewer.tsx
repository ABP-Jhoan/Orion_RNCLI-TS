import React, { lazy, Suspense, useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import data from '../../data/inventario.json';
import DotLoader from '../loaders/Loaders';
import { ListFooter } from '../Footers/ListFooter';
import { usePagination } from './logic';

//? Componente que será importado de manera diferida.
const SimpleListItem = lazy(() => import('../listItems/SimpleListAlert'));

export const InventoryView: React.FC = () => {
  //? Custom Hook para paginación (evitar boilerPlate).
  const [visibleItems, handleScroll] = usePagination()
  const currentlyVisibleComponents = data.slice(0, visibleItems).map((item) => (
    <SimpleListItem
      key={item.id}
      PName={item.nombre}
      Codigo={item.codigo}
      Grupo={item.grupo}
      UE={item.UE}
      Bodega={item.bodega}
      Stock={item.stock}
      Alerta={item.alerta}
    />
  ));

  return (
    <>
        <ScrollView
            style={styles.view}
            onScroll={handleScroll}
            scrollEventThrottle={16}
        >
          <Suspense fallback={<DotLoader />}>
              {currentlyVisibleComponents}
          </Suspense>
        </ScrollView>
        <ListFooter mostrados={currentlyVisibleComponents.length} total={data.length}/>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 10,
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
