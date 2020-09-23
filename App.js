import React from 'react';

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import {
  ProfileScreen,
  ListScreen,
  CartScreen,
  SignOutScreen
} from './screens';
import { CartProvider } from './context/CartContext';

const DrawerNavigator = createDrawerNavigator({
  ProfileScreen: {
    screen: ProfileScreen
  },
  ListScreen,
  CartScreen,
  SignOutScreen
});

const AppContainer = createAppContainer(DrawerNavigator);

const App = () => {
  return (
    <CartProvider>
      <AppContainer />
    </CartProvider>
  )
}

export default App;
