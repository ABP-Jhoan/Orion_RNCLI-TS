import React, { lazy, Suspense, useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import data from '../data/inventario.json';
import DotLoader from '../components/loaders/Loaders';


const SimpleListItem = lazy(() => import('../components/listItems/SimpleListAlert'));

export const InventoryView: React.FC = () => {
  const itemsPerPage = 10;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const contentHeight = event.nativeEvent.contentSize.height;
    const paddingToBottom = 20;

    if (offsetY + event.nativeEvent.layoutMeasurement.height >= contentHeight - paddingToBottom) {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerPage);
    }
  };

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
        <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
                {currentlyVisibleComponents.length}/{data.length}
            </Text>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 10,
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 16
  },
  infoText: {
    fontSize: 20,
    color: '#215877',
  },
});

export default InventoryView;
