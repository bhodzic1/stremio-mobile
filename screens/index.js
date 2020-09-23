import React from 'react';
import Screen from './Screen';
import Product from '../components/product/Product';
import ProductList from '../components/productList/ProductList';


export const ProfileScreen = ({ navigation }) => <Screen navigation={navigation} name="Profile" />
export const ListScreen = ({ navigation }) => <ProductList navigation={navigation} name="List" />
export const CartScreen = ({ navigation }) => <Screen navigation={navigation} name="Cart" />
export const SignOutScreen = ({ navigation }) => <Screen navigation={navigation} name="Sign out" />