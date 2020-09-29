import React from 'react';
import { View, Text } from 'react-native';

const ProductDetails = ({ navigation }) => {

    return (
        <View>
            <Text> { navigation.getParam('name') } </Text>
            <Text> { navigation.getParam('ingredients') } </Text>
            <Text> { navigation.getParam('price') } </Text>
        </View>
    )
}



export default ProductDetails;