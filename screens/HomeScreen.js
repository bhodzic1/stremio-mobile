import React from 'react';
import { View } from 'react-native';
import ProductList from '../components/productList/ProductList';

const HomeScreen = ({ navigation }) => {

    return (
        <View>
            <ProductList navigation={ navigation } />
        </View>
    )
}