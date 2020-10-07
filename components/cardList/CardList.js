import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MovieCard from '../card/MovieCard';


const CardList = ({ navigation, data, title }) => {

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
            <MovieCard key={item.id} movie={ item } />
        </TouchableOpacity>
    );
    

    return (
        <View>
            <Text style={styles.title}>{ title }</Text>
            <FlatList
            horizontal
            data={ data }
            renderItem={ renderItem }
            keyExtractor={ item => item.id.toString() }
            
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