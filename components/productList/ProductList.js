import React, { useContext } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, FlatList, Button } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import Product from '../product/Product';


const listOfProducts = [
    {
        id: "187000",
        name: "Capricciosa",
        ingredients: ["Tomato sauce", "Cheese", "Mushrooms", "Chicken salami", "Oregano"],
        price: 10
    },
    {
        id: "187001",
        name: "Vegeteriana",
        ingredients: ["Tomato sauce", "Cheese", "Mushrooms", "Vegetables", "Oregano"],
        price: 8
    },
    {
        id: "187002",
        name: "Al Tono",
        ingredients: ["Tomato sauce", "Cheese", "Tuna", "Oregano"],
        price: 11
    },
    {
        id: "187003",
        name: "Funghi",
        ingredients: ["Tomato sauce", "Cheese", "Mushrooms", "Oregano"],
        price: 10
    },
    {
        id: "187004",
        name: "Margherita",
        ingredients: ["Tomato sauce", "Cheese", "Oregano"],
        price: 6
    },
    {
        id: "187005",
        name: "Mexicana",
        ingredients: ["Tomato sauce", "Cheese", "Mushrooms", "Pepperoni", "Chicken salami", "Oregano"],
        price: 12
    }
];

const ProductList = ({ navigation, name }) => {
    
    const renderItem = ({ item }) => (
        <Product key={ item.id } product={ item } />
    );

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                
                <TouchableOpacity
                    style={{ alignItems: "flex-end", margin: 16 }}
                    onPress={navigation.openDrawer} >
                    <FontAwesome5 name="bars" size={24} style={styles.menu}></FontAwesome5>
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={styles.text}>{name} portoriko</Text>
                </View>
                <SafeAreaView>
                    <FlatList
                        data={listOfProducts}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        
                    />
                </SafeAreaView>
                
            </SafeAreaView>
        </View>
    )
};

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
    menu: {
        marginTop: 20,
    }
});

export default ProductList;