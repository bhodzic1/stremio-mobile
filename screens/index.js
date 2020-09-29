import React, { useContext } from 'react';
import Screen from './Screen';
import Product from '../components/product/Product';
import ProductList from '../components/productList/ProductList';
import CartItems from '../components/cartItems/CartItems';
import { View, Text } from 'react-native';
import { CartContext } from '../context/CartContext';


export const ProfileScreen = ({ navigation }) => <Screen navigation={navigation} name="Profile" />
export const ListScreen = ({ navigation }) => <ProductList navigation={navigation} name="List" />
export const CartScreen = ({ navigation }) => <CartItems navigation={navigation} name="Cart" />
export const SignOutScreen = ({ navigation }) => <Screen navigation={navigation} name="Sign out" />

export const CartLength = ({ navigation }) => {
    const { cartLength } = useContext(CartContext);
    return (
        <View>
            <Text>
                { cartLength }
            </Text>
        </View>
    );
}