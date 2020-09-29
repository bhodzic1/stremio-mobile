import React from 'react';

import { CartProvider } from './context/CartContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Drawer from './drawer/Drawer';


const App = () => {
  return (
    <SafeAreaProvider>
      <CartProvider>
        <Drawer />
      </CartProvider>
    </SafeAreaProvider>
  )
}

export default App;
