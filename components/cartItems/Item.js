import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const Item = ({ product }) => {

    return (
        <View style={ styles.item }>
            <Text style={styles.title}>{product.id}</Text>
            <Text style={styles.price}>{product.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f1c2aa',
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

export default Item;