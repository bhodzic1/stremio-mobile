import React, { useContext } from 'react';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { CartContext } from '../../context/CartContext';
import Product from '../product/Product';
import { Text, View } from 'react-native';


const CartItems = ({ navigation, name }) => {
    const { products, setProducts, addProduct } = useContext(CartContext);

    const renderItem = ({ item }) => (
        <Product product={item} />
    );
    return (
        <View>
            <View>
                <Text> Bernesee:  { name } </Text>
            </View>
            <FlatList
            data={ products }
            renderItem={ renderItem }
            keyExtractor={item => item.id}
            />
        </View>
    )
}

export default CartItems;