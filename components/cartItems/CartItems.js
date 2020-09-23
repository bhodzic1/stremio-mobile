import React, { useContext } from 'react';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { CartContext } from '../../context/CartContext';
import Product from '../product/Product';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from "@expo/vector-icons";
import Item from './Item';


const CartItems = ({ navigation, name }) => {
    const { products, setProducts, addProduct, clearCart } = useContext(CartContext);

    const renderItem = ({ item }) => (
        <Item key={ item.id } product={item} />
    );
    return (
        <SafeAreaView>
            <TouchableOpacity
                style={{ alignItems: "flex-end", margin: 16 }}
                onPress={navigation.openDrawer} >
                <FontAwesome5 name="bars" size={24} style={styles.menu}></FontAwesome5>
            </TouchableOpacity>
            <SafeAreaView>
                <FlatList
                data={ products }
                renderItem={ renderItem }
                keyExtractor={item => item.id}
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