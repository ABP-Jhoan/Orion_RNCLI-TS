import React, { lazy, Suspense, useState, useEffect, ReactElement } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import data from '../data/inventario.json';
import { InventoryView } from '../components/listViewers/SimpleListViewer';
import SimpleListItem from '../components/listItems/SimpleListAlert'
import { LogListItem } from '../components/listItems/LogListItem';

export const ListView: React.FC = () => {

  return (
    <View>
      <InventoryView/>
    </View>
  );
};
