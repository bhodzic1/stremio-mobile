import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MovieCard from '../card/MovieCard';


const CardList = ({ navigation, data }) => {

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
            <MovieCard key={item.id} movie={ item } />
        </TouchableOpacity>
    );

    return (
        <View>
            <Text style={ styles.title }>TOP MOVIES</Text>
            <FlatList
            horizontal
            data={ data }
            renderItem={ renderItem }
            keyExtractor={ item => item.id.toString() }
            onTouch
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        paddingTop: 20,
        paddingLeft: 20,
        fontSize: 20,
        fontFamily: "Sans serif",

    }
})

export default CardList;