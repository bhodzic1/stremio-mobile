import React from 'react';
import Screen from './Screen';
import CartItems from '../components/cartItems/CartItems';


export const ProfileScreen = ({ navigation }) => <Screen navigation={navigation} name="Profile" />
export const CartScreen = ({ navigation }) => <CartItems navigation={navigation} name="Cart" />
export const SignOutScreen = ({ navigation }) => <Screen navigation={navigation} name="Sign out" />

