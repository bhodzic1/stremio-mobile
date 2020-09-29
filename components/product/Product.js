import React, { useContext } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { CartContext } from '../../context/CartContext';


const Product = ({ product, navigation }) => {
    const { addProduct } = useContext(CartContext);
    return(
        <View style={styles.item}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Button title="Click" style={styles.button} onPress={() => addProduct(product)} />
            <Button title="Details" style={styles.button} onPress={() => navigation.navigate('Details', product)} />
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    price: {
        fontSize: 18,
    },
    button: {
        marginLeft: 90

    }
});

export default Product;