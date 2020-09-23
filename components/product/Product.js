import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';



const Product = ({ name, price }) => {

    return(
        <View style={styles.item}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.price}>{price}</Text>
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
    }
});

export default Product;