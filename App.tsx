import React,{useEffect} from 'react';
import 'react-native-gesture-handler'
import { Provider } from 'react-redux';
import { MainStack } from './navigation/MainStack'
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import {store} from './config/Redux/Store'
import { readInitialStateAsync } from './config/Redux/Slices/ThemeSlice'

function App(): JSX.Element {
  useEffect(() => {store.dispatch(readInitialStateAsync())})
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <MainStack/>
      </GluestackUIProvider>
    </Provider>
  );
}

export default App;
