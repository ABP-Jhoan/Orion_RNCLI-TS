import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import type {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {MainStack} from './navigation/MainStack'

//TODO: Ver que hptas está fallando a la hora de compilar.
function App(): JSX.Element {
  return (
     <MainStack/>
  );
}

export default App;
