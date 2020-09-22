import React from 'react';

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import {
  ProfileScreen,
  ListScreen,
  CartScreen,
  SignOutScreen
} from './screens';

const DrawerNavigator = createDrawerNavigator({
  ProfileScreen,
  ListScreen,
  CartScreen,
  SignOutScreen
});

export default createAppContainer(DrawerNavigator);
