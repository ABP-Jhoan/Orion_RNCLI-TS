import React from 'react';
import 'react-native-gesture-handler'
import { MainStack } from './navigation/MainStack'
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { Provider } from 'react-redux'

import { store } from './config/Redux/Store'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
      <MainStack/>
      </GluestackUIProvider>
    </Provider>
  );
}

export default App;
