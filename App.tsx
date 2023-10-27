import React from 'react';
import 'react-native-gesture-handler';
import {MainStack} from './navigation/MainStack'
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"

function App(): JSX.Element {
  return (
    <GluestackUIProvider config={config}>
     <MainStack/>
    </GluestackUIProvider>
  );
}

export default App;
