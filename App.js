import React from 'react';

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import {
  ProfileScreen,
  ListScreen,
  CartScreen,
  SignOutScreen
} from './screens';
import Product from './components/product/Product';

const DrawerNavigator = createDrawerNavigator({
  ProfileScreen: {
    screen: ProfileScreen
  },
  ListScreen,
  CartScreen,
  SignOutScreen
});

export default createAppContainer(DrawerNavigator);
