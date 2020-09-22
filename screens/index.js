import React from 'react';
import Screen from './Screen';


export const ProfileScreen = ({ navigation }) => <Screen navigation={navigation} name="Profile" />
export const ListScreen = ({ navigation }) => <Screen navigation={navigation} name="List" />
export const CartScreen = ({ navigation }) => <Screen navigation={navigation} name="Cart" />
export const SignOutScreen = ({ navigation }) => <Screen navigation={navigation} name="Sign out" />