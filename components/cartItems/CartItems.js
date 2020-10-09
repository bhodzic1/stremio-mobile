import React, { useContext, useEffect } from 'react';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { CartContext } from '../../context/CartContext';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from "@expo/vector-icons";
import Item from './Item';
import MovieCard from '../card/MovieCard';



const CartItems = ({ navigation, route }) => {
    const { products, setProducts, addProduct, clearCart, cartLength } = useContext(CartContext);
    
    const renderItem = ({ item }) => (
        <MovieCard key={ item.id } movie={item} />
    );
    return (
        <SafeAreaView>
            <SafeAreaView>
                <FlatList
                data={ products }
                renderItem={ renderItem }
                keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
            <Button style={ styles.button } title="CLEAR" onPress={ clearCart }></Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    },
    button: {
        paddingTop: 80
    },
    menu: {
        marginTop: 20,
    }
});

export default CartItems;